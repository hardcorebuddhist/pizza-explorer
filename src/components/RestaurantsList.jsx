import { useState } from "react";
import { useSelector } from "react-redux";

import { selectPizzas } from "../store/pizza/selectors";
import { selectRestaurantsThatSellPizza } from "../store/restaurants/selectors";
import {
  selectPizzasSoldByRestaurant,
  selectRestaurants,
} from "../store/restaurants/selectors";

export function RestaurantsList() {
  const restaurants = useSelector(selectRestaurants);
  const pizzas = useSelector(selectPizzas);

  const [selectedPizza, setSelectedPizza] = useState(pizzas[0].id);
  const [selectedRestaurant, setSelectedRestaurant] = useState(
    restaurants[0].id
  );

  const sellsPizza = useSelector(selectRestaurantsThatSellPizza(selectedPizza));
  const productsSold = useSelector(
    selectPizzasSoldByRestaurant(selectedRestaurant)
  );

  return (
    <div>
      <h2>
        What does{" "}
        <select
          value={selectedRestaurant}
          onChange={(e) => {
            setSelectedRestaurant(parseInt(e.target.value));
          }}
        >
          {restaurants.map((r) => (
            <option key={r.id} value={r.id}>
              {r.name}
            </option>
          ))}
        </select>{" "}
        sell ?
      </h2>
      <ul>
        {productsSold.map((r) => (
          <li key={r.id}>{r.name}</li>
        ))}
      </ul>
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
