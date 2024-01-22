

import { GifGridItem } from "./GifGridItem";
import { useFechGif } from "../hooks/useFechGifs";

export const GifGrid = ({category}) => {

  const { images, isLoading} = useFechGif( category );
  

  return (
    <>
        <h3>{ category }</h3>

        {
          isLoading && ( <h2>cargando...</h2> )
        }

        <div className="card-grid">
          { images.map( ( image ) => 
            <GifGridItem 
              key={ image.id }
              { ...image }
            />
           ) }
        </div>
    </>
  )
}
