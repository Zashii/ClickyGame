import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";

import "./App.css";

const App = () => (
  <Wrapper>
    {<h1 className="title">Clicky Game!</h1>}

    {<div>  <FriendCard friends={friends} /> </div>}

  </Wrapper>
);

export default App;
