import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddPapers from './components/AddPapers';
import SidePanel from './components/SidePanel';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<SidePanel />}></Route>
          <Route path="/add-vendors" element={<SidePanel />}></Route>
          <Route path="/add-papers" element={<AddPapers />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
