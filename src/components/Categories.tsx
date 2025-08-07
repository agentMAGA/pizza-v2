import React from "react"
import { useSelector, useDispatch } from "react-redux";
import {setCategoryId} from "../store/slices/filterSlice"
import { RootState } from "../store/store";


const Categories: React.FC = () => {

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
    const filter = useSelector((state: RootState) => state.filter.categoryId)
    const dispatch = useDispatch()


    return (

        <div className="categories">
            <ul>
                {
                    categories
                        .map((value, i) => (
                            <li key={i}
                                className={filter === i ? "active" : ""}
                                onClick={() => dispatch(setCategoryId(i))}
                            >
                                {value}
                            </li>
                        ))
                }
            </ul>
        </div>

    )
};

export default Categories;

