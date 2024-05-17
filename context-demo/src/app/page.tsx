"use client"

import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { PostProvider } from "./contexts/PostContext";
import { PostList } from "@/app/components/PostList";

export default function Home() {
  return (
    <PostProvider>
      <div className="container mx-auto">
        <Header />
        <PostList />
        <Footer />
      </div>
    </PostProvider>
  );
}
