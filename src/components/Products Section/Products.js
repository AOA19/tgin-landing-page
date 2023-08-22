import { useState } from "react";
import "./Products.scss";
import { productData } from "../../data/productsData";
import { Row, Col, Button, Modal, ModalBody } from "react-bootstrap";
import { HiPlusCircle, HiMinusCircle } from "react-icons/hi2";

function Products({ cartItems, addToCart }) {
  // initial value of the state variable is an empty object
  const [currentItem, setCurrentItem] = useState({});
  // modal/popup is intially set to false so it's closed
  const [showModal, setShowModal] = useState(false);
  // state variables for quantity in the modal
  const [quantity, setQuantity] = useState(1);
  // For Filter
  const [productsFilter, setProductsFilter] = useState(productData);

  // setPopupShop function takes an 'item' as input
  const handleModalShow = (item) => {
    // update the state variable with the value of the 'item'
    setCurrentItem(item);
    // set the 'showModal' state to true, which will display the popup with the info from 'item'
    setShowModal(true);
  };

  const handleModalHide = () => {
    // reset the 'currentItem' state to an empty object, clearing the data from currentItem
    setCurrentItem({});
    // reset the 'quantity' state to 1 when hiding the modal
    setQuantity(1);
    // hide the popup by setting the 'showModal state to false
    setShowModal(false);
  };

  //Function to increase and decrease the quantity
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    addToCart({ ...currentItem, quantity: quantity });
    handleModalHide();
  };

  // Filter by Type
  const filterType = (type) => {
    setProductsFilter(
      productData.filter((item) => {
        return item.type === type;
      })
    );
  };
  // Filter by Collection
  const filterCollection = (collection) => {
    setProductsFilter(
      productData.filter((item) => {
        return item.collection === collection;
      })
    );
  };

  return (
    <div id="products">
      <div className="filter-btns">
        {/* Filter By Type */}
        <div className="filter pb-3">
          <h4 className="filter__header">Filter By Type</h4>
          {/* Filter Row */}
          <div className="d-flex flex-wrap">
            <Button
              variant="dark"
              type="button"
              size="sm"
              className="filter__btn m-1"
              onClick={() => setProductsFilter(productData)}
            >
              All
            </Button>
            <Button
              variant="dark"
              type="button"
              size="sm"
              className="filter__btn m-1"
              onClick={() => filterType("Shampoo")}
            >
              Shampoos
            </Button>
            <Button
              variant="dark"
              type="button"
              size="sm"
              className="filter__btn m-1"
              onClick={() => filterType("Conditioner")}
            >
              Conditioners
            </Button>
            <Button
              variant="dark"
              type="button"
              size="sm"
              className="filter__btn m-1"
              onClick={() => filterType("Leave-ins")}
            >
              Leave-ins
            </Button>
            <Button
              variant="dark"
              type="button"
              size="sm"
              className="filter__btn m-1"
              onClick={() => filterType("Hair Masks")}
            >
              Hair Masks
            </Button>
            <Button
              variant="dark"
              type="button"
              size="sm"
              className="filter__btn m-1"
              onClick={() => filterType("Stylers")}
            >
              Stylers
            </Button>
          </div>
        </div>
        {/* Filter By Collection */}
        <div className="filter pb-3">
          <h4 className="filter__header">Filter By Collection</h4>
          {/* Filter Row */}
          <div className="d-flex flex-wrap">
            <Button
              variant="dark"
              type="button"
              size="sm"
              className="filter__btn m-1"
              onClick={() => filterCollection("Moist Collection")}
            >
              Moist Collection
            </Button>
            <Button
              variant="dark"
              type="button"
              size="sm"
              className="filter__btn m-1"
              onClick={() => filterCollection("Curls N Roses Collection")}
            >
              Curl N Roses Collection
            </Button>
            <Button
              variant="dark"
              type="button"
              size="sm"
              className="filter__btn m-1"
              onClick={() => filterCollection("Miracle RepaiRx Collection")}
            >
              Miracle RepaiRx Collection
            </Button>
          </div>
        </div>
      </div>

      {/* Display products */}
      <Row xs={2} lg={3}>
        {productsFilter.map((item) => (
          <Col key={item.id} className="product-col">
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
          currentItem={currentItem}
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
                {/* Remove items from cart */}
                <button
                  type="button"
                  aria-label="Click to reduce product quantity"
                  className="quantity-btn"
                  onClick={decreaseQuantity}
                >
                  <HiMinusCircle className="quantity-icon minus" />
                </button>
                <span className="quantity-num">{quantity}</span>
                {/* Add items to cart */}
                <button
                  type="button"
                  aria-label="Click to add product quantity"
                  className="quantity-btn"
                  onClick={increaseQuantity}
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
                  onClick={handleAddToCart}
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
