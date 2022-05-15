import {
  Avatar,
  Box,
  Button,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

let url = "https://3kedcubnqg.execute-api.ap-south-1.amazonaws.com/prod";

const AddProducts = (props) => {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addProduct = async () => {
    setOpen(false);
    let data = await axios.post(url, {
      email: email,
      ProductName: title,
      ProductDescription: subtitle,
    });
    props.fetchAllProducts();
  };

  return (
    <div>
      <Button onClick={handleOpen} color="primary" variant="contained">
        ADD PRODUCT
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
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
              ADD PRODUCT DETAILS
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
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
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
                onClick={addProduct}
              >
                Submit
              </Button>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddProducts;
