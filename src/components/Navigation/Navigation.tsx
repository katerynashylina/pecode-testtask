import { NavLink } from "react-router-dom";
import classNames from "classnames";
import "./Navigation.scss"
import { routes } from "../../helpers/consts";

export const Navigation = () => {
  return (
    <nav className="navigation">
      {routes.map(route => (
        <NavLink
          to={route.to}
          className={({ isActive }) => classNames('navigation__element page__link', {
            'navigation__element--active': isActive,
          })}
          key={route.id}
        >
          {route.text}
        </NavLink>
      ))}
    </nav>
  )
};
