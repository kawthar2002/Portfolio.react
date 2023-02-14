import { NavLink } from 'react-router-dom';
import './style.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            <em>Ardinartseva Anna</em>
          </strong>
          <br />
          <span> a frontend developer</span>
        </h1>
        <div className="header__text"></div>
        <NavLink to="https://github.com/kawthar2002" className="btn">
          Visit my github
        </NavLink>
      </div>
    </header>
  );
};
export default Header;
