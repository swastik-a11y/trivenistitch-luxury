import { useState } from "react";
import {
  ChevronDown,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import logo from "../../assets/branding/logo.jpeg";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="navShell">
      <div className="navTopBar">
        BUY FOR ₹2899 &amp; MORE, GET FLAT ₹200 OFF | USE CODE: SALE200
      </div>

      <div className="navInner">
        <button
          type="button"
          className="navIconButton navMobileToggle"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <a href="/" className="navBrandLink" aria-label="Trivenistitch home">
          <img src={logo} alt="Trivenistitch logo" className="navLogo" />
          <div className="navBrandText">
            <div className="navBrand">Trivenistitch</div>
            <div className="navTag">TAILORED FOR YOU</div>
          </div>
        </a>

        <nav className="navLinks">
          <a href="#new-arrivals" className="navLink">
            New Arrivals
          </a>
          <a href="#hot-sellers" className="navLink">
            Hot Sellers
          </a>
          <a href="#festive" className="navLink">
            Festive
          </a>
          <button type="button" className="navLink navLinkButton">
            Menu <ChevronDown size={16} />
          </button>
        </nav>

        <div className="navActions">
          <button type="button" className="navIconButton" aria-label="Search">
            <Search size={20} />
          </button>
          <button type="button" className="navIconButton" aria-label="Wishlist">
            <Heart size={20} />
          </button>
          <button type="button" className="navIconButton" aria-label="Cart">
            <ShoppingBag size={20} />
          </button>
          <button type="button" className="navLoginButton">
            <User size={18} />
            Login
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="navMobilePanel">
          <a href="#new-arrivals" className="navMobileLink">
            New Arrivals
          </a>
          <a href="#hot-sellers" className="navMobileLink">
            Hot Sellers
          </a>
          <a href="#festive" className="navMobileLink">
            Festive
          </a>
          <button type="button" className="navMobileLogin">
            <User size={18} />
            Login
          </button>
        </div>
      )}
    </header>
  );
}