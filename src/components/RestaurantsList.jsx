import { useState } from "react";
import { useSelector } from "react-redux";
import { selectRestaurantsWithPizzas } from "../store/restaurants/selectors";
import { selectPizzas } from "../store/pizza/selectors";
import { selectRestaurantsThatSellPizza } from "../store/restaurants/selectors";

export function RestaurantsList() {
  const restaurants = useSelector(selectRestaurantsWithPizzas);
  const pizzas = useSelector(selectPizzas);

  const [selectedPizza, setSelectedPizza] = useState(pizzas[0].id);

  const sellsPizza = useSelector(selectRestaurantsThatSellPizza(selectedPizza));

  return (
    <div>
      <h1>Restaurants</h1>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <strong>{restaurant.name}</strong>
              <ul>
                {restaurant.pizzas.map((pizza) => (
                  <li>{pizza.name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <h2>
        Who sells{" "}
        <select
          value={selectedPizza}
          onChange={(e) => {
            setSelectedPizza(parseInt(e.target.value));
          }}
        >
          {pizzas.map((pizza) => (
            <option key={pizza.id} value={pizza.id}>
              {pizza.name}
            </option>
          ))}
        </select>{" "}
        ?
      </h2>
      <ul>
        {sellsPizza.map((r) => (
          <li key={r.id}>{r.name}</li>
        ))}
      </ul>
    </div>
  );
}
