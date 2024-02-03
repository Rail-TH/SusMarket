import HomePage from "./components/pages/HomePage";
import Header from "./components/blocks/Header";
import SearchIcon from "../src/assets/icons/search-form__icon.svg";
import React from "react";

export default function App() {
  return (
    <>
      <Header SearchIcon={SearchIcon}/>
      <main className="main">
        <HomePage/>
      </main>
    </>
  );
}