import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/home");
  }, [isAuthenticated]);

  return (
    <div className="flex items-center justify-center h-[calc(100vh-100px)] text-white ">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <h1 className=" text-white text-2xl font-bold">Iniciar sesión</h1>
        {loginErrors.length > 0 && (
          <div className="text-red-500 mt-2">
            {loginErrors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("Correo", { required: true })}
            placeholder="Correo"
            className="w-full bg-zinc-500 px-4 py-2 rounded-md my-2"
          />
          <input
            type="password"
            {...register("Clave", { required: true })}
            placeholder="Contraseña"
            className="w-full bg-zinc-500 px-4 py-2 rounded-md my-2"
          />
          <button type="submit" className="rounded-md bg-black px-2 py-1">
            Acceder
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
