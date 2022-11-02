import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { listDishes } from "../utils/api";
import DishCard from "./DishCard";
import ErrorAlert from "../layout/ErrorAlert";

function Home({ addToCart }) {
  const [dishes, setDishes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(loadDishes, []);

  function loadDishes() {
    const abortController = new AbortController();
    setError(null);
    listDishes(abortController.signal).then(setDishes).catch(setError);
    return () => abortController.abort();
  }

  const cards = dishes.map((dish) => (
    <DishCard key={dish.id} dish={dish}>
      <Button variant="dark" onClick={() => addToCart(dish)}>
        <span className="oi oi-plus mr-2" />
        Add to cart
      </Button>
    </DishCard>
  ));

  return (
    <main>
      <ErrorAlert error={error} />
      <div className="row">{cards}</div>
    </main>
  );
}

export default Home;
