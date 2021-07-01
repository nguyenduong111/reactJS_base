
import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  
import 'bootstrap/dist/css/bootstrap.min.css'

function Product(props) {
  
  let OnClick2 = () => {
    alert(`  ${props.name}
    ${props.price}`);
  }
  
  return (
    <div className="Product" style={{margin:"10px"}}>
        <Card>
            <CardImg top width="100%" src={props.img} alt={props.name} />
            <CardBody>
                <CardTitle tag="h5"> {props.name} </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted"> {props.price} </CardSubtitle>
                <CardText> {props.describe} </CardText>

                <Button onClick={ OnClick2 } style={{boxShadow:"none"}} >Read more</Button>
            
            </CardBody>
        </Card>
    </div>
  );
}

export default Product;
