import React from 'react';

function Dashboard() {
  // Retrieve the user data from local storage
  const userData = JSON.parse(localStorage.getItem('userData')); // Change to 'userData'
  const userName = userData ? userData.userName : 'User'; // Default to 'User' if not found

  return (
    <div className='d-flex w-100 justify-content-center align-items-center h-100'>
      <h1 className='text-center'>Welcome, {userName}!</h1>
    </div>
  );
}


export default Dashboard;
