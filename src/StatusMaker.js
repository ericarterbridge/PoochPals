import React, { useState } from "react";
import "./StatusMaker.css";

function StatusMaker() {
  const [input, setInput] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setInput("");
    setUrl("");
  };
  return (
    <div className="statusMaker">
      <div className="statusMaker_top">
        {/* <Avatar /> */}
        <i class="bi bi-person-circle"></i>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="statusMaker_input"
            placeholder={`What's on your mind?`}
          />
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="statusMaker_link"
            placeholder={`URL (optional)`}
          />

          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>

      <div className="statusMaker_bottom">
        <div className="statusMaker_option">
          <i class="bi bi-images" style={{ color: "magenta" }}></i>
          <h3>Photo/Video</h3>
        </div>

        <div className="statusMaker_option">
          <i class="bi bi-emoji-smile" style={{ color: "magenta" }}></i>
          <h3>Mood</h3>
        </div>
      </div>
    </div>
  );
}

export default StatusMaker;
