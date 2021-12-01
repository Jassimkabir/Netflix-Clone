import React from "react";
import "./App.css";
import {
  originals,
  action,
  comedy,
  horror,
  romance,
  documentaries,
} from "./urls";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar.js";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action Movies" isSmall />
      <RowPost url={comedy} title="Comedy Movies" isSmall />
      <RowPost url={horror} title="Horror Movies" isSmall />
      <RowPost url={romance} title="Romantic Movies" isSmall />
      <RowPost url={documentaries} title="Documentaries" isSmall />
    </div>
  );
}

export default App;
