import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Головна</Link>
        <Link to="/catalog">Каталог кемперів</Link>
        <Link to="/favorites">Улюблені</Link>
      </nav>
    </header>
  );
};

export default Header;