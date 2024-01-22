import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  
  const [ categories, setCategories] = useState(['One Punch']);

  const onAddCategory = ( newCategory ) => {

      const lowerCaseCategories = categories.map( category => category.toLocaleLowerCase());  
      if( lowerCaseCategories.includes(newCategory.toLocaleLowerCase()) ) return;

      setCategories([newCategory, ...categories])
  }

  return (
    <>
        <h1>GifExpertApp</h1>


        <AddCategory 
        // setCategories={ setCategories }
            onNewCategory={ onAddCategory }
            currentCategories={ categories }
        />

        
          { categories.map( category => 
             (
                <GifGrid key={category} category={ category }/>
             )
           ) }
        
    </>
  )
}
