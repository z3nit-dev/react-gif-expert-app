import { useState } from "react"

import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['Star Wars'])
  
  const onAddCategory = ( newCategorie )=>{
    if (categories.includes(newCategorie)) return;
    setCategories([newCategorie,...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategorie={(event) => onAddCategory(event)}
      />
      
      <ol>
        {categories.map((category)=>{
          return (
            <GifGrid 
              key={category} 
              category={ category } 
            />
          )
        })}
      </ol>
    </>
    
  )
}