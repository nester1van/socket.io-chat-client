import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUserNameSocket } from '../../redux/user/actions';

const LocalStorage = ({ children, setUserNameSocket }) => {

  // useEffect(() => {
    // console.log('Local storage');
    const userName = localStorage.getItem('userName');
    userName && setUserNameSocket(userName);
  // }, []);

  

  return (
    <>
      {children}
    </>
  )
};

const mapStateToProps = (state) => ({

});

export default connect(null, { setUserNameSocket })(LocalStorage);