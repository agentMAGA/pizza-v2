import React from "react"
import { usePizzaStore } from "../store/useCounterStore";

function Categories() {

    const {activeIndex, setActiveIndex} = usePizzaStore();
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];


    return (

        <div className="categories">
            <ul>
                {
                    categories
                        .map((value, i) => (
                            <li key={i}
                                className={activeIndex === i ? "active" : ""}
                                onClick={() => setActiveIndex(i)}
                            >
                                {value}
                            </li>
                        ))
                }
            </ul>
        </div>

    )
}

export default Categories;

