import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { AllRestaurant } from "./allRestaurants";
import { ChosenDish } from "./chosenDish";
import { OneRestaurant } from "./oneRestaurant";
import "../../../css/restaurant.css";

export function RestaurantPage() {
  let restaurant = useRouteMatch();
  // console.log();

  return (
    <div className="restaurant_page">
      <Switch>
        <Route path={`${restaurant.path}/dish/:dish_id`}>
          <ChosenDish />
        </Route>
        <Route path={`${restaurant.path}/:restaurant_id`}>
          <OneRestaurant />
        </Route>
        <Route path={`${restaurant.path}`}>
          <AllRestaurant />{" "}
        </Route>
      </Switch>
    </div>
  );
}
