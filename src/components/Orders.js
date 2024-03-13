// import React, { useState } from 'react';

// const Orders = () => {
//     // Mock order data
//     const initialOrders = [
//         { id: 1, customerName: 'Customer 1', orderDate: '2022-01-01', status: 'Pending' },
//         { id: 2, customerName: 'Customer 2', orderDate: '2022-01-02', status: 'Shipped' },
//         // Add more mock data as needed
//     ];

//     // State to manage orders
//     const [orders, setOrders] = useState(initialOrders);

//     // Function to delete an order
//     const deleteOrder = (id) => {
//         setOrders(orders.filter(order => order.id !== id));
//     };

//     return (
//         <div>
//             <h2>Orders Management</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Order ID</th>
//                         <th>Customer Name</th>
//                         <th>Order Date</th>
//                         <th>Status</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {orders.map(order => (
//                         <tr key={order.id}>
//                             <td>{order.id}</td>
//                             <td>{order.customerName}</td>
//                             <td>{order.orderDate}</td>
//                             <td>{order.status}</td>
//                             <td>
//                                 <button onClick={() => deleteOrder(order.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default Orders;


// import React, { useState, useEffect } from 'react';

// const Orders = () => {
//   const [orders, setOrders] = useState([]);

//   // Replace with API call to fetch orders
//   useEffect(() => {
//     const mockOrders = [
//       { id: 1, customerName: 'John Doe', orderDate: '2024-03-09', status: 'Pending' },
//       // ... more orders
//     ];
//     setOrders(mockOrders);
//   }, []);

//   // Function to handle order status update (optional)
//   const handleUpdateOrderStatus = (orderId, newStatus) => {
//     // Implement logic to update order status on server (if using API)
//     const updatedOrders = orders.map((order) =>
//       order.id === orderId ? { ...order, status: newStatus } : order
//     );
//     setOrders(updatedOrders);
//   };

//   return (
//     <div className="orders-container">
//       <h2>Orders</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Order ID</th>
//             <th>Customer</th>
//             <th>Date</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order.id}>
//               <td>{order.id}</td>
//               <td>{order.customerName}</td>
//               <td>{order.orderDate}</td>
//               <td>
//                 <select value={order.status} onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value)}>
//                   <option value="Pending">Pending</option>
//                   <option value="Processing">Processing</option>
//                   <option value="Shipped">Shipped</option>
//                   <option value="Delivered">Delivered</option>
//                   <option value="Cancelled">Cancelled</option>
//                 </select>
//               </td>
//               <td>
//                 {/* Optional: View details button */}
//                 <button>View Details</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Orders;

// import React, { useState, useEffect } from 'react';

// const Orders = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const mockOrders = [
//       { id: 1, customerName: 'John Doe', orderDate: '2024-03-09', status: 'Pending' },
//       { id: 2, customerName: 'Jane Smith', orderDate: '2024-03-10', status: 'Processing' },
//       { id: 3, customerName: 'Alice Johnson', orderDate: '2024-03-11', status: 'Shipped' },
//       // Add more orders here if needed
//     ];
//     setOrders(mockOrders);
//   }, []);

//   const handleUpdateOrderStatus = (orderId, newStatus) => {
//     // Implement logic to update order status
//   };

//   return (
//     <div className="orders-container">
//       <h2>Orders</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Order ID</th>
//             <th>Customer</th>
//             <th>Date</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order.id}>
//               <td>{order.id}</td>
//               <td>{order.customerName}</td>
//               <td>{order.orderDate}</td>
//               <td>
//                 <select value={order.status} onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value)}>
//                   <option value="Pending">Pending</option>
//                   <option value="Processing">Processing</option>
//                   <option value="Shipped">Shipped</option>
//                   <option value="Delivered">Delivered</option>
//                   <option value="Cancelled">Cancelled</option>
//                 </select>
//               </td>
//               <td>
//                 <button>View Details</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Orders;

import React, { useState, useEffect } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Mock data for orders
    const mockOrders = [
      { id: 1, customerName: 'John Doe', orderDate: '2024-03-09', status: 'Pending' },
      { id: 2, customerName: 'Jane Smith', orderDate: '2024-03-10', status: 'Processing' },
      { id: 3, customerName: 'Alice Johnson', orderDate: '2024-03-11', status: 'Shipped' },
      { id: 4, customerName: 'Alice Micheal', orderDate: '2024-02-11', status: 'Shipped' },
      // Add more orders here if needed
    ];
    setOrders(mockOrders);
  }, []);

  const handleViewDetails = (orderId) => {
    const order = orders.find((order) => order.id === orderId);
    alert(`Order ID: ${order.id}\nCustomer: ${order.customerName}\nOrder Date: ${order.orderDate}\nStatus: ${order.status}`);
  };

  return (
    <div className="orders-container">
      <h2>Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => handleViewDetails(order.id)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;


// import React, { useEffect } from 'react';

// const Orders = ({ setTotalOrders }) => {
//   useEffect(() => {
//     const fetchOrdersCount = async () => {
//       try {
//         const response = await fetch('your-api-endpoint-for-orders');
//         if (!response.ok) {
//           throw new Error('Failed to fetch orders count');
//         }
//         const data = await response.json();
//         setTotalOrders(data.totalOrders);
//       } catch (error) {
//         console.error('Error fetching orders count:', error);
//         setTotalOrders(0); // Handle error by setting count to 0 or implement error handling as per your requirement
//       }
//     };

//     fetchOrdersCount();
//   }, [setTotalOrders]);

//   return (
//     <div>
//       {/* Your Orders component UI */}
//     </div>
//   );
// };

// export default Orders;
