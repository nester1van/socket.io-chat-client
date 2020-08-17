import React from 'react';
import { connect } from 'react-redux';
import { setUserNameSocket } from '../../redux/user/actions';

const LocalStorage = ({ children, setUserNameSocket }) => {

  const userName = localStorage.getItem('userName');
  userName && setUserNameSocket(userName);

  return (
    <>
      {children}
    </>
  )
};

export default connect(null, { setUserNameSocket })(LocalStorage);