import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    hobbies: ''
  });

  const [tableData, setTableData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setTableData([...tableData, formData]);
    
    setFormData({
      name: '',
      phone: '',
      email: '',
      hobbies: ''
    });
  }

  const handleUpdate = (index) => {
    const updatedData = [...tableData];
    updatedData[index] = { ...formData };
    setTableData(updatedData);
    setFormData({
      name: '',
      phone: '',
      email: '',
      hobbies: ''
    });
  }

  const handleDelete = (index) => {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
  }

  return (
    <div className="App">
      <h1>User Form</h1>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            value={formData.name} 
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input 
            type="tel" 
            value={formData.phone} 
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={formData.email} 
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Hobbies:</label>
          <input 
            type="text" 
            value={formData.hobbies} 
            onChange={(e) => setFormData({ ...formData, hobbies: e.target.value })}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>

      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Hobbies</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.phone}</td>
              <td>{data.email}</td>
              <td>{data.hobbies}</td>
              <td>
                <button onClick={() => handleUpdate(index)}>Update</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
