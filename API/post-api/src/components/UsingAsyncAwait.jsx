import React, { useState } from 'react';

export default function UsingFetch() {

    const urlPath= 'https://dummyjson.com/users/add'
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        bank:'',
    })
 
    const handleUserData=(e)=>{
        const {name, value}= e.target
        setData((previous)=> ({...previous, [name] :value}))
    }
    const  handleSendData = async (e) => {
        e.preventDefault()
        try {
            const response= await fetch(urlPath, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            const responseData= await response.json()
            if(response.ok){
                console.log(responseData);
                alert('Data Submited successfully !')
                
            }
        } catch (error) {
            console.log('something went wrong');
        }
    }
    return (
        <>
            <h1>Fill the Form</h1>
            <form method="post" onSubmit={handleSendData}>
        
                <input
                    type="text"
                    name='firstName'
                    placeholder='First Name'
                    value={data.firstName}
                    onChange={(e) => handleUserData(e)}
                />
                <input
                    type="text"
                    name='lastName'
                    placeholder='Last Name'
                    value={data.lastName}
                    onChange={(e) => handleUserData(e)}
                />
                <input
                    type="number"
                    name='age'
                    placeholder='Age'
                    value={data.age}
                    onChange={(e) => handleUserData(e)}
                />
                   <input
                    type="text"
                    name='bank'
                    placeholder='Bank Name'
                    value={data.bank}
                    onChange={(e) => handleUserData(e)}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
