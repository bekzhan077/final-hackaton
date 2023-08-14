import { Button, FormControl, Select } from "@mui/base";
import {
  CssBaseline,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
  createTheme,
} from "@mui/material";
import { Box, Container, ThemeProvider } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useProductContext } from "../contexts/ProductContext";

const defaultTheme = createTheme();
const AddTourPage = () => {
  const { getCategories, createProducts, categories } = useProductContext();

  const [formValue, setFormValue] = useState({
    title: "",
    image: "",
    detailImg: "",
    detailImg2: "",
    detailImg3: "",
    description: "",
    price: "",
    categories: "",
  });

  useEffect(() => {
    getCategories();
  }, []);

  function handleChange(e) {
    if (e.target.name === "image") {
      setFormValue({
        ...formValue,
        image: e.target.files[0],
        detailImg: e.target.files[1],
        detailImg2: e.target.files[2],

        detailImg3: e.target.files[3],
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
      !formValue.description.trim() ||
      !formValue.price.trim() ||
      !formValue.image ||
      !formValue.detailImg ||
      !formValue.detailImg2 ||
      !formValue.detailImg3 ||
      !formValue.category
    ) {
      return;
    }

    const data = new FormData(event.currentTarget);

    createProducts(data);

    setFormValue({
      title: "",
      description: "",
      price: "",
      image: "",
      detailImg: "",
      detailImg2: "",
      detailImg3: "",
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
              New Dish
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
                name="description"
                label="Description"
                value={formValue.description}
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
                  value={formValue.category}
                  onChange={handleChange}
                  label="Category"
                  name="category"
                >
                  {categories.map((categories) => (
                    <MenuItem key={categories.id} value={categories.id}>
                      {categories.id}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                margin="normal"
                required
                fullWidth
                type="file"
                name="image"
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                type="file"
                name="detailImg"
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                type="file"
                name="detailImg2"
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                type="file"
                name="detailImg3"
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
