import React, { useState } from 'react';
import UserProfileUpdate from './pages/UserProfileUpdate';
import PasswordUpdate from './pages/PasswordUpdate';


const App = () => {
  const [currentPage, setCurrentPage] = useState('profile');

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('profile')}>Update Profile</button>
        <button onClick={() => setCurrentPage('password')}>Update Password</button>
      </nav>
      {currentPage === 'profile' && <UserProfileUpdate />}
      {currentPage === 'password' && <PasswordUpdate />}
    </div>
  );
};

export default App;