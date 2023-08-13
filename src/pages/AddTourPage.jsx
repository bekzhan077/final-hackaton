import { Button, FormControl, Select } from "@mui/base";
import { CssBaseline, InputLabel, TextField, Typography } from "@mui/material";
import { Box, Container, ThemeProvider } from "@mui/system";
import React, { useState } from "react";
import { useProductContext } from "../contexts/ProductContext";

const AddTourPage = () => {
  const { getCategories, createProducts, categories } = useProductContext();
  console.log(categories, "sdjcshjdcbjsdjhcbj");
  const [formValue, setFormValue] = useState({
    title: "",
    image: "",
    description: "",
    price: "",
    category: "",
  });
  return (
    <div>
      <ThemeProvider>
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
              // onSubmit={handleSubmit}
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
                // value={formValue.title}
                // onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="description"
                label="description"
                // value={formValue.description}
                // onChange={handleChange}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="price"
                label="Price"
                type="number"
                // value={formValue.price}
                // onChange={handleChange}
              />

              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  // value={formValue.category}
                  // onChange={handleChange}
                  label="Category"
                  name="category"
                >
                  {/* {categories.map((category) => (
                    <MenuItem key={category.id} value={category.id}>
                      {category.title}
                    </MenuItem>
                  ))} */}
                </Select>
              </FormControl>

              <TextField
                margin="normal"
                required
                fullWidth
                type="file"
                name="image"
                // onChange={handleChange}
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
