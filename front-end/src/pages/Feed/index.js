import React from "react";
import Header from "../../components/Header";
import PostCard from "../../components/PostCard";

import "./feed.css";
export default function Feed() {
  return (
    <div className={"feedwrapper"}>
      <Header />
      <section className={"section-feed"}>
        <PostCard />
        <PostCard />
        <PostCard />
      </section>
    </div>
  );
}
