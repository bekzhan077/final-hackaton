import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContexts";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const ResetPassPage = () => {
  const [searchParams] = useSearchParams();
  const [showPassword, setShowPassword] = React.useState(false);
  const { confirmPassword } = useAuthContext();

  function changeVisibility() {
    setShowPassword(!showPassword);
  }

  useEffect(() => {
    searchParams.get("u");
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const setPass = Object.fromEntries([...data]);

    console.log(setPass);
    confirmPassword(setPass, searchParams.get("u"));
  }

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", mt: "-200px" }}
        component="form"
        onSubmit={handleSubmit}
      >
        <TextField
          margin="normal"
          required
          name="new_password"
          label="Password"
          type={showPassword ? "text" : "password"}
          id="password"
          autoComplete="current-password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={changeVisibility}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          margin="normal"
          required
          name="password_confirmation"
          label="Confirm password"
          type="password"
        />
        <Button type="submit">save new password</Button>
      </Box>
    </Box>
  );
};

export default ResetPassPage;
