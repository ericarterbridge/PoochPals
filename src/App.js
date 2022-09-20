import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";

function App() {
  const user = null;
  return (
    // Bem naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
        <Header />

        <div className="app_body">
          <Sidebar />
          <Feed />
        </div>
        </>
      )}
      
    </div>
  );
}

export default App;
