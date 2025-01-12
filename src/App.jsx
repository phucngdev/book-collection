import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Books from "./pages/Books";
import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Public from "./routes/Public";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Public />}>
          <Route index element={<Books />} />
          <Route path=":slug" element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
