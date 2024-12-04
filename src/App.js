import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/ConnorKeane.tsx';
import AboutUs from './pages/Contact-Me.tsx';
import Products from './pages/Personal-Projects.tsx';
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Callback from "./pages/Callback.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Connor-Keane" element={<Home />} />
        <Route path="/Projects" element={<AboutUs />} />
        <Route
            path="/Products"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />
          <Route path="/callback" element={<Callback />} />
      </Routes>
    </Router>
  );
}

export default App;
