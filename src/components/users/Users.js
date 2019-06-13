import React,{useContext} from 'react';
import UserItem from './UserItem';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = props => {
  const gihtuhContext = useContext(GithubContext);
  const { users, loading } = gihtuhContext;
  if(loading){
      return <Spinner/>
  }else{
  return (
    <div style={userStyle}>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
};


export default Users;
