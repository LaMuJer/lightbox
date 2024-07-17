"use client";

import "yet-another-react-lightbox/styles.css";
import React from "react";
import LightBoxHome from "./lightbox/page";
import ReactLightGalleryComponent from "@/components/reactLightGalleryComponent";
import NewLightGalleryComponent from "@/components/newLightGalleryComponent";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <LightBoxHome />
      {/* old version */}
      {/* <ReactLightGalleryComponent /> */}
      <NewLightGalleryComponent />
    </div>
  );
}
