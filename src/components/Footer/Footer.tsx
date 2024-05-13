import { Link } from "react-router-dom";
import "./Footer.scss"

export const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <b>GitHub username: </b> katerynashylina
      </p>
      <p>
        <b>Email: </b>
        <Link to="mailto:kateryna.shylina.k@gmail.com" className="page__link">
           kateryna.shylina.k@gmail.com
        </Link>
      </p>
      <p>
        <b>Tech Stack: </b> <br /> React, TypeScript, SCSS, classnames, axios, React Router
      </p>
      <p>
        <b>API Link: </b>
        <Link to="https://rickandmortyapi.com/documentation/" className="page__link">
          rickandmortyapi.com
        </Link>
      </p>
    </footer>
  )
};
