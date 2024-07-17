"use client";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import React from "react";
import { Button } from "@nextui-org/button";

export default function LightBoxHome() {
  const [open, setOpen] = React.useState(false);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Button
        type="button"
        onClick={() => setOpen(true)}
        color="primary"
        variant="shadow"
      >
        Open Lightbox
      </Button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: "/img1.jpg",
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [{ src: "/img1.jpg", width: 320, height: 213 }],
          },
          {
            src: "/img2.jpg",
            alt: "image 2",
            width: 3840,
            height: 2560,
            srcSet: [{ src: "/img2.jpg", width: 320, height: 213 }],
          },
          {
            src: "/img3.jpg",
            alt: "image 3",
            width: 3840,
            height: 2560,
            srcSet: [{ src: "/img3.jpg", width: 320, height: 213 }],
          },
          {
            src: "/img4.jpg",
            alt: "image 4",
            width: 3840,
            height: 2560,
            srcSet: [{ src: "/img4.jpg", width: 320, height: 213 }],
          },
          {
            src: "/img5.jpg",
            alt: "image 5",
            width: 3840,
            height: 2560,
            srcSet: [{ src: "/img5.jpg", width: 320, height: 213 }],
          },
        ]}
      />
    </section>
  );
}
