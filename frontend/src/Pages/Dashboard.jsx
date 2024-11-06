import React from 'react';
import './Dashboard.css';
import { SearchIcon, BellIcon, Package, Users, Truck, FileText, Settings, LogOut } from 'lucide-react';

const Dashboard = () => {
  const sidebarItems = [
    { title: 'General', items: [
      { name: 'Enterprise AI Hub', icon: <Package /> },
      { name: 'Forum', icon: <Users /> },
      { name: 'Product', icon: <Package />, active: true },
      { name: 'Technicians', icon: <Users /> },
      { name: 'Distributors', icon: <Users /> },
    ]},
    { name: 'Shipment', icon: <Truck /> },
    { name: 'Transport', icon: <Truck /> },
    { name: 'Order Summary', icon: <FileText /> },
    { title: 'Support', items: [
      { name: 'Accounts', icon: <Users /> },
      { name: 'Settings', icon: <Settings /> },
      { name: 'Log Out', icon: <LogOut /> },
    ]},
  ];

  const products = [
    { id: 'PA89', product: 'AC Spares', organization: 'Tools Mart', mrpRate: 2500, techniciansRate: 2500, distributorsRate: 2500 },
    { id: 'PA89', product: 'AC Spares', organization: 'Tools Mart', mrpRate: 2500, techniciansRate: 2500, distributorsRate: 2500 },
    { id: 'PA89', product: 'AC Spares', organization: 'Tools Mart', mrpRate: 2500, techniciansRate: 2500, distributorsRate: 2500 },
    { id: 'PA89', product: 'AC Spares', organization: 'Tools Mart', mrpRate: 2500, techniciansRate: 2500, distributorsRate: 2500 },
    { id: 'PA89', product: 'AC Spares', organization: 'Tools Mart', mrpRate: 2500, techniciansRate: 2500, distributorsRate: 2500 },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <img src="/rim-logo.png" alt="RIM Logo" className="logo" />
        {sidebarItems.map((section, index) => (
          <div key={index} className="nav-section">
            {section.title && <div className="section-title">{section.title}</div>}
            {section.items ? (
              section.items.map((item, idx) => (
                <div key={idx} className={`nav-item ${item.active ? 'active' : ''}`}>
                  <span className="nav-icon">{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              ))
            ) : (
              <div className="nav-item">
                <span className="nav-icon">{section.icon}</span>
                <span>{section.name}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <div className="search-bar">
            <SearchIcon size={20} />
            <input type="text" placeholder="Search Anything..." />
          </div>
          <div className="header-right">
            <BellIcon className="notification-icon" size={24} />
            <div className="profile-icon" />
          </div>
        </div>

        {/* Products Section */}
        <div className="products-section">
          <div className="products-header">
            <input
              type="text"
              placeholder="Search Product"
              className="product-search"
            />
            <button className="add-product-btn">
              <span>+</span> Add Product
            </button>
          </div>

          {/* Products Table */}
          <table className="products-table">
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div className="product-icon">
                        <Package color="white" size={20} />
                      </div>
                      {product.product}
                    </div>
                  </td>
                  <td>{product.organization}</td>
                  <td>{product.mrpRate}</td>
                  <td>{product.techniciansRate}</td>
                  <td>{product.distributorsRate}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="pagination">
            <div>Showing 1 to 10 of 10 entries</div>
            <div className="pagination-buttons">
              <button className="pagination-button">{'<'}</button>
              <button className="pagination-button active">1</button>
              <button className="pagination-button">2</button>
              <button className="pagination-button">3</button>
              <button className="pagination-button">4</button>
              <button className="pagination-button">5</button>
              <button className="pagination-button">{'>'}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;