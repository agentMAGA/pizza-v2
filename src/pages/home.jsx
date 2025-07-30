import React from 'react'
import Sceleton from '../components/skeleton';
import PizzaBlock from '../components/pizzaBlock';
import Sort from '../components/sort';
import Categories from '../components/categories';
import { usePizzaStore } from '../store/useCounterStore';
import Pagination from '../components/Pagination/Pagination';

function Home() {

    const {pizza , isLoading,currentPage ,setCurrentPage} = usePizzaStore();

    return (
        
        <div className="container">
          <div className="content__top">
            <Categories></Categories>
            <Sort></Sort>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              isLoading ?
              [...Array(6)].map((_, index) => (
                <Sceleton key={index} />
              )) :
              pizza.map((obj) => (
                <PizzaBlock key={obj.id} {...obj} />
              ))
            }
          </div>
          <Pagination onChangePage={setCurrentPage} currentPage={currentPage}/>
        </div>
    )
}

export default Home;