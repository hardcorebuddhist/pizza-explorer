import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { selectPizzas } from "../store/pizza/selectors";
import { toggleFavorites } from "../store/user/slice";
import "./styles.scss";

export function PizzaList() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);
  const dispatch = useDispatch();

  return (
    <div className="pizza-list">
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! There are{" "}
        <strong>{pizzas.length}</strong> pizzas in total.
      </p>

      <ul className="pizzas">
        {pizzas.map((pizza) => (
          <li
            key={pizza.id}
            className="pizza"
            style={{ backgroundImage: `url(${pizza.image})` }}
          >
            <h2>
              {pizza.name}{" "}
              <button
                onClick={() => dispatch(toggleFavorites(pizza.id))}
                className={`fav-toggle ${
                  user.favorites.includes(pizza.id) ? "fav" : ""
                }`}
              >
                {user.favorites.includes(pizza.id) ? "♥" : "♡"}
              </button>
            </h2>
            {/* <div>
              <img
                src={pizza.image}
                style={{ maxWidth: 400 }}
                alt={pizza.name}
              />
            </div> */}
            <div className="overlay">
              <p>{pizza.description}</p>
              <span>
                Bought: <strong>{pizza.bought}</strong> times!
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
