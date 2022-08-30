import React from "react";
import "./Post.css";

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post_top">
        {/* <i class="bi bi-person-circle"></i> */}
        <div className="post_avatar">
          <img src={profilePic} alt="" />
        </div>
        <div className="post_topInfo">
          <h3>{username}</h3>
          <p>{timestamp}</p>
        </div>
      </div>
      <div className="post_bottom">
        <p>{message}</p>
      </div>
      <div className="post_image">
        <img src={image} alt="" />
      </div>

      <div className="post_options">
        <div className="post_option">
          <i class="bi bi-hand-thumbs-up-fill"></i>
          <p>Like</p>
        </div>

        <div className="post_option">
          <i class="bi bi-chat-dots"></i>
          <p>Comment</p>
        </div>

        <div className="post_option">
          <i class="bi bi-cursor-fill"></i>
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
