import '../src/scss/app.scss'
import Categories from './components/categories';
import Header from './components/header';
import PizzaBlock from './components/pizzaBlock';
import Sort from './components/sort';
import pizza from './store/pizza.json'

function App() {

  return (
    <div className="wrapper">
      <Header></Header>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories></Categories>
            <Sort></Sort>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              pizza.map((obj) => (
                <PizzaBlock 
                key = {obj.id} 
                {...obj}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
