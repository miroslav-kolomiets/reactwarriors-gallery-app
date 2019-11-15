import React from "react";

const Loader = props => {
  const cards = props.cards;
  return (
    <div className="loader-wrapper">
      {cards.length === 0 && <div>Loading...</div>}
    </div>
  );
};

export default Loader;
