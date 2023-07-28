import React, { useState } from "react";
import "./Products.scss";
import FilterByType from "./Filter";
import { productData } from "../../data/productsData";
import { Row, Col, Button, Modal, ModalBody } from "react-bootstrap";
import { HiPlusCircle, HiMinusCircle } from "react-icons/hi2";

function Products() {
  // initial value of the state variable is an empty object
  const [currentItem, setCurrentItem] = useState({});
  // modal/popup is intially set to false so it's closed
  const [showModal, setShowModal] = useState(false);

  // setPopupShop function takes an 'item' as input
  const handleModalShow = (item) => {
    // update the state variable with the value of the 'item'
    setCurrentItem(item);
    // set the 'showModal' state to true, which will display the popup with the info from 'item'
    setShowModal(true);
  };

  const handleModalHide = () => {
    // reset the 'currentiItem' state to an empty object, clearing the data from currentItem
    setCurrentItem({});
    // hide the popup by setting the 'showModal state to false
    setShowModal(false);
  };

  return (
    <div id="products">
      {/* <FilterByType /> */}
      {/* Display products */}
      <Row xs={2} lg={3}>
        {productData.map((item, index) => (
          <Col key={index} className="product-col">
            <img
              src={item.src}
              alt={item.name}
              className="product__img w-100"
            />
            {/* Product details */}
            <div className="product__details">
              <p className="product__name">{item.name}</p>
              <p className="product__price">${item.price}</p>
            </div>
            {/* Quick View button */}
            <div className="quickView-container">
              <Button
                variant="dark"
                type="button"
                size="sm"
                onClick={() => handleModalShow(item)}
                className="quickViewBtn"
              >
                Quick View
              </Button>
            </div>
          </Col>
        ))}
        {/* Quick View Popup */}
        <Modal
          show={showModal}
          size="xl"
          aria-labelledby="centered-modal"
          centered
          onHide={() => handleModalHide()}
        >
          <Modal.Header closeButton></Modal.Header>
          <ModalBody closeButton className="d-lg-flex">
            <div className="text-center modal-left">
              <img
                src={currentItem.src}
                alt={currentItem.name}
                className="modal__img"
              />
            </div>
            <div className="modal-right">
              <div className="modal__details">
                <p className="modal__name">{currentItem.name}</p>
                <p className="modal__description">{currentItem.description}</p>
                <p className="modal__price">${currentItem.price}</p>
              </div>
              <div className="modal__quantity">
                <p>Quantity</p>
                <button
                  type="button"
                  aria-label="Click to reduce product quantity"
                  className="quantity-btn"
                >
                  <HiMinusCircle className="quantity-icon minus" />
                </button>
                <span className="quantity-num">1</span>
                <button
                  type="button"
                  aria-label="Click to add product quantity"
                  className="quantity-btn"
                >
                  <HiPlusCircle className="quantity-icon plus" />
                </button>
              </div>
              <div className="text-center my-4">
                <Button
                  variant="dark"
                  type="button"
                  size="lg"
                  className="addToCartBtn w-100"
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </Row>
    </div>
  );
}

export default Products;
