import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';

const Router = () => {
    return (
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />}></Route>
              </Routes>
            </Layout>
          </BrowserRouter>
      );
}

export default Router