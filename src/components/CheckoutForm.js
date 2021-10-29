import React from "react";
import useForm from "../hooks/useForm";

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [values, handleChanges, handleSubmit, showSuccessMessage] =
    useForm(initialValue);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={values.address}
            onChange={handleChanges}
          />
        </label>
        <label>
          City:
          <input name="city" value={values.city} onChange={handleChanges} />
        </label>
        <label>
          State:
          <input name="state" value={values.state} onChange={handleChanges} />
        </label>
        <label>
          Zip:
          <input name="zip" value={values.zip} onChange={handleChanges} />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {values.firstName} {values.lastName}
          </p>
          <p>{values.address}</p>
          <p>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;

/***********************ANOTHER WORKING METHOD MATCHING OTHER USEFORM CUSTOM HOOK METHOD*************************************************/

// import React, { useState } from "react";
// import { useForm } from "../hooks/useForm";

// const initialValue = {
//   firstName: "",
//   lastName: "",
//   address: "",
//   city: "",
//   state: "",
//   zip: "",
// };

// // This form should be handled by a "useForm" custom hook
// // Build out the logic needed for a form custom hook (see the useForm.js file)
// // and replace the necessary stateful logic from CheckoutForm with the hook

// const CheckoutForm = (props) => {
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [firstName, handleFirstName] = useForm(initialValue.firstName);
//   const [lastName, handleLastName] = useForm(initialValue.lastName);
//   const [address, handleAddress] = useForm(initialValue.address);
//   const [city, handleCity] = useForm(initialValue.city);
//   const [state, handleState] = useForm(initialValue.state);
//   const [zip, handleZip] = useForm(initialValue.zip);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowSuccessMessage(true);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <h2>Checkout Form</h2>
//         <label>
//           First Name:
//           <input
//             name="firstName"
//             value={firstName}
//             onChange={(e) => handleFirstName(e.target.value)}
//           />
//         </label>
//         <label>
//           Last Name:
//           <input
//             name="lastName"
//             value={lastName}
//             onChange={(e) => handleLastName(e.target.value)}
//           />
//         </label>
//         <label>
//           Address:
//           <input
//             name="address"
//             value={address}
//             onChange={(e) => handleAddress(e.target.value)}
//           />
//         </label>
//         <label>
//           City:
//           <input
//             name="city"
//             value={city}
//             onChange={(e) => handleCity(e.target.value)}
//           />
//         </label>
//         <label>
//           State:
//           <input
//             name="state"
//             value={state}
//             onChange={(e) => handleState(e.target.value)}
//           />
//         </label>
//         <label>
//           Zip:
//           <input
//             name="zip"
//             value={zip}
//             onChange={(e) => handleZip(e.target.value)}
//           />
//         </label>
//         <button>Checkout</button>
//       </form>

//       {showSuccessMessage && (
//         <div className="success-message" data-testid="successMessage">
//           <p>
//             You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
//           </p>
//           <p>Your new green friends will be shipped to:</p>
//           <br />
//           <br />
//           <p>
//             {firstName} {lastName}
//           </p>
//           <p>{address}</p>
//           <p>
//             {city}, {state} {zip}
//           </p>
//         </div>
//       )}
//     </>
//   );
// };

// export default CheckoutForm;
