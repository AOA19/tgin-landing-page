import React from "react";
import "./Ingredients.scss";
import arganOil from "../../icons/argan-oil .svg";
import greenTea from "../../icons/green-tea .svg";
import hibiscus from "../../icons/hibiscus .svg";
import honey from "../../icons/honey .svg";
import rose from "../../icons/rose .svg";
import sheaButter from "../../icons/shea-butter .svg";
import { Row, Col, Container } from "react-bootstrap";

function Ingredients() {
  return (
    <div id="ingredients" className="ingredients__container">
      <div className="ps-4 ps-xl-5 header-width">
        <p className="ingredients__header">
          Our products are formulated with the finest natural and organic
          ingredients
        </p>
      </div>
      <Container className="mt-5">
        <Row xs={1} sm={2} lg={3}>
          {/* Honey */}
          <Col className="p-4">
            <img src={honey} alt="Icon of honey" className="ingredient__img" />
            <p className="ingredient__name">Honey</p>
            <p className="ingredient__description">
              Can help moisturize, nourish, and soften the hair, promoting
              healthier and more manageable strands.
            </p>
          </Col>
          {/* Green Tea */}
          <Col className="p-4">
            <img
              src={greenTea}
              alt="Icon of a green tea leaf"
              className="ingredient__img"
            />
            <p className="ingredient__name">Green Tea</p>
            <p className="ingredient__description">
              Can stimulate hair growth, reduce hair loss, and add shine to the
              hair due to it being rich in antioxidants.
            </p>
          </Col>
          {/* Hibsicus */}
          <Col className="p-4">
            <img
              src={hibiscus}
              alt="Icon of a hibsicus flower"
              className="ingredient__img"
            />
            <p className="ingredient__name">Hibiscus</p>
            <p className="ingredient__description">
              Stimulates hair growth, strengthens the hair, and prevents hair
              fall due to its high vitamin C and amino acid content.
            </p>
          </Col>
          {/* Rose Water */}
          <Col className="p-4">
            <img src={rose} alt="Icon of a rose" className="ingredient__img" />
            <p className="ingredient__name">Rose Water</p>
            <p className="ingredient__description">
              Has anti-inflammatory and antiseptic properties that help soothe
              an irritated scalp, while its moisturizing and hydrating
              properties can help alleviate dryness
            </p>
          </Col>
          {/* Argan Oil */}
          <Col className="p-4">
            <img
              src={arganOil}
              alt="Icon of argan oil "
              className="ingredient__img"
            />
            <p className="ingredient__name">Argan Oil</p>
            <p className="ingredient__description">
              Rich in vitamins and fatty acids, which strengthen the hair,
              protect it from damage caused by heat and styling tools, and
              promote hair growth.
            </p>
          </Col>
          {/* Shea Butter */}
          <Col className="p-4">
            <img
              src={sheaButter}
              alt="Icon of shea buuter nut"
              className="ingredient__img"
            />
            <p className="ingredient__name">Shea Butter</p>
            <p className="ingredient__description">
              Infused with vitamins that restore nourishment to dry and damaged
              hair while providing hydration without clogging the pores.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Ingredients;
