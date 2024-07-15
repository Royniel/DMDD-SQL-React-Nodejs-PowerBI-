import React, { useState } from 'react';
import './PageStyle.css'; // Import the CSS file

import AddProduct from '../components/addProduct';
import AddOrder from '../components/addOrder';
import AddShipment from '../components/addShipment';
import AddSupplier from '../components/addSupplier';
import AddWarehouse from '../components/addWarehouse';

const AddPage = () => {
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const renderComponent = () => {
    switch (activeButton) {
      case 'Order':
        return <AddOrder />;
      case 'Product':
        return <AddProduct />;
      case 'Warehouse':
        return <AddWarehouse />;
      case 'Shipment':
        return <AddShipment />;
      case 'Supplier':
        return <AddSupplier />;
      default:
        return null;
    }
  };

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        <button className="addButton" onClick={() => handleButtonClick('Order')}>
          Order
        </button>
        <button className="addButton" onClick={() => handleButtonClick('Product')}>
          Product
        </button>
        <button className="addButton" onClick={() => handleButtonClick('Warehouse')}>
          Warehouse
        </button>
        <button className="addButton" onClick={() => handleButtonClick('Shipment')}>
          Shipment
        </button>
        <button className="addButton" onClick={() => handleButtonClick('Supplier')}>
          Supplier
        </button>
      </div>
      {renderComponent()}
    </div>
  );
};

export default AddPage;
