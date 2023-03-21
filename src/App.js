import React from 'react';
import './style.css';
import Form from './components/Form.js';
import AppPage from './components/MainPage.js';
import LoginForm from './components/ImplementationForm.js';
export default function App() {
  return (
    <div>
      <LoginForm></LoginForm>
      <hr></hr>
      <AppPage></AppPage>
    </div>
  );
}
