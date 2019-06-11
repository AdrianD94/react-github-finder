import React, { useState } from 'react';
import PropTypes from 'prop-types'


const Search =(props)=>{
  
  const [text,setText]=useState('');
  
  const onChange = e => setText( e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    if(text ===''){
      props.setAlert('Please enter something','light');
    }else{

    
    props.searchUsers(text);
    setText('');
  }
};

    const {showClear,clearUsers} = props;
    return (
      <div>
        <form className='form' onSubmit={onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            onChange={onChange}
            value={text}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showClear &&
        <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
        }
        </div>
    );
  }
  Search.propTypes={
    searchUsers:PropTypes.func.isRequired,
    clearUsers:PropTypes.func.isRequired,
    setAlert:PropTypes.func.isRequired
}

export default Search;
