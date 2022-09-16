import React from "react";

function RBWord({ word, handleClick }) {
  return (
    <div
      onClick={handleClick.bind(null, word.text)}
      className="word-container"
      style={{ backgroundColor: word.backgroundColor }}
    >
      {word.text}
    </div>
  );
}

export default RBWord;
