import { NavLink } from "react-router-dom";
import "./Navigation.scss"
import classNames from "classnames";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink
        to="/"
        className={({ isActive }) => classNames('navigation__element page__link', {
          'navigation__element--active': isActive,
        })}
      >
        Episodes
      </NavLink>
      <NavLink
        to="/characters"
        className={({ isActive }) => classNames('navigation__element page__link', {
          'navigation__element--active': isActive,
        })}
      >
        Characters
      </NavLink>
      <NavLink
        to="/locations"
        className={({ isActive }) => classNames('navigation__element page__link', {
          'navigation__element--active': isActive,
        })}
      >
        Locations
      </NavLink>
    </nav>
  )
};
