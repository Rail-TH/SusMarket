import HomePage from "./components/pages/HomePage";
import Header from "./components/blocks/Header";
import SearchIcon from "../src/assets/icons/search-form__icon.svg";
import Placeholder from "../src/assets/img/image-placeholder.png";
import React from "react";

export default function App() {
  return (
    <>
      <Header SearchIcon={SearchIcon}/>
      <main className="main">
        <HomePage PlaceHolder={Placeholder}/>
      </main>
    </>
  );
}