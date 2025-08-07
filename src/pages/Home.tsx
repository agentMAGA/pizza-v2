import React from "react";
import Skeleton from "../components/Sceleton";
import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import Pagination from "../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../store/slices/filterSlice";
import { RootState } from "../store/store.ts";
import { CartItemType } from "../types/type.ts";
import { TypePizzaBlock } from "../types/type.ts";


// Тип пиццы
// type PizzaItem = {
//   id: string;
//   title: string;
//   price: number;
//   imageUrl: string;
//   sizes: number[];
//   types: number[];
//   rating: number;
//   category: number;
// };

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const currentPage = useSelector((state: RootState) => state.filter.currentPage);
  const { pizza, status } = useSelector((state: RootState) => state.pizza);

  const handleChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const renderContent = () => {
    if (status === "error") {
      return (
        <div className="content__error">
          <h2>Произошла ошибка 😕</h2>
          <p>Не удалось получить пиццы. Попробуйте повторить попытку позже</p>
        </div>
      );
    }

    if (status === "loading") {
      return [...Array(6)].map((_, index) => <Skeleton key={index} />);
    }

    return pizza.map((obj: CartItemType) => {
      // Преобразуем obj в unknown, затем в TypePizzaBlock для безопасного приведения типов
      return <PizzaBlock key={obj.id} {...(obj as unknown as TypePizzaBlock)} />;
    });
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>

      <h2 className="content__title">Все пиццы</h2>

      <div className="content__items">{renderContent()}</div>

      <Pagination onChangePage={handleChangePage} currentPage={currentPage} />
    </div>
  );
};

export default Home;
