import React, { useEffect, useState } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Typography,
  createTheme,
} from "@mui/material";
import { Box, Container, ThemeProvider } from "@mui/system";
import { useProductContext } from "../contexts/ProductContext";
import { useParams } from "react-router-dom";

const defaultTheme = createTheme();

const EditTourPage = () => {
  const { getOneTour, editTour, tour } = useProductContext();

  const { id } = useParams();

  const [formValue, setFormValue] = useState({
    title: "",
    preview: "",
    description: "",
    price: "",
    category: "",
    images: "",
  });

  useEffect(() => {
    getOneTour(id);
  }, []);

  useEffect(() => {
    tour && setFormValue(tour);
  }, [tour]);

  function handleChange(e) {
    console.log(e.target.files[0]);
    if (e.target.name === "preview") {
      setFormValue({
        ...formValue,

        preview: e.target.files[0],
      });
    } else {
      setFormValue({
        ...formValue,
        [e.target.name]: e.target.value,
      });
    }
  }

  function handleChange(e) {
    if (e.target.name === "images") {
      setFormValue({
        ...formValue,
        images: e.target.files[0],
      });
    } else {
      setFormValue({
        ...formValue,
        [e.target.name]: e.target.value,
      });
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !formValue.title.trim() ||
      !formValue.body.trim() ||
      !formValue.price.trim() ||
      !formValue.preview ||
      !formValue.images ||
      !formValue.category
    ) {
      return;
    }

    const data = new FormData(event.currentTarget);

    editTour(id, data);
    setFormValue({
      title: "",
      body: "",
      price: "",
      preview: "",
      category: "",
      images: "",
    });
  };

  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Edit Tour
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                label="Title"
                name="title"
                autoFocus
                value={formValue.title}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="body"
                label="Description"
                value={formValue.body}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="price"
                label="Price"
                type="number"
                value={formValue.price}
                onChange={handleChange}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                type="file"
                name="preview"
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                type="file"
                name="images"
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                type="file"
                name="images"
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                type="file"
                name="images"
                onChange={handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit Product
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default EditTourPage;
