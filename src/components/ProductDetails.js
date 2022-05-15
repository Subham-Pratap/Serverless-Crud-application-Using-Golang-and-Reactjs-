import { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  styled,
} from "@mui/material";
import { Box } from "@mui/system";
import EditProducts from "./EditProducts";
import axios from "axios";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #000000;
    color: #ffffff;
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`;

let url = "https://3kedcubnqg.execute-api.ap-south-1.amazonaws.com/prod";

const ProductDetails = (props) => {
  const [editProductObject, setEditProductObject] = useState({});
  const [deleteProductObject, setDeleteProductObject] = useState({});
  const [open, setOpen] = useState(false);

  const OpenEditProduct = (val) => {
    setOpen(true);
    setEditProductObject(val);
  };

  const deleteProduct = async (val) => {
    let eml = val.email;
    let dUrl = `${url}?email=${eml}`;
    console.log(dUrl);
    let data = await axios.delete(url);
    props.fetchAllProducts();
  };

  const CloseEditProduct = () => setOpen(false);
  useEffect(() => {
    props.fetchAllProducts();
  }, []);

  return (
    <>
      <StyledTable>
        <TableHead>
          <THead>
            <TableCell>Id</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>ProductName</TableCell>
            <TableCell>ProductDescription</TableCell>
            <TableCell></TableCell>
          </THead>
        </TableHead>
        <TableBody>
          {props.data.map((val, i) => (
            <TRow key={i}>
              <TableCell>{i}</TableCell>
              <TableCell>{val.email}</TableCell>
              <TableCell>{val.ProductName}</TableCell>
              <TableCell>{val.ProductDescription}</TableCell>
              <TableCell>
                <Button
                  color="primary"
                  variant="contained"
                  style={{ marginRight: 10 }}
                  onClick={() => OpenEditProduct(val)}
                >
                  Edit
                </Button>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => deleteProduct(val)}
                >
                  Delete
                </Button>
              </TableCell>
            </TRow>
          ))}
        </TableBody>
      </StyledTable>
      {open && (
        <EditProducts
          {...props}
          open={open}
          setOpen={setOpen}
          CloseEditProduct={CloseEditProduct}
          editProductObject={editProductObject}
        />
      )}
    </>
  );
};

export default ProductDetails;
