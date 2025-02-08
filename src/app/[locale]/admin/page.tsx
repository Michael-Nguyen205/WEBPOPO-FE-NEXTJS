"use client"
import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const AdminHome: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock API call to fetch users
  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="admin-home">
      <header className="admin-header">
        <h1 className="admin-title">Admin Dashboard</h1>
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </header>
      
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="user-list">
          {filteredUsers.length === 0 ? (
            <p>No users found</p>
          ) : (
            <ul>
              {filteredUsers.map(user => (
                <li key={user.id} className="user-item">
                  <span>{user.name}</span> - <span>{user.email}</span> - <span>{user.role}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <footer className="admin-footer">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>

      {/* Simulated heavy component */}
      <div className="heavy-component">
        {Array.from({ length: 1000 }, (_, index) => (
          <div key={index} className="heavy-item">
            This is a heavy item number {index + 1}
          </div>
        ))}
      </div>

      <style jsx>{`
        .admin-home {
          font-family: Arial, sans-serif;
          padding: 20px;
          background-color: #f5f5f5;
        }
        .admin-header {
          margin-bottom: 20px;
        }
        .admin-title {
          font-size: 24px;
        }
        .search-input {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          width: 100%;
          max-width: 300px;
        }
        .user-list {
          margin: 20px 0;
        }
        .user-item {
          padding: 10px;
          background-color: white;
          border: 1px solid #ddd;
          border-radius: 4px;
          margin-bottom: 10px;
        }
        .admin-footer {
          margin-top: 20px;
          text-align: center;
          font-size: 12px;
        }
        .heavy-component {
          margin-top: 30px;
        }
        .heavy-item {
          padding: 5px;
          background-color: #e0e0e0;
          margin: 2px 0;
        }
      `}</style>
    </div>
  );
};

export default AdminHome;
