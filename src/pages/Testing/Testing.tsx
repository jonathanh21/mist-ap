import React, { useEffect } from 'react';
import { db } from '../../firebase';

const Testing = () => {
  const getUsers = async (): Promise<void> => {
    const users = await db.collection('users').get();

    users.forEach((us) => console.log(us.id, us.data()));
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <h1>Users</h1>
    </div>
  );
};

export default Testing;
