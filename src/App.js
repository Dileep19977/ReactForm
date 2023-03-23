import React from 'react';
import './style.css';
import Form from './components/Form.js';
import AppPage from './components/MainPage.js';
import LoginForm from './components/ImplementationForm.js';
import ListRendering from './components/ListRendering.js';
import ParentRef from './components/ParentRef.js';
export default function App() {
  return (
    <div>
      {/* <ListRendering /> */}
      <ParentRef/>
      <LoginForm></LoginForm>
      <hr></hr>
      <AppPage></AppPage>
    </div>
  );
}
