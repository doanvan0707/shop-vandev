import React, { Component } from 'react';
import axios from 'axios';
import ProductDetail from './ProductDetail';
import { Container, Row } from 'reactstrap';

class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [{
                "id": "0eb526e8-c990-4c8b-8e75-5d95d9d2d687",
                "name": "Liqueur Banana, Ramazzotti",
                "description": "vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia",
                "imageUrl": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": "ce4ed79d-b7d7-477a-b488-1b63563b5cbc",
                "name": "Table Cloth 54x72 Colour",
                "description": "fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed",
                "imageUrl": "http://dummyimage.com/300x200.bmp/dddddd/000000"
              }, {
                "id": "8a92c71f-29bd-4782-8792-25793dc752bd",
                "name": "Wine - Bourgogne 2002, La",
                "description": "elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "e618ada6-d862-41d8-aafc-6a49730a9b97",
                "name": "Bag - Clear 7 Lb",
                "description": "hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris",
                "imageUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "4872cabc-eb09-4c45-9647-99e55c49b77e",
                "name": "Tofu - Soft",
                "description": "vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget",
                "imageUrl": "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
              }, {
                "id": "0233bc96-f62e-4e9f-87e5-0ee18a17b30a",
                "name": "Muffin Mix - Raisin Bran",
                "description": "ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes",
                "imageUrl": "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
              }, {
                "id": "a99dd747-146b-47f0-a680-96cafc94a781",
                "name": "Wine - Chateau Bonnet",
                "description": "malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
              }, {
                "id": "a40a63ab-2752-491b-80ac-7aceca2c52a7",
                "name": "Garbage Bag - Clear",
                "description": "interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
              }, {
                "id": "93c1e871-5002-4b41-9324-b6dceef1d142",
                "name": "Wine - Periguita Fonseca",
                "description": "vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus",
                "imageUrl": "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
              }, {
                "id": "40f58779-9086-4db6-bacb-0d88005c428e",
                "name": "Veal - Sweetbread",
                "description": "sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
              }, {
                "id": "68401975-d2d7-4461-89ed-94acd4b754f3",
                "name": "Appetizer - Crab And Brie",
                "description": "in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes",
                "imageUrl": "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
              }, {
                "id": "179ddcc8-8e9f-40bd-98b4-5ee260f89d45",
                "name": "Milk - 1%",
                "description": "nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique",
                "imageUrl": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "1fde511d-4f6a-4b3b-8079-227d1b51d9bd",
                "name": "Bar Special K",
                "description": "risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
              }, {
                "id": "8b884a2e-3a77-42e1-8fa2-83b0f7cbfbe3",
                "name": "Dates",
                "description": "quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in",
                "imageUrl": "http://dummyimage.com/300x200.bmp/dddddd/000000"
              }, {
                "id": "863ebc7e-91c6-40d5-880c-e0c06c1bbf3e",
                "name": "Tea - Camomele",
                "description": "tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem",
                "imageUrl": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
              }, {
                "id": "5c8f55ce-6a52-444c-9b69-e146bc3b9be1",
                "name": "Clam Nectar",
                "description": "rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis",
                "imageUrl": "http://dummyimage.com/300x200.png/dddddd/000000"
              }, {
                "id": "c9fe868a-6ec9-4319-b1d2-fd92daf10ec4",
                "name": "Edible Flower - Mixed",
                "description": "odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis",
                "imageUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff"
              }, {
                "id": "6b02c114-62b3-4232-acd9-bd5a04ffd3f1",
                "name": "V8 - Tropical Blend",
                "description": "sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat",
                "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff"
              }, {
                "id": "c2d8bdfe-d2cc-42e9-86da-6a15029cd761",
                "name": "Bread - White Epi Baguette",
                "description": "nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet",
                "imageUrl": "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
              }, {
                "id": "b462bc0e-9590-45c2-a85c-a7b8f67f41f2",
                "name": "Ice - Clear, 300 Lb For Carving",
                "description": "massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi",
                "imageUrl": "http://dummyimage.com/300x200.bmp/5fa2dd/ffffff"
              }]
        };
    }
    render() {
        const { products } =this.state;
        console.log(products);
        return (
            <Container>
                <h2>List Product</h2>
                <Row>
                {
                    products.map((product) => 
                        <ProductDetail key={product.id} product={product} />
                    )
                }
                </Row>
            </Container>
        )
    }
}

export default ListProduct;