import AppContext from '@context/AppContext';
import { useRouter } from 'next/router';
import React, {useContext} from 'react';
import styles from "../styles/Categories.module.css";

function Categories({type="categories"}) {
  const router = useRouter();
  const { setHomeProductCategory} = useContext(AppContext);
  const categories = ["Clothes","Electronics", "Furniture","Toys", "Others"];

  const runFunctions = (category) =>{
    setHomeProductCategory(category);
    router.push("/");
  };

  return (
    <div className={styles[type]} >
      <label htmlFor={"All"} key={"All"}>
        <input 
          defaultChecked
          id={"All"} 
          value={"All"} 
          name={"categories"} 
          onClick={()=>runFunctions("All")}
          type={"radio"}
        />
        <span>All</span>
      </label>
      {categories.map((category)=>(
        <label htmlFor={category} key={category}>
          <input 
            id={category} 
            value={category} 
            name={"categories"} 
            onClick={()=>runFunctions(category)}
            type={"radio"}
          />
          <span>{category}</span>
        </label>
      ))}
    </div>    
  );
};

export default Categories;
