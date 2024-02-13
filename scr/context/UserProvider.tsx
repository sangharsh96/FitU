import React, {useState} from 'react';
import UserContext from './UserContext';

const UserProvider = ({children}) => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    countryCode: '',
    address: '',
    mobileNumber: '',
  });

  return (
    <UserContext.Provider value={{userData, setUserData}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
