import React, { useState } from 'react';
import './AdminDashboard.css';
import { Search, Plus, Bell, Box } from 'lucide-react';

const AdminDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const products = [
    { id: 'PA89', product: 'AC Spares', organization: 'Tools Mart', mrpRate: 2500, technicianRate: 2500, distributorRate: 2500 },
    { id: 'PA89', product: 'AC Spares', organization: 'Tools Mart', mrpRate: 2500, technicianRate: 2500, distributorRate: 2500 },
    { id: 'PA89', product: 'AC Spares', organization: 'Tools Mart', mrpRate: 2500, technicianRate: 2500, distributorRate: 2500 },
    { id: 'PA89', product: 'AC Spares', organization: 'Tools Mart', mrpRate: 2500, technicianRate: 2500, distributorRate: 2500 },
    { id: 'PA89', product: 'AC Spares', organization: 'Tools Mart', mrpRate: 2500, technicianRate: 2500, distributorRate: 2500 },
    { id: 'PA89', product: 'AC Spares', organization: 'Tools Mart', mrpRate: 2500, technicianRate: 2500, distributorRate: 2500 },
    { id: 'PA89', product: 'AC Spares', organization: 'Tools Mart', mrpRate: 2500, technicianRate: 2500, distributorRate: 2500 },
    { id: 'PA89', product: 'AC Spares', organization: 'Tools Mart', mrpRate: 2500, technicianRate: 2500, distributorRate: 2500 },
  ];

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`pagination-button ${currentPage === i ? 'active' : ''}`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <h1>Products</h1>
        <div className="header-right">
          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input type="text" placeholder="Search Anything..." />
          </div>
          <button className="notification-btn">
            <Bell size={20} />
          </button>
          <div className="avatar">
            <img src="/api/placeholder/32/32" alt="User avatar" />
          </div>
        </div>
      </header>

      <div className="main-content">
        <div className="product-controls">
          <div className="search-box">
            <Search className="search-icon" size={20} />
            <input type="text" placeholder="Search Product" />
          </div>
          <button className="add-product-btn">
            <Plus size={20} />
            Add Product
          </button>
        </div>

        <div className="product-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product</th>
                <th>Organization Name</th>
                <th>MRP Rate</th>
                <th>Technicians Rate</th>
                <th>Distributors Rate</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.id}</td>
                  <td>
                    <div className="product-cell">
                      <Box className="product-icon" size={24} />
                      <span>{product.product}</span>
                    </div>
                  </td>
                  <td>{product.organization}</td>
                  <td>{product.mrpRate}</td>
                  <td>{product.technicianRate}</td>
                  <td>{product.distributorRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <span className="pagination-info">
            Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
            {Math.min(currentPage * itemsPerPage, products.length)} of {products.length} entries
          </span>
          <div className="pagination-controls">
            <button
              className="pagination-button"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            {renderPageNumbers()}
            <button
              className="pagination-button"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;