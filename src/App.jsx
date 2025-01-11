import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Books from "./pages/Books";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Suspense fallback={<Loading />}> */}
      <Routes>
        <Route path="/" element={<Books />} />
      </Routes>
      {/* </Suspense> */}
    </>
  );
}

export default App;
