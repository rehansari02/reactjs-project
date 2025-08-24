import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

function FoodContain({ searchText }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // filter based on searchText
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="foodcontainer">
      {filteredData.map((item, index) => (
        <div className="foodCard" key={index}>
          <div>
            <img src={`http://localhost:9000${item.image}`} alt={item.name} />
          </div>
          <div>
            <h2>{item.name}</h2>
            <p>{item.text}</p>
            <div className="details">
              <span className="price">${item.price}.00</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodContain;
