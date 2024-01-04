import React from "react";
import DecreaseQuantity from "./DecreaseQuantity";
import IncreaseQuantity from "./IncreaseQuantity";

function UpdateQuantity({ quantity, pizzaId }) {
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <DecreaseQuantity pizzaId={pizzaId} />
      <p className="text-sm font-medium">{quantity}</p>
      <IncreaseQuantity pizzaId={pizzaId} />
    </div>
  );
}

export default UpdateQuantity;
