// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // const Dashboard = () => {
// //     // Mock data for demonstration
// //     const totalProducts = 50;
// //     const totalOrders = 20;

// //     return (
// //         <div>
// //             <h2>Dashboard</h2>
// //             <div>
// //                 <p>Total number of products: {totalProducts}</p>
// //                 <p>Total number of orders: {totalOrders}</p>
// //             </div>
// //             <div>
// //                 <Link to="/products">Manage Products</Link>
// //                 <br />
// //                 <Link to="/orders">Manage Orders</Link>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Dashboard;
import React, { useState, useEffect } from 'react'; // Use useEffect for data fetching
import './Dashboard.css'; // Import your CSS file
import { Link } from 'react-router-dom';

// Replace with actual API call or data fetching logic
function fetchProductsCount() {
  // Implement your logic to fetch the product count from the API
  // This could involve making a network request and returning a promise
  // or using a state management library like Redux or Context API
  return 5; // Placeholder value for now
}

function fetchOrdersCount() {
  // Implement your logic to fetch the order count from the API
  // This could involve making a network request and returning a promise
  // or using a state management library like Redux or Context API
  return 4; // Placeholder value for now
}

const Dashboard = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  useEffect(() => {
    // Fetch data on component mount
    const fetchData = async () => {
      const productsCount = await fetchProductsCount();
      const ordersCount = await fetchOrdersCount();
      setTotalProducts(productsCount);
      setTotalOrders(ordersCount);
    };
    fetchData();
  }, []); // Empty dependency array ensures data is fetched only once

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
      </nav>

      <main className="dashboard-content">
        <h2>Dashboard</h2>
        <p>Total Products: {totalProducts}</p>
        <p>Total Orders: {totalOrders}</p>
      </main>
    </div>
  );
};

export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import './Dashboard.css';
// import { Link } from 'react-router-dom';

// const Dashboard = () => {
//   const [totalProducts, setTotalProducts] = useState(0);
//   const [totalOrders, setTotalOrders] = useState(0);

//   useEffect(() => {
//     const fetchProductsCount = async () => {
//       try {
//         const response = await fetch('your-api-endpoint-for-products');
//         if (!response.ok) {
//           throw new Error('Failed to fetch products count');
//         }
//         const data = await response.json();
//         setTotalProducts(data.totalProducts);
//       } catch (error) {
//         console.error('Error fetching products count:', error);
//         setTotalProducts(0); 
//       }
//     };

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
//         setTotalOrders(0); 
//       }
//     };

//     fetchProductsCount();
//     fetchOrdersCount();
//   }, []);

//   return (
//     <div className="dashboard-container">
//       <nav className="navbar">
//         <ul>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//           <li>
//             <Link to="/products">Manage Products</Link>
//           </li>
//           <li>
//             <Link to="/orders">Manage Orders</Link>
//           </li>
//         </ul>
//       </nav>

//       <main className="dashboard-content">
//         <h2>Dashboard</h2>
//         <p>Total Products:4 </p>
//         <p>Total Orders:3 </p>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState} from 'react';
// import './Dashboard.css';
// import { Link } from 'react-router-dom';
// import Products from './Products';
// import Orders from './Orders';

// const Dashboard = () => {
//   const [totalProducts, setTotalProducts] = useState(0);
//   const [totalOrders, setTotalOrders] = useState(0);

//   return (
//     <div className="dashboard-container">
//       <nav className="navbar">
//         <ul>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//           <li>
//             <Link to="/products">Manage Products</Link>
//           </li>
//           <li>
//             <Link to="/orders">Manage Orders</Link>
//           </li>
//         </ul>
//       </nav>

//       <main className="dashboard-content">
//         <h2>Dashboard</h2>
//         <Products setTotalProducts={setTotalProducts} />
//         <Orders setTotalOrders={setTotalOrders} />
//         <p>Total Products: {totalProducts}</p>
//         <p>Total Orders: {totalOrders}</p>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;




// App.js



 // Changed export name to m

 // Export the main App component

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);


