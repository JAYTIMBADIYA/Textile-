import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import Category from "./Components/Category";
import Details from "./Components/Details";
import Cart from "./Components/Cart";
import Account from "./Components/Account/Account";
import Signin from "./Components/Signin/Signin";
import Ppage from "./Components/Ppage/Ppage";
import Payments from "./Components/Payments";
import Newacco from "./Components/Newacco/Newacco";
import Password from "./Components/Password/Password";
import Wishlist from "./Components/Wishlist/Wishlist";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar designVariant={3} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />}  />
          <Route path="/details" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/createaccount" element={<Account />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/ppage" element={<Ppage />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/newaccount" element={<Newacco />} />
          <Route path="/forgotpassword" element={<Password />} />
          <Route path="/like" element={<Wishlist />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
