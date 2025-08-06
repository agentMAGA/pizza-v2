import React from "react";
import Sceleton from "../components/skeleton";
import PizzaBlock from "../components/pizzaBlock";
import Sort from "../components/sort";
import Categories from "../components/categories";
import Pagination from "../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../store/slices/filterSlice";

function Home() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.filter.currentPage);
  const { pizza, status } = useSelector((state) => state.pizza);

  return (
    <div className="container">
      <div className="content__top">
        <Categories></Categories>
        <Sort></Sort>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === "error" ? (
          <div className="content__error">
            <h2>Произошла ошибка 😕</h2>
            <p>Не удалось получить пиццы. Попробуйте повторить попытку позже</p>
          </div>
        ) : status === "loading" ? (
          [...Array(6)].map((_, index) => <Sceleton key={index} />)
        ) : (
          pizza.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
        )}
      </div>
      <Pagination
        onChangePage={(page) => dispatch(setCurrentPage(page))}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Home;
