import React from "react";
import List from "./components/List";
import "./Home2.scss";

const Home = () => {
  return (
    <div className="container">
      <main>
        <h1 data-shadow="Part-time Theater">Part-time Theater</h1>
        <br />
        <br />
        <h3>🍿️ Opens occasionally.</h3>
        <br />
        <br />
        <div className="list-container">
          <List />
        </div>
      </main>
      <footer>©️2021 CHENGKANG. All rights reserved.</footer>
    </div>
  );
};

export default Home;
