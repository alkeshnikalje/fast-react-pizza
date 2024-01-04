import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { increaseQuantity } from "./cartSlice";
function IncreaseQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button type="round" onclick={() => dispatch(increaseQuantity(pizzaId))}>
      +
    </Button>
  );
}

export default IncreaseQuantity;
