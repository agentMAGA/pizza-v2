import { useEffect, useRef } from 'react';
import { Routes, Route , useNavigate } from 'react-router-dom';
import '../src/scss/app.scss'
import Header from './components/header';
import Home from './pages/home';
import Cart from './pages/cart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizza } from './store/slices/pizzaSlice';
import { setFilters } from './store/slices/filterSlice';
import qs from 'qs';
import { sortList } from './components/sort';

function App() {

  const dispatch = useDispatch();
  const { categoryId, activeSort, currentPage } = useSelector((state) => state.filter);
  const navigate = useNavigate();
  const isSearch = useRef(false); // Ожидание пока сработает диспатч
  const isMounted = useRef(false); // Проверка на первый рендер

  // Проверяем параметры и отправляем в редукс
  useEffect(() => {
    if (window.location.search) {
    const params = qs.parse(window.location.search.substring(1));

    const sort = sortList.find(obj => obj.sort === params.sortProperty);

    dispatch(setFilters(
      {
        ...params,
        sort,
      }
    ));
      isSearch.current = true;
    }
  }, [dispatch]);

  // Сшиваем параметры в строку
  useEffect(() => {
    if (isMounted.current) {
    const queryString = qs.stringify({
      sortProperty: activeSort.sort,
      categoryId,
      currentPage,
    });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [ activeSort, categoryId, currentPage, navigate]);


  // Запрос пицц
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      dispatch(fetchPizza({ categoryId, activeSort, currentPage }));
    }
    isSearch.current = false;
  }, [dispatch, categoryId, activeSort, currentPage]);


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
