import React, { useEffect, useState } from "react";
import axios from "axios";
import { Category } from "../utils/types";

interface CatalogMenuProps {
    toggleCatalogMenu: () => void;
    onSelectCategory: (category: Category | 'all') => void;
}

export default function CatalogMenu({ toggleCatalogMenu, onSelectCategory }: CatalogMenuProps): JSX.Element {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/get/category')
          .then(response => {
            setCategories(response.data.categories);
          })
          .catch(error => {
            console.error(`There was an error retrieving the data: ${error}`);
          });
      }, []);

    return (
        <>
            <div className="background-blackout" onClick={toggleCatalogMenu}></div>
            <ul className="catalog-menu">
                {categories.map((category) => (
                    <li 
                        key={category.id} 
                        className="catalog-menu__point-li" 
                        onClick={() => onSelectCategory(category)}
                    >
                        <img 
                            className="catalog-menu__category-icon" 
                            src={category.image} 
                            alt={category.title} 
                        />
                        {category.title}
                    </li>
                ))}
            </ul>
        </>
    );
}
