import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import './styles/app.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
