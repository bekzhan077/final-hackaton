import React, { useEffect, useState } from "react";
import {
  Button,
  CssBaseline,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  createTheme,
} from "@mui/material";
import { Box, Container, ThemeProvider } from "@mui/system";
import { useProductContext } from "../contexts/ProductContext";

const defaultTheme = createTheme();

const AddTourPage = () => {
  const { getCategories, createProducts, categories } = useProductContext();

  const [formValue, setFormValue] = useState({
    title: "",
    preview: "",
    description: "",
    price: "",
    category: "",
  });

  useEffect(() => {
    getCategories();
  }, []);

  function handleChange(e) {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !formValue.title.trim() ||
      !formValue.body.trim() ||
      !formValue.price.trim() ||
      !formValue.preview ||
      !formValue.category
    ) {
      return;
    }

    const data = new FormData(event.currentTarget);

    createProducts(data);

    setFormValue({
      title: "",
      body: "",
      price: "",
      preview: "",
      category: "",
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
              New Hotel || Tours
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
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  label="Category"
                  name="category"
                  value={formValue.category}
                  onChange={handleChange}
                >
                  {categories.length > 0 &&
                    categories.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.id}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <TextField
                margin="normal"
                required
                fullWidth
                type="file"
                name="preview"
                onChange={handleChange}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add New Product
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default AddTourPage;
