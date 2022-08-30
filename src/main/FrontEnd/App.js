import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    // Bem naming convention
    <div className="app">
      <Header />

      <div className="app_body">
        <Sidebar />
        <Feed />
        {/* feed */}
        {/* widgets */}
      </div>
    </div>
  );
}

export default App;