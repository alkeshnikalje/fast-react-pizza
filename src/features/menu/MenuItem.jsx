import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateQuantity from "../cart/UpdateQuantity";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const cartPizza = useSelector((store) =>
    store.cart.cart.find((item) => item.pizzaId === id),
  );
  const dispatch = useDispatch();
  const handleAddItem = () => {
    const newPizza = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };
    dispatch(addItem(newPizza));
  };

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {!soldOut &&
            (!cartPizza?.quantity ? (
              <Button type="small" onclick={handleAddItem}>
                Add to cart
              </Button>
            ) : (
              <div className="flex gap-3 md:gap-8">
                <UpdateQuantity pizzaId={id} quantity={cartPizza.quantity} />
                <DeleteItem pizzaId={id} />
              </div>
            ))}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
