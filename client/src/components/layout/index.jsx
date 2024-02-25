import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export const Layout = ({ children }) => {
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Topbar />
        {children}
      </main>
    </div>
  );
};
