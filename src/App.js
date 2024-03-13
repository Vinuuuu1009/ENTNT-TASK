// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Dashboard from './components/Dashboard';
// import Products from './components/Products';
// import Orders from './components/Orders';
// // import CalendarView from './components/CalendarView';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <div className="container">
//           <Route path="/" exact component={Dashboard} />
//           <Route path="/products" component={Products} />
//           <Route path="/orders" component={Orders} />
//           {/* <Route path="/calendar" component={CalendarView} /> */}
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import './App.css'; // Assuming you have an App.css file
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Orders from './components/Orders';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
}

export default App;
