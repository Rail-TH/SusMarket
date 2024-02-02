import HomePage from "./components/pages/HomePage";
import PaymentPage from "./components/pages/PaymentPage";
import ProductPage from "./components/pages/ProductPage";
import ProfilePage from "./components/pages/ProfilePage";
import ScamPage from "./components/pages/ScamPage";
import Header from "./components/blocks/Header";
import SearchIcon from "../src/assets/icons/search-form__icon.svg";

export default function App() {
  return (
    <>
      <Header SearchIcon={SearchIcon}/>
      <main>
        <HomePage />
      </main>
    </>
  );
}