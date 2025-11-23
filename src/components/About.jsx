// import UserContext from "../utils/UserContext";
// import User from "./User";
// import UserClass from "./UserClass";
// import React from "react";

// class About extends React.Component {
//   constructor(props) {
//     super(props);
//     // console.log("Parent Constructor");
//   }
//   componentDidMount() {
//     // console.log("Parent Component Mounted");
//   }
//   componentDidUpdate() {
//     // console.log("Parent Component Updated");
//   }
//   componentWillUnmount() {
//     // console.log("Parent Component Unmount");
//   }
//   render() {
//     // console.log("Parent Render");
//     return (
//       <div>
//         <h1>About Us</h1>
//         <p>This is About Us page of Food Ordering site.</p>
//         {/* <div>
//           loggedIn User: 
//           <UserContext.Consumer>
//             { ({loggedInUser}) => <h4 className="font-bold text-2xl">{loggedInUser}</h4>}
//           </UserContext.Consumer>
//         </div> */}
//         <div>
//           Logged User:
//           <UserContext.Consumer>
//             {({ loggedInUser }) => (
//               <h4 className="font-semibold text-xl">{loggedInUser}</h4>
//             )}
//           </UserContext.Consumer>
//         </div>
//         {/* <User name={"Harendra"} location={"Agra"} /> */}
//         <UserClass name={"Shubham"} location={"Noida"} />
//         <UserClass name={"Shubham"} location={"Noida"} />
//       </div>
//     );
//   }
// }

// // functional-based-component implementation of the above class-based-component.

// // const About = () => {
// //   return (
// //     <div>
// //       <h1>About Us</h1>
// //       <p>This is About Us page of Food Ordering site.</p>
// //       <User name={"Harendra"} location={"Agra"} />
// //       <UserClass name={"Shubham"} location={"Noida"} />
// //     </div>
// //   );
// // };
// export default About;


// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Breadcrumb / Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        About <span className="text-orange-500">FoodExpress</span>
      </h1>
      <p className="text-gray-600 mb-8">
        FoodExpress is a Swiggy-like food delivery app that connects hungry
        customers with their favourite restaurants in just a few taps.
      </p>

      {/* Main Card */}
      <div className="bg-white shadow-md rounded-2xl p-6 md:p-8 mb-10">
        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          We aim to deliver hot, fresh and delicious food to your doorstep as
          fast as possible. Whether it's your daily meals, late-night cravings
          or weekend treats, we’ve got you covered with a seamless ordering
          experience and real-time tracking.
        </p>
      </div>

      {/* Stats / Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white shadow rounded-2xl p-5 text-center">
          <h3 className="text-xl font-semibold mb-1">500+</h3>
          <p className="text-gray-500 text-sm">Partner Restaurants</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-5 text-center">
          <h3 className="text-xl font-semibold mb-1">50K+</h3>
          <p className="text-gray-500 text-sm">Orders Delivered</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-5 text-center">
          <h3 className="text-xl font-semibold mb-1">4.8 ★</h3>
          <p className="text-gray-500 text-sm">Average Customer Rating</p>
        </div>
      </div>

      {/* Why choose us */}
      <div className="bg-white shadow-md rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Wide range of cuisines from top-rated restaurants</li>
          <li>Live order tracking & timely delivery</li>
          <li>Exclusive offers and discounts every day</li>
          <li>Secure payments with multiple options</li>
          <li>Dedicated support to help you any time</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
