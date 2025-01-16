import React from "react";
import Banner from "./Banner";
import AllBooks from "./AllBooks";
import Recommened from "./Recommened";
import News from "./News";

const Home = () => {
  return (
    <>
      <Banner />
      <AllBooks />
      <Recommened />
      <News />
    </>
  );
};

export default Home;
