import Home from "../../pages/Home/home";
import About from "../../pages/About/about";
import Blog from "../../pages/Blog/blog";
import Contact from "../../pages/Contact/contact";
import OurProduct from "../../pages/Our Products/our_products";
import Styleguide from "../../pages/Styleguide/styleguide";
import Cart from "../../components/Cart/Cart";
import { Routes, Route, Link } from "react-router-dom";
function Header() {
  return (
    <div className="py-6 mx-10">
      <nav className="flex flex-row justify-between items-center">
        <div className="basis-2/6 cursor-pointer">
          <img
            src="https://cdn.prod.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a4ae4ecdfb2_CoffeeStyle%20Logo.png"
            alt=""
          />
        </div>

        <ul className="flex justify-between items-center basis-3/6 uppercase text-sm text-gray-500 font-medium">
          <li className="top_menu_item">
            <Link to={"/"}>HOME</Link>
          </li>
          <li className="top_menu_item">
            <Link to={"/About"}>About</Link>
          </li>
          <li className="top_menu_item">
            <Link to={"/Blog"}>Blog</Link>
          </li>
          <li className="top_menu_item">
            <Link to={"/Contact"}>Contact</Link>
          </li>
          <li className="top_menu_item">
            <Link to={"/OurProduct"}>Our Product</Link>
          </li>
          <li className="top_menu_item">
            <Link to={"/Styleguide"}>Styleguide</Link>
          </li>
        </ul>
        <ul className="basis-1/6 flex justify-start items-center ml-16 uppercase text-sm text-gray-500 font-medium">
          <li className="top_menu_item">
            <Link
              to={"/Cart"}
              className="flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="ct-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span>Card</span>
              <span className="ct-badge-circle bg-orange-400 text-white">
                10
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/OurProduct" element={<OurProduct />} />
        <Route path="/Styleguide" element={<Styleguide />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
export default Header;
