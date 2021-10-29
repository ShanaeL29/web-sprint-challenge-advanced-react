// write your custom hook here to control your checkout form
import React, { useState } from "react";

const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return [values, handleChanges, handleSubmit, showSuccessMessage];
};

export default useForm;

/***********************ANOTHER WORKING METHOD MATCHING OTHER CHECKOUTFORM METHOD*************************************************/

// import React, { useState } from "react";

// export const useForm = (initialValue) => {
//   const [values, setValues] = useState(initialValue);

//   const handleChanges = (updatedValue) => {
//     setValues(updatedValue);
//   };

//   return [values, handleChanges];
// };
