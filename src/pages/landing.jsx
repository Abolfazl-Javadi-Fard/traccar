import React from "react";
import Header from "../../../../../landin-page/src/Header";
import Hero from "../../../../../landin-page/src/Hero";
import Features from "../../../../../landin-page/src/Features";
import Footer from "../../../../../landin-page/src/Footer";
import { Box } from "@mui/material";

const Landing = ({}) => {
  return (
    <Box sx={{ minHeight: "100vh", direction: "rtl" }}>
      {/* header */}
      <Header />

      {/*Hero section*/}
      <Hero />

      {/*  features section */}
      <Features />

      {/*  footer */}
      <Footer />
    </Box>
  );
};

export default Landing;
