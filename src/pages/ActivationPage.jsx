import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContexts";

const ActivationPage = () => {
  const [searchParams] = useSearchParams();
  const { activateUser } = useAuthContext();

  useEffect(() => {
    activateUser(searchParams.get("u"));
  }, []);

  return (
    <Box>
      <Typography variant="h3" sx={{ margin: "150 auto", textAlign: "center" }}>
        Активация аккаунта...
      </Typography>
    </Box>
  );
};

export default ActivationPage;
