import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

let url = "https://3kedcubnqg.execute-api.ap-south-1.amazonaws.com/prod";

const EditProducts = (props) => {
  console.log(props.editProductObject);
  const [title, setTitle] = useState(props.editProductObject.ProductName);
  const [email, setEmail] = useState(props.editProductObject.email);
  const [subtitle, setSubtitle] = useState(
    props.editProductObject.ProductDescription
  );

  const editProductDetails = async () => {
    props.setOpen(false);
    let data = await axios.put(url, {
      email: email,
      ProductName: title,
      ProductDescription: subtitle,
    });
    props.fetchAllProducts();
  };

  return (
    <Modal
      open={props.open}
      onClose={props.CloseEditProduct}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        style={{
          width: "500px",
          heigh: "auto",
          margin: "auto",
          padding: "20px",
          backgroundColor: "white",
          marginTop: "10%",
        }}
      >
        <div>
          <Typography
            component="h1"
            variant="h5"
            style={{
              marginBottom: "20px",
            }}
          >
            EDIT PRODUCT DETAILS
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="productName"
                  label="Product Name"
                  name="productName"
                  value={title}
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="productDescription"
                  label="Product Description"
                  name="productDescription"
                  value={subtitle}
                  onChange={(event) => {
                    setSubtitle(event.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{
                marginTop: "20px",
              }}
              onClick={editProductDetails}
            >
              Submit
            </Button>
          </form>
        </div>
      </Box>
    </Modal>
  );
};

export default EditProducts;
