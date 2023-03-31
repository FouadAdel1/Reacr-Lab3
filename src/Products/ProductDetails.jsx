import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from 'react-router-dom';
import { ApiConnection } from '../API/Controllers';
export function ProductDetails() {
  let id = useParams();
  console.log(id)
    let [product, setproduct] = useState({})
    let getproduct = async () => {
        try {
                    let result = await ApiConnection.getoneProduct(id);
                    setproduct(result.data[0]);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
       getproduct(); 
        
    },[])
  return (
    <div className='container my-4  text-center'>
      <Card style={{ width: "18rem" ,height:"30rem" }}>
        <Card.Img variant="top" src={product.imgurl} />
        <Card.Body>
          <Card.Title>{product.productName}</Card.Title>
          <Card.Text>price: {product.price}</Card.Text>
          <Card.Text>quantity: {product.quantity}</Card.Text>
          <Button variant="primary">BuyNow!</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
