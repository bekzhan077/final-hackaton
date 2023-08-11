import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useAuthContext } from "../contexts/AuthContexts";
import { TextField } from "@mui/material";

export default function ResetModal() {
  const { open, handleClose, resetPassword } = useAuthContext();

  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const data2 = [...data][0][1];
    if (data2.length < 1) {
      alert("Fill field");
      return;
    }
    resetPassword(data);
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box onSubmit={handleSubmit} component="form" noValidate sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirm your email
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Button type="submit">Send</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
