import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = props => {
  const [text, setText] = useState('');
  const githubContext = useContext(GithubContext);

  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      props.setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  //const { showClear, clearUsers } = props;
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
      {githubContext.users.length>0 && (
        <button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};
Search.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default Search;
