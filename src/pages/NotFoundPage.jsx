import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotFound404 from '../components/NotFound404';

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <NotFound404 />
      <Footer />
    </>
  );
}
