import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  
  // TODO: se dejo de usar el categories para prevenir la acumulacion de gifs,
  // se planea usar para manejar un historia de busqueda
  const [ categories, setCategories] = useState(['One Punch']);

  const [ unitCategory, setUnitCategory ] = useState( categories[0] )

  const onAddCategory = ( newCategory ) => {

      // const lowerCaseCategories = categories.map( category => category.toLocaleLowerCase());  
      // if( lowerCaseCategories.includes(newCategory.toLocaleLowerCase()) ) return;

      if(newCategory.toLocaleLowerCase() === unitCategory.toLocaleLowerCase()) return;

      setUnitCategory(newCategory);
  }

  return (
    <>
        <h1>GifExpertApp</h1>


        <AddCategory 
        // setCategories={ setCategories }
            onNewCategory={ onAddCategory }
            currentCategories={ categories }
        />

        
       
                <GifGrid key={unitCategory} category={ unitCategory }/>
         
        
    </>
  )
}
