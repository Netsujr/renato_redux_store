import React from "react";
import styled from 'styled-components';
import { connect } from "react-redux";
import { addToCart } from "../../../redux/Store/storeActions";

const SingleItem = ({ current, addToCart }) => {
  return (
    <ItemContainer>
      <img
        src={current.image}
        alt={current.title}
      />

      <ItemDetails>
        <p>{current.title}</p>
        <p>{current.description}</p>
        <p>$ {current.price}</p>

        <button
          onClick={() => addToCart(current.id)}
        >Add To Cart
        </button>
      </ItemDetails>
    </ItemContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.store.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);

const ItemContainer = styled.div`
  width: 1100px;
  margin: 2rem auto;
  display: flex;

  img {
    width: 600px;
    object-fit: contain;
    margin-right: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 10px;
  }

  button {
    width: 45%;
    padding: 10px 17px;
    background: var(--secondary-color);
    color: var(--light-color);
    border: 1px solid var(--secondary-color);
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    outline: none;
  }

  &:hover {
    opacity: 0.75;
  }
}
`;

const ItemDetails = styled.div`
padding: 1rem;
display: flex;
flex-direction: column;
justify-content: space-between;
color: var(--secondary-color);

&:nth-child(1), &:nth-child(3) {
  font-size: 1.2rem;
  font-weight: bold;
}

&:nth-child(2) {
  font-size: 1rem;
}
`;
