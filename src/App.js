import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../src/scss/app.scss'
import Header from './components/header';
import { usePizzaStore } from './store/useCounterStore';
import Home from './pages/home';
import Cart from './pages/cart';

function App() {

  const {activeIndex, activeSortCategory , fetchPizza , currentPage} = usePizzaStore();

  useEffect(() => {
    fetchPizza();
  }, [activeIndex,activeSortCategory,currentPage]);


  return (
    <div className="wrapper">
      <Header></Header>
      <div className="content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
