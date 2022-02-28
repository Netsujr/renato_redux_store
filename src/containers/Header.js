import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

const Header = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <HeaderContainer>
      <Link to="/">
        <h3>Renato's Store</h3>
      </Link>
      <Link to="/cart">
        <HeaderCart>
          <h3>Cart</h3>
          <img
            src="https://www.svgrepo.com/show/80543/shopping-cart-outline.svg"
            alt="shopping cart"
          />
          <CartCounter>{cartCount}</CartCounter>
        </HeaderCart>
      </Link>
    </HeaderContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.store.cart,
  };
};

export default connect(mapStateToProps)(Header);

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
  background: var(--primary-color);
  position: sticky;
  top: 0;
  left: 0;

  h3 {
    font-size: 40px;
    font-weight: bold;
    color: #fff;
  }
  `;

const HeaderCart = styled.div`
  background: #fff;
  width: 180px;
  border: none;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;

  &::hover {
    opacity: 0.75;
  }

  h3 {
    font-size: 30px;
    font-weight: bold;
    color: var(--dark-color);
  }

  img {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }
  `;

const CartCounter = styled.div`
  height: 40px;
  width: 40px;
  border: 1px solid var(--secondary-color);
  border-radius: 50%;
  color: var(--dark-color);
  background: var(--light-color);
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid pink; */
  `;
