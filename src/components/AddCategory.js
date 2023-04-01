import React, { useState } from 'react'
import PropType from "prop-types";

const AddCategory = ( { setCategories } ) => {

  const [initValue, setInitValue] = useState("Buscar...")  
  const handledInputChange = (e) => {
    setInitValue(e.target.value);
  }

  const handeldSubmit = (e) =>{
    e.preventDefault();
    setCategories((cats) => [ initValue, ...cats]);
    setInitValue('Buscar...');
  }

  const handledClick = () => {
    setInitValue('');
  }

  
  return (
    <form onSubmit={ handeldSubmit }>
      <input 
        type="text"
        value={ initValue }
        onChange={ handledInputChange }
        onClick={ handledClick }
        
      />
    </form>
  )
}

export default AddCategory

AddCategory.PropType = {
  setCategories: PropType.func.isRequired
}
