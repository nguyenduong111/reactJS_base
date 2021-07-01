
import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  
import 'bootstrap/dist/css/bootstrap.min.css'

function Product(props) {
  return (
    <div className="Product" style={{margin:"10px"}}>
        {/* <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"> */}
        <Card>
            <CardImg top width="100%" src={props.img} alt={props.name} />
            <CardBody>
                <CardTitle tag="h5"> {props.name} </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted"> {props.price} </CardSubtitle>
                <CardText> {props.describe} </CardText>
                <Button>Read more</Button>
            </CardBody>
        </Card>
            
        {/* </div> */}
    </div>
  );
}

export default Product;
