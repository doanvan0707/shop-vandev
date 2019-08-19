import React, { Component } from 'react';
import { Col } from 'reactstrap';
class ProductDetail extends Component {
    render() {
        const { product } = this.props;
        console.log(product);
        return (
            <Col lg="4">
                <img src={product.imageUrl} width="100%" alt="learn"/>
                <h2>{ product.name }</h2>
                <p>{ product.description }</p>
            </Col>
        )
    }
}

export default ProductDetail;