import React, { useState, useEffect } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('Dileep Kumar Reddy Bodanam');
  const [Preferedname, setPreferedname] = useState('Dileep Kumar Reddy B');
  const [gender, setGender] = useState('Male');
  const [address, setAddress] = useState('Irving, Dallas');
  const [array, setArray] = useState([]);

  const getval = (event) => {
    event.preventDefault();
    console.log('username:', username);
    console.log('Prefered Name:', Preferedname);
    console.log('gender:', gender);
    console.log('address:', address);
    setArray([
      {
        Username: username,
        Preferedname: Preferedname,
        Gender: gender,
        Address: address,
      },
    ]);
  };
 

  return (
    <form>
      <h2>
        Sample Form When you click submit You can see all values in array Format
        in console.!
      </h2>
      <div>
        <label>Name : </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Prefered Name : </label>
        <input
          type="text"
          value={Preferedname}
          onChange={(e) => setPreferedname(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Gender : </label>
        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Address : </label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></input>
      </div>
      <br></br>
      <div>
        <button onClick={getval}>Submit</button>
      </div>
    </form>
  );
}

export default LoginForm;
