import React, { useEffect } from "react";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";
import { Link } from "react-router-dom";
import Raiting from "../components/Raiting/Raiting";
import Loading from "../components/Loading/Loading";
import Message from "../components/Message/Message";

function ProductScreen({ match }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);
  const productDetails = useSelector((state) => state.productDetails);
  const { error, loading, product } = productDetails;

  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>
        Go back
      </Link>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant='warning'>{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.image} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Raiting
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                  color={"#f8e825"}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price: </Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status: </Col>
                    <Col>
                      {product.countInStock > 0 ? "In stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <Button
                  className='m-2'
                  variant='secondary'
                  size='sm'
                  disabled={product.countInStock === 0}
                  type='button'>
                  Add to Cart
                </Button>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default ProductScreen;
