import React from 'react';
import UsersList from '../components/UsersList';


const Users = () => {

  const USERS = [
    {
      id: 'ul',
      name: 'Andrew Simons',
      image: 'https://media-exp1.licdn.com/dms/image/C5603AQH2e8W8ksxrhA/profile-displayphoto-shrink_800_800/0/1612194859965?e=1655942400&v=beta&t=XKhZDG2Oz4aRHmy7JEHmQ413d-IwskSHmvxRgdTQLoc',
      places: 3
    }
  ];

  return (
    <UsersList items={USERS} />
  )
}

export default Users;