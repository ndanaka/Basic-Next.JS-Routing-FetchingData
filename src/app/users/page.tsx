/**
 * @desc Users component
 * @createdBy Midas
 * @createdAt 08/03/2024
 * @updatedAt 08/03/2024
 */

"use client";

import { useEffect, useState } from "react";

// define user types
interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

const Users = () => {
  // Define states
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Lifecycle
  useEffect(() => {
    const fetchAllUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/users`, {
          method: "GET",
        });

        const result = await response.json();

        if (result && result.users) {
          setUsers(result.users); // Correct usage of setUsers
        }
      } catch (error) {
        console.error("Failed to fetch users", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllUsers();
  }, []);

  if (loading) {
    return <h1>Loading Data... Please wait.</h1>;
  }

  return (
    <div>
      <h1>Users List:</h1>
      {users && users.length ? (
        users.map((user: User) => (
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        ))
      ) : (
        <h1>No users found.</h1>
      )}
    </div>
  );
};

export default Users;
