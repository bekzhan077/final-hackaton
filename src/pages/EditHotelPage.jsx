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

const EditHotelPage = () => {
  const { getCategories, editHotel, getOneHotel, hotel } = useProductContext();

  const { id } = useParams();

  const [formValue, setFormValue] = useState({
    title: "",
    preview: "",
    description: "",
    price: "",
    images: "",
  });

  useEffect(() => {
    getCategories();
    getOneHotel(id);
  }, []);

  useEffect(() => {
    hotel && setFormValue(hotel);
  }, [hotel]);

  function handleChange(e) {
    if (e.target.name === "preview") {
      setFormValue({
        ...formValue,
        preview: e.target.files[0],
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
      !formValue.images
    ) {
      return;
    }
    console.log(formValue);

    const data = new FormData(event.currentTarget);
    console.log([...data]);
    editHotel(id, data);

    setFormValue({
      title: "",
      body: "",
      price: "",
      preview: "",
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
              Edit Hotel
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

export default EditHotelPage;
