import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseQuantity } from "./cartSlice";

function DecreaseQuantity({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="round" onclick={() => dispatch(decreaseQuantity(pizzaId))}>
      -
    </Button>
  );
}

export default DecreaseQuantity;
