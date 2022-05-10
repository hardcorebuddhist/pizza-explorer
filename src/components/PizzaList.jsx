import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { selectPizzas } from "../store/pizza/selectors";
import { toggleFavorites } from "../store/user/slice";

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! There are{" "}
        <strong>{pizzas.length}</strong> pizzas in total.
      </p>
      <p>TODO: the list of pizzas</p>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            <h2>
              {pizza.name}{" "}
              <button onClick={() => dispatch(toggleFavorites(pizza.id))}>
                {user.favorites.includes(pizza.id) ? "♥" : "♡"}
              </button>
            </h2>
            <div>
              <img
                src={pizza.image}
                style={{ maxWidth: 400 }}
                alt={pizza.name}
              />
            </div>
            <p>{pizza.description}</p>
            <span>
              Bought: <strong>{pizza.bought}</strong> times!
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
