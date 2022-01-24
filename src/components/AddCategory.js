import React, {useState} from 'react';
import PropTypes from 'prop-types';
export const AddCategory = ({setCategories}) => {
    const [inputValue,setInputValue]=useState('')

    const handleInputChange=(e)=>{
        setInputValue(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (inputValue.length>2){
            setCategories(cats=>[inputValue]);
            setInputValue('');
        }
       
    }
    return (
        
        <form  >
            
            <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button class="btn btn-success " type="submit" onClick={handleSubmit}>Search</button>
        </form>
        
    )
}

AddCategory.protoTypes={
    setCategories: PropTypes.func.isRequired
}
