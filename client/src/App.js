import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AntriesOfPapers from './components/AntriesOfPapers';
import SidePanel from './components/SidePanel';
import Login from './Login';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Login />}></Route>
          <Route path="/dashboard-panel" element={<SidePanel />}></Route>
          <Route path="/add-papers" element={<AntriesOfPapers />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
