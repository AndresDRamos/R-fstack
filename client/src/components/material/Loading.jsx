import { Oval } from "react-loader-spinner";
import React from "react";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { Box } from "@mui/material";

export const Loading = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Oval
        visible={true}
        height="100%"
        width="100%"
        color={colors.orange[500]}
        secondaryColor={colors.grey[500]}
        strokeWidthSecondary={5}
        strokeWidth={1}
        ariaLabel="oval-loading"
      />
    </Box>
  );
};
