import React, { useState } from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const NewLightGalleryComponent = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  const [easing, setEasing] = useState("0.680, -0.550, 0.265, 1.550");
  return (
    <div className="w-screen flex justify-center items-center gap-5 max-h-96">
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        <a href="img1.jpg">
          <img alt="img1" src="img1.jpg" />
        </a>
        <a href="img2.jpg">
          <img alt="img2" src="img2.jpg" />
        </a>
        <a href="img3.jpg">
          <img alt="img3" src="img3.jpg" />
        </a>
        <a href="img4.jpg">
          <img alt="img4" src="img4.jpg" />
        </a>
        <a href="img5.jpg">
          <img alt="img5" src="img5.jpg" />
        </a>
      </LightGallery>
    </div>
  );
};

export default NewLightGalleryComponent;
