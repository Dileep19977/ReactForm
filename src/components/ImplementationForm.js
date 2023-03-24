import React, { useState, useEffect } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [Preferedname, setPreferedname] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [array, setArray] = useState([]);
  const [setsuccess, settsuccess] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    if (event.target.value === '') {
      alert('Please enter a valid name');
    }
  };

  const handlePreferednameChange = (event) => {
    setPreferedname(event.target.value);
    if (event.target.value === '') {
      alert('Please enter a preferred name');
    }
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    if (event.target.value === '') {
      alert('Please select a gender');
    }
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
    if (event.target.value === '') {
      alert('Please enter an address');
    }
  };

  const getval = (event) => {
    event.preventDefault();
    let valid = true;

    // Check if all fields are filled
    if (username === '' || Preferedname === '' || gender === '' || address === '') {
      alert('Please fill in all fields');
      valid = false;
    }

    // Submit data if all fields are valid
    if (valid) {
      setArray([
        {
          Username: username,
          Preferedname: Preferedname,
          Gender: gender,
          Address: address,
        },
      ]);
      settsuccess('Successfully Submitted..!!!');
      console.log('Successfully submitted..!!');
      console.log('username:', username);
      console.log('Prefered Name:', Preferedname);
      console.log('gender:', gender);
      console.log('address:', address);
    }
  };

  const refresh = () => {
    console.log('Page Refreshed');
  };

  return (
    <form>
      <h2>
        Sample Form When you click submit You can see all values in array Format
        in console.! and When you click on submit a success message is
        displayed.!!
      </h2>
      <div>
        <label>Name : </label>
        <input type="text" value={username} onChange={handleUsernameChange}></input>
      </div>
      <div>
        <label>Prefered Name : </label>
        <input type="text" value={Preferedname} onChange={handlePreferednameChange}></input>
      </div>
      <div>
        <label>Gender : </label>
        <select value={gender} onChange={handleGenderChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label>Address : </label>
        <input type="text" value={address} onChange={handleAddressChange}></input>
      </div>
      <br></br>
      <div>
        <button onClick={getval}>Submit</button>
        <button onClick={refresh}>Refresh</button>
      </div>
      <br></br>
      <b style={{ color: 'green' }}>{setsuccess}</b>
    </form>
  );
}

export default LoginForm;
