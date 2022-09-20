import React from "react";
import "./Feed.css";
import Post from "./Post";
import StatusMaker from "./StatusMaker";

function Feed() {
  return (
    <div className="feed">
      <StatusMaker />

      <Post
        profilePic="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
        message="Going for a walk!"
        timestamp="8/21/22 11:15PM"
        username="Lucky"
        image="https://media.istockphoto.com/photos/dog-leash-picture-id186725241?k=20&m=186725241&s=612x612&w=0&h=GIuKYxpZIJKt3R6tti06GxeVdidrykq6R780CA6da-A="
      />

      <Post
        profilePic="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg"
        message="Anyone want to go to the dog park Saturday?"
        timestamp="8/21/22 10:56PM"
        username="Daisy"
      />

      <Post
        profilePic="https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg"
        message="I'm such a good boy!"
        timestamp="8/21/22 10:10PM"
        username="Bubbles"
        image="https://www.momontimeout.com/wp-content/uploads/2019/09/homemade-dog-treats-recipe-with-title.jpg"
      />
    </div>
  );
}

export default Feed;
