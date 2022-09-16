import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import words from "../../../utils/dummy";
import { setWords } from "../articleSlice";
import RBWord from "./RBWord";

function RBScreen(props) {
  const dispatch = useDispatch();
  const wordsArray = useSelector((state) => state.article.words);
  useEffect(() => {
    dispatch(setWords(words));
  }, [dispatch]);

  const handleClick = () => {};

  return (
    <div className="screen">
      {wordsArray?.map((word, index) => (
        <RBWord key={index} word={word} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default RBScreen;
