import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Table() {
  const [items, setItem] = useState([]);
  const [userId, setUserId] = useState(null);

  // Retrieve userId from localStorage and set state
  useEffect(() => {
    const storedId = localStorage.getItem('userId');
    if (storedId) {
      setUserId(parseInt(storedId, 10));
    }
  }, []);

  // Fetch data when userId changes
  useEffect(() => {
    const fetchData = async () => {
      if (userId !== null) { // Ensure userId is not null before making the request
        try {
          const response = await axios.get(`http://localhost:3000/item/items/${userId}`);
          setItem(response.data);
        } catch (err) {
          console.log('There are some errors', err);
        }
      }
    };

    fetchData();
  }, [userId]); // Dependency array includes userId

  return (
    <>
      <div className="container mt-4">
        <h2>Inventory Table</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.length > 0 ? (
              items.map(item => (
                <tr  key={item.id}  >
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.category}</td>
                  <td>
                    <button className="btn btn-primary btn-sm" >Edit</button>
                    <button className="btn btn-danger btn-sm pr-5">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No items found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
