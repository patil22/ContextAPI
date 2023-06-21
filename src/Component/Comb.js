import React,{useContext} from "react";

// import {abc} from '../App'

import abc from '../Context/Context';

const Comb = () => {
  const {id} = useContext(abc)
  return (
    <>
      {/* <Comc /> */}

      <h1> component b Gaurav {id} </h1>
    </>
  );
};

export default Comb;
