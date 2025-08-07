import React from 'react'
import { Link } from 'react-router-dom';

const NotFaund: React.FC = () => {
    return (
        <div className="cart cart--empty">
          <h2>
            Страница не найдена <span>😕</span>
          </h2>
          <p>
            Страница не найдена. 
            <br />
            Для того, чтобы вернуться на главную страницу, перейди на главную страницу.
          </p>
          <img src='/img/empty-cart.png' alt="Empty cart" />
          <Link to="/" className="button button--black">
            <span>Вернуться на главную страницу</span>
          </Link>
        </div>
  );
};

export default NotFaund;