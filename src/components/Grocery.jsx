
// const Grocery = () => {
//     return (
//         <div className="grocery-component">
//             <h2>Our grocery online store, and we have a lot of child components inside this web page!!!</h2>
//         </div>
//     )
// }

// export default Grocery;

// src/components/Grocery.jsx
import React from "react";

const Grocery = () => {
  const groceryItems = [
    {
      id: 1,
      name: "Fresh Vegetables",
      desc: "Daily fresh veggies from local farms",
      img: "https://plus.unsplash.com/premium_photo-1664527305901-a3c8bec62850?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Fruits",
      desc: "Seasonal fruits at best prices",
      img: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Dairy & Eggs",
      desc: "Milk, paneer, curd, cheese & more",
      img: "https://images.unsplash.com/photo-1646834107441-507129033287?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Snacks & Beverages",
      desc: "Chips, juices, biscuits & instant snacks",
      img: "https://images.unsplash.com/photo-1757929494257-f5eaf1b64559?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Atta, Dal & Rice",
      desc: "Everyday essentials delivered fast",
      img: "https://media.istockphoto.com/id/1437059424/photo/sack-filled-with-wheat-grain-and-rice-grain-table-top-spin.webp?a=1&b=1&s=612x612&w=0&k=20&c=4DfVkd_fPab3lmjev8m4RV0CIIM-4_glpyXxJdcikiQ=",
    },
    {
      id: 6,
      name: "Household Essentials",
      desc: "Cleaning, personal care & more",
      img: "https://images.unsplash.com/photo-1658524202348-8bdff4d4a194?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Grocery <span className="text-green-600">Store</span>
      </h1>

      <p className="text-gray-600 mb-8">
        Get your groceries delivered fast 🛒💨  
        Fresh produce, daily essentials, snacks & a lot more!
      </p>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {groceryItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-xl transition border border-gray-100"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
              <button className="mt-4 w-full py-2 rounded-xl text-white bg-green-600 hover:bg-green-700 transition">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-10 text-gray-500 text-sm">
        <p>
          *This is a demo grocery page just like Swiggy Instamart / Blinkit UI.
        </p>
      </div>
    </div>
  );
};

export default Grocery;
