import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import Tournaments from './pages/Tournaments/Tournaments';
import CreateTournament from './pages/CreateTournament';

const Router = () => {
    return (
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/tournaments" element={<Tournaments />}></Route>
                <Route path="/create/tournament" element={<CreateTournament />}></Route>
              </Routes>
            </Layout>
          </BrowserRouter>
      );
}

export default Router