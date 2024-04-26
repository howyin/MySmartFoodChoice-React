import React, { useEffect, useState } from 'react';
import { collection, query, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../Firebase/Firebase'; // Assuming db is your Firestore instance

function ShowAllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const q = query(collection(db, 'users')); // Query all documents in the "users" collection
        const querySnapshot = await getDocs(q); // Execute the query and get a snapshot of the results

        // Process the snapshot and extract user data
        const userData = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }; // Include document ID in user data
        });

        setUsers(userData); // Update the state with user data
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers(); // Call the fetchUsers function when the component mounts
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  // Function to delete a user
  const deleteUser = async (userId) => {
    try {
      await deleteDoc(doc(db, 'users', userId)); // Delete the document with the specified user ID
      setUsers(users.filter((user) => user.id !== userId)); // Update the state to remove the deleted user
      console.log('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div style={{ marginLeft: '200px' }}>
      <h2>All Users</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>

              <td>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowAllUsers;
