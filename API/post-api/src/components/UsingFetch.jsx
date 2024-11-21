import React, { useState } from "react";

export default function UsingFetch() {
  const urlPath = "https://dummyjson.com/users/add";
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    bank: "",
  });

  // handle userinput data
  const handleUserData = (e) => {
    const { name, value } = e.target;
    setData((previous) => ({ ...previous, [name]: value }));
  };

  // handle post api data
  const handleSendData = (e) => {
    e.preventDefault();
    fetch(urlPath, {
      method: "POST",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify(data),
    })
      .then((response) =>{
        if(!response.ok){
            throw new Error('something went wrong with logs');
        }
       return response.json()})
      .then((responseData) => console.log(responseData.bank))
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <h1>Fill the Form</h1>
      <form method="post" onSubmit={handleSendData}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={data.firstName}
          onChange={(e) => handleUserData(e)}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={data.lastName}
          onChange={(e) => handleUserData(e)}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={data.age}
          onChange={(e) => handleUserData(e)}
        />
        <input
          type="text"
          name="bank"
          placeholder="Bank Name"
          value={data.bank}
          onChange={(e) => handleUserData(e)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
