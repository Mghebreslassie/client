import React, { useEffect, useContext } from "react";
import RestaurantFinder from "../api/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

const RestaurantList = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  useEffect(() => {
    try {
      const getResponse = async () => {
        const response = await RestaurantFinder.get("/");
        setRestaurants(response.data.data.restaurants);
      };
      getResponse();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((el) => {
              return (
                <tr key={el.id}>
                  <td>{el.name}</td>
                  <td>{el.location}</td>
                  <td>{"$".repeat(el.price_range)}</td>
                  <td>reviews</td>
                  <td>
                    <button className="btn btn-warning">Update</button>
                  </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
