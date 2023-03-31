import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import { ApiConnection } from "../API/Controllers";
import { useNavigate, useParams } from "react-router-dom";

export default function Products() {
  let [products, setproducts] = useState([]);
  let navigate = useNavigate()
  let getData = async () => {
    try {
      let result = await ApiConnection.getAllData();
      setproducts(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  let showDtails = (id) => {
      navigate(`/products/${id}`);
  };
  
    let editProduct = (id) => {
      navigate(`/products/edit/${id}`)
  };
  
  let deleteProduct = async (id) => {
      
      await ApiConnection.deleteOneProduct(id)
      let newproducts = products.filter(product => product.id != id)
      setproducts(newproducts)
    };
  let addproduct = () => {
    navigate(`/products/edit/${0}`);
 }


  return (
    <div className="container my-5">
      <Button variant="primary" className="m-3" onClick={addproduct}>Add product</Button>

      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price Name</th>
            <th>quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.price}$</td>
                <td>{product.quantity}</td>
                <td>
                  <i
                    className="bi bi-eye text-info fs-4"
                    type="button"
                    onClick={() => {
                      showDtails(product.id);
                    }}
                  ></i>
                  <i
                    className="bi bi-plus-circle mx-3 text-warning fs-4"
                    type="button"
                    onClick={() => {
                      editProduct(product.id);
                    }}
                  ></i>
                  <i
                    className="bi bi-backspace-reverse-fill text-danger fs-4"
                    type="button"
                    onClick={() => {
                      deleteProduct(product.id);
                    }}
                  ></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
