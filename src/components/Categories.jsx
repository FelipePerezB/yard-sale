import AppContext from '@context/AppContext'
import { useRouter } from 'next/router'
import React, {useContext} from 'react'
import styles from "../styles/Categories.module.css"

function Categories({type="categories"}) {
  const router = useRouter()
  const {state, changeMenuVisibility, setHomeProductCategory} = useContext(AppContext)
  const categories = ["Clothes","Electronics", "Furniture","Toys", "Others"]

  const runFunctions = (category) =>{
    setHomeProductCategory(category)
    router.push("/yard-sale/") 

  }

  return (
    <div className={styles[type]} >
      <label htmlFor={"All"} key={"All"}>
        <input 
          defaultChecked
          id={"All"} 
          value={"All"} 
          name={"categories"} 
          onChange={()=>runFunctions("All")}
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
            onChange={()=>runFunctions(category)}
            type={"radio"}
          />
          <span>{category}</span>
        </label>
      ))}
    </div>    
  )
}

export default Categories

      {/* <label htmlFor='All'>
        <input id='All' value="All" name='categories' type={"radio"} 
        onClick={()=>setHomeProductCategory("All")}/>
        <span href="/yard-sale/">All</span>
      </label>
      <label htmlFor='Clothes'>
        <input id='Clothes' value="Clothes" name='categories' type={"radio"} 
        onClick={()=>setHomeProductCategory("Clothes")}/>
        <span href="/yard-sale/">Clothes</span>
      </label>
      <label htmlFor='Electronics'>
        <input id='Electronics' value="Electronics" name='categories' type={"radio"}/>
        <span href="/yard-sale/">Electronics</span>
      </label>
      <label htmlFor='Furniture'>
        <input id='Furniture' value="Furniture" name='categories' type={"radio"}/>
        <span href="/yard-sale/">Furniture</span>
      </label>
      <label htmlFor='Toys'>
        <input id='Toys' value="Toys" name='categories' type={"radio"}/>
        <span href="/yard-sale/">Toys</span>
      </label>
      <label htmlFor='Others'>
        <input id='Others' value="Others" name='categories' type={"radio"}/>
        <span href="/yard-sale/">Others</span>
      </label> */}
      {/* <a href="/yard-sale/">Clothes</a>
      <a href="/yard-sale/">Electronics</a>
      <a href="/yard-sale/">Furniture</a>
      <a href="/yard-sale/">Toys</a>
      <a href="/yard-sale/">Others</a> */}
