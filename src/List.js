import React from "react";
//import data from "./data";

const List = ({ props }) => {
  return (
    <>
      {props.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div className="person" key={id}>
            <img src={image} />
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
        );
      })}
    </>
  );
};

export default List;
