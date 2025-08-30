import React from "react";
import Header from "../common/components/landing/Header";
import Hero from "../common/components/landing/Hero";
import Features from "../common/components/landing/Features";
import Footer from "../common/components/landing/Footer";
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
