import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import { ApiConnection } from "../API/Controllers";
export default function AddProduct() {
  let data = useParams()
  let [product, setproduct] = useState({})
  let navigate = useNavigate()
  
  let getdata = async () => {
    try {
      let result = await ApiConnection.getoneProduct(data);
      setproduct(result.data[0]);
      
    } catch (error) {
    console.log(error)
    }

}
  useEffect(() => {
    if(data.id!=0)
    getdata()
  }, [])
  
  let getValueForms = (e) => {
    setproduct({...product,
      [e.target.name] : e.target.value
    })
  }

  let sendValue = async (e) => {
    e.preventDefault()
    if (data.id == 0) {
         await ApiConnection.setOneProduct(product);
    } else {
      await ApiConnection.updataOneProduct(data.id,product)
    }

      navigate(`/products`);
  };
  return (
    <div>
      <h1>{data.id == 0 ? "Add Poduct" : "Edit product"}</h1>
      <Form onSubmit={sendValue}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Product Name"
            name="productName"
            onChange={getValueForms}
            defaultValue={product.productName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>price</Form.Label>
          <Form.Control
            type="number"
            placeholder="price"
            name="price"
            onChange={getValueForms}
            defaultValue={product.price}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            placeholder="Quantity"
            name="quantity"
            onChange={getValueForms}
            defaultValue={product.quantity}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {data.id == 0 ? "Add prodduct" : "Edit prodduct"}
        </Button>
      </Form>
    </div>
  );
}
