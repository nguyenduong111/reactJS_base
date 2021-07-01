
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

function Product() {
  return (
    <div className="Product">
      {/* <div class="col-xs-4 col-sm-4 col-lg-4"> */}
        <div>
        <Card>
          <CardImg top width="100%" src="https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2018/06/meo-scottish-fold-meo-tai-cup-cho-tot.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button outline color="info">Read more</Button>
          </CardBody>
        </Card>
        </div>
    </div>
    // </div>
  );
}

export default Product;
