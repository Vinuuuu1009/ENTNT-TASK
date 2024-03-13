// import React, { useState, useEffect } from 'react';

// const Products = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const mockProducts = [
//       { id: 1, name: 'Product 1', category: 'Electronics', price: 100, stock: 5 },
//       { id: 2, name: 'Product 2', category: 'Clothing', price: 50, stock: 10 },
//       { id: 3, name: 'Product 3', category: 'Home & Kitchen', price: 75, stock: 8 },
//       { id: 4, name: 'Product 4', category: 'Beauty', price: 30, stock: 15 },
//       // Add more products here if needed
//     ];
//     setProducts(mockProducts);
//   }, []);

//   return (
//     <div>
//       <h2>Products</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Category</th>
//             <th>Price</th>
//             <th>Stock</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td>{product.name}</td>
//               <td>{product.category}</td>
//               <td>${product.price}</td>
//               <td>{product.stock}</td>
//               <td>
//                 <button>Edit</button>
//                 <button>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Products;


// import React, { useState, useEffect } from 'react';

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [newProduct, setNewProduct] = useState({
//     name: '',
//     category: '',
//     price: '',
//     stock: ''
//   });

//   useEffect(() => {
//     // Mock data for products
//     const mockProducts = [
//       { id: 1, name: 'Product 1', category: 'Electronics', price: 100, stock: 5 },
//       { id: 2, name: 'Product 2', category: 'Clothing', price: 50, stock: 10 },
//       { id: 3, name: 'Product 3', category: 'Home & Kitchen', price: 75, stock: 8 },
//       { id: 4, name: 'Product 4', category: 'Beauty', price: 30, stock: 15 },
//     ];
//     setProducts(mockProducts);
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewProduct({ ...newProduct, [name]: value });
//   };

//   const handleAddProduct = () => {
//     const newProductWithId = { ...newProduct, id: products.length + 1 };
//     setProducts([...products, newProductWithId]);
//     setNewProduct({
//       name: '',
//       category: '',
//       price: '',
//       stock: ''
//     });
//   };

//   return (
//     <div className="products-container">
//       <h2>Products</h2>
//       <div>
//         <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} placeholder="Name" />
//         <input type="text" name="category" value={newProduct.category} onChange={handleInputChange} placeholder="Category" />
//         <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} placeholder="Price" />
//         <input type="number" name="stock" value={newProduct.stock} onChange={handleInputChange} placeholder="Stock" />
//         <button onClick={handleAddProduct}>Add Product</button>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Category</th>
//             <th>Price</th>
//             <th>Stock</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td>{product.name}</td>
//               <td>{product.category}</td>
//               <td>${product.price}</td>
//               <td>{product.stock}</td>
//               <td>
//                 <button>Edit</button>
//                 <button>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Products;

import React, { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
    stock: ''
  });

  useEffect(() => {
    // Mock data for products
    const mockProducts = [
      { id: 1, name: 'Product 1', category: 'Electronics', price: 100, stock: 5 },
      { id: 2, name: 'Product 2', category: 'Clothing', price: 50, stock: 10 },
      { id: 3, name: 'Product 3', category: 'Home & Kitchen', price: 75, stock: 8 },
      { id: 4, name: 'Product 4', category: 'Beauty', price: 30, stock: 15 },
      { id: 5, name: 'Product 5', category: 'Dairy', price: 75, stock: 8 },
      
    ];
    setProducts(mockProducts);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    const newProductWithId = { ...newProduct, id: products.length + 1 };
    setProducts([...products, newProductWithId]);
    setNewProduct({
      name: '',
      category: '',
      price: '',
      stock: ''
    });
  };

  const handleEditProduct = (productId) => {
    const editedProducts = products.map(product => {
      if (product.id === productId) {
        return { ...product, isEditing: true };
      }
      return product;
    });
    setProducts(editedProducts);
  };

  const handleSaveEdit = (productId, newName) => {
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        return { ...product, name: newName, isEditing: false };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleCancelEdit = (productId) => {
    const cancelledEditProducts = products.map(product => {
      if (product.id === productId) {
        return { ...product, isEditing: false };
      }
      return product;
    });
    setProducts(cancelledEditProducts);
  };

  const handleDeleteProduct = (productId) => {
    const filteredProducts = products.filter((product) => product.id !== productId);
    setProducts(filteredProducts);
  };

  return (
    <div className="products-container">
      <h2>Products</h2>
      <div>
        <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} placeholder="Name" />
        <input type="text" name="category" value={newProduct.category} onChange={handleInputChange} placeholder="Category" />
        <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} placeholder="Price" />
        <input type="number" name="stock" value={newProduct.stock} onChange={handleInputChange} placeholder="Stock" />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                {product.isEditing ? (
                  <input
                    type="text"
                    value={product.name}
                    onChange={(e) => handleSaveEdit(product.id, e.target.value)}
                  />
                ) : (
                  product.name
                )}
              </td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>
                {product.isEditing ? (
                  <>
                    <button onClick={() => handleSaveEdit(product.id)}>Save</button>
                    <button onClick={() => handleCancelEdit(product.id)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditProduct(product.id)}>Edit</button>
                    <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;

// import React, { useState, useEffect } from 'react';

// const Products = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const mockProducts = [
//       { id: 1, name: 'Product 1', category: 'Electronics', price: 100, stock: 5 },
//       { id: 2, name: 'Product 2', category: 'Clothing', price: 50, stock: 10 },
//       { id: 3, name: 'Product 3', category: 'Home & Kitchen', price: 75, stock: 8 },
//       { id: 4, name: 'Product 4', category: 'Beauty', price: 30, stock: 15 },
//       // Add more products here if needed
//     ];
//     setProducts(mockProducts);
//   }, []);

//   const handleEditProduct = (productId) => {
//     // Implement logic to edit the product with the given productId
//     console.log(`Editing product with ID ${productId}`);
//   };

//   const handleDeleteProduct = (productId) => {
//     // Implement logic to delete the product with the given productId
//     console.log(`Deleting product with ID ${productId}`);
//   };

//   return (
//     <div className="products-container">
//       <h2>Products</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Category</th>
//             <th>Price</th>
//             <th>Stock</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td>{product.name}</td>
//               <td>{product.category}</td>
//               <td>${product.price}</td>
//               <td>{product.stock}</td>
//               <td>
//                 <button onClick={() => handleEditProduct(product.id)}>Edit</button>
//                 <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Products;

// import React, { useEffect } from 'react';

// const Products = ({ setTotalProducts }) => {
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
//         setTotalProducts(0); // Handle error by setting count to 0 or implement error handling as per your requirement
//       }
//     };

//     fetchProductsCount();
//   }, [setTotalProducts]);

//   return (
//     <div>
//       {/* Your Products component UI */}
//     </div>
//   );
// };

// export default Products;


// // import React, { useState } from 'react';

// // const Products = () => {
// //     // Mock product data
// //     const initialProducts = [
// //         { id: 1, name: 'Product 1', category: 'Category 1', price: 10, stock: 100 },
// //         { id: 2, name: 'Product 2', category: 'Category 2', price: 20, stock: 200 },
// //         // Add more mock data as needed
// //     ];

// //     // State to manage products
// //     const [products, setProducts] = useState(initialProducts);

// //     // Function to delete a product
// //     const deleteProduct = (id) => {
// //         setProducts(products.filter(product => product.id !== id));
// //     };

// //     return (
// //         <div>
// //             <h2>Products Management</h2>
// //             <table>
// //                 <thead>
// //                     <tr>
// //                         <th>Name</th>
// //                         <th>Category</th>
// //                         <th>Price</th>
// //                         <th>Stock Quantity</th>
// //                         <th>Action</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {products.map(product => (
// //                         <tr key={product.id}>
// //                             <td>{product.name}</td>
// //                             <td>{product.category}</td>
// //                             <td>{product.price}</td>
// //                             <td>{product.stock}</td>
// //                             <td>
// //                                 <button onClick={() => deleteProduct(product.id)}>Delete</button>
// //                             </td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>
// //         </div>
// //     );
// // }

// // export default Products;



// const Products = () => {
//     // ... other code
  
//     const handleEditProduct = (productId) => {
//       // Implement logic to edit the product (e.g., open an edit form)
//       console.log("Edit product:", productId); // Placeholder for now
//     };
  
//     const handleDeleteProduct = (productId) => {
//       // Implement logic to delete the product (e.g., confirmation, API call)
//       console.log("Delete product:", productId); // Placeholder for now
//     };
  
//     return (
//       <div>
//         <h2>Products</h2>
//         <table>
//           {/* ... table content ... */}
//           <tbody>
//             {products.map((product) => (
//               <tr key={product.id}>
//                 <td>{product.name}</td>
//                 {/* ... other product details ... */}
//                 <td>
//                   <button onClick={() => handleEditProduct(product.id)}>Edit</button>
//                   <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         {/* ... add product form ... */}
//       </div>
//     );
//   };
// 

  