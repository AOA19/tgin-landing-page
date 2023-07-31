import { useState } from "react";
import "./Products.scss";
// import Filter from "./Filter";
import { productData } from "../../data/productsData";
import {
  Row,
  Col,
  Button,
  // Dropdown,
  // DropdownButton,
  // Form,
  Modal,
  ModalBody,
} from "react-bootstrap";
import { HiPlusCircle, HiMinusCircle } from "react-icons/hi2";

function Products({ cartItems, addToCart }) {

  // initial value of the state variable is an empty object
  const [currentItem, setCurrentItem] = useState({});
  // modal/popup is intially set to false so it's closed
  const [showModal, setShowModal] = useState(false);
  // state variables for quantity in the modal
  const [quantity, setQuantity] = useState(1);

  // const [filterCheckboxes, setFilterCheckboxes] = useState([
  //   { id: 1, label: "Shampoos", checked: false, filterOption: "type" },
  //   { id: 2, label: "Conditioners", checked: false, filterOption: "type" },
  //   {
  //     id: 3,
  //     label: "Hair Masks + Treatments",
  //     checked: false,
  //     filterOption: "type",
  //   },
  //   { id: 4, label: "Leave-ins", checked: false, filterOption: "type" },
  //   { id: 5, label: "Stylers", checked: false, filterOption: "type" },
  //   {
  //     id: 6,
  //     label: "Moist Collection",
  //     checked: false,
  //     filterOption: "collection",
  //   },
  //   {
  //     id: 7,
  //     label: "Curls N Roses Collection",
  //     checked: false,
  //     filterOption: "collection",
  //   },
  //   {
  //     id: 8,
  //     label: "Miracle RepaiRx Collection",
  //     checked: false,
  //     filterOption: "collection",
  //   },
  // ]);

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


  // const handleCheckboxChange = (id, filterOption) => {
  //   const updatedCheckboxes = filterCheckboxes.map((checkbox) => {
  //     if (checkbox.id === id) {
  //       return { ...checkbox, checked: !checkbox.checked };
  //     }
  //     return checkbox;
  //   });
  //   setFilterCheckboxes(updatedCheckboxes);
  // };
  // Reset Checkboxes
  // const handleReset = () => {
  //   const resetCheckboxes = filterCheckboxes.map((checkbox) => {
  //     return { ...checkbox, checked: false };
  //   });
  //   setFilterCheckboxes(resetCheckboxes);
  // };

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


  return (
    <div id="products">
      {/* Filter */}
      {/* <DropdownButton title="Filter" variant="dark" className=" mb-5">
        <Dropdown.ItemText className="filter__header">
          Filter by Type
        </Dropdown.ItemText> */}
        {/* Filter by Type Group */}
        {/* <div className="px-3 filter-type">
          {filterCheckboxes.map((checkbox) =>
            checkbox.filterOption === "type" ? (
              <Form.Check
                key={checkbox.id}
                type="checkbox"
                className="filter__label"
                label={checkbox.label}
                checked={checkbox.checked}
                onChange={() => handleCheckboxChange(checkbox.id)}
              />
            ) : null
          )}
        </div> */}
        {/* Filter by Collection Group */}
        {/* <Dropdown.ItemText className="filter__header">
          Filter by Collection
        </Dropdown.ItemText>
        <div className="px-3 filter-collection">
          {filterCheckboxes.map((checkbox) =>
            checkbox.filterOption === "collection" ? (
              <Form.Check
                key={checkbox.id}
                type="checkbox"
                className="filter__label"
                label={checkbox.label}
                checked={checkbox.checked}
                onChange={() => handleCheckboxChange(checkbox.id)}
              />
            ) : null
          )}
        </div> */}
        {/* Reset Button */}
        {/* <div className="text-center my-3">
          <Button
            onClick={handleReset}
            className="resetBtn px-4 text-uppercase"
          >
            Reset
          </Button>
        </div>
      </DropdownButton> */}
      {/* Display products */}
      <Row xs={2} lg={3}>
        {productData.map((item, index) => (
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
                  // onClick={() => addToCart(currentItem)}
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
