
import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
 
const [categories, setCategories] = useState(['47 Ronnin']);


  // const handledAdd = () =>{
  //   setCategories((cats) => [...cats, 'thunder']);

  // }   

  return (
  
    <>
        <h2>GifExpertApp</h2>
        <hr />
        <AddCategory setCategories={ setCategories } />
        <br></br>
        <ol>
          {
            categories.map( category => (
            <GifGrid key={ category }
                      category={ category }/>
            ))
          }
        </ol>
    </>
  )
}

export default GifExpertApp

// const expertApp = () => {
// return <>
//         <h2>GifExpertApp</h2>
//         <hr />
//              </>
// 
