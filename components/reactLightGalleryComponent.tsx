import React from "react";
import { LightgalleryProvider, useLightgallery } from "react-lightgallery";
import PhotoItem from "./photoItem";

const ReactLightGalleryComponent = () => {
  const GROUP2 = [
    "https://images.unsplash.com/photo-1594818898109-44704fb548f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1594818896795-35ad7bcf3c6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1594818896744-57eca4d47b07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1594818897077-aec41f55241f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
  ];
  return (
    <LightgalleryProvider
      lightgallerySettings={
        {
          // settings: https://sachinchoolur.github.io/lightgallery.js/docs/api.html
        }
      }
      galleryClassName="my_custom_classname"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {GROUP2.map((p, idx) => (
          <PhotoItem key={idx} image={p} group="group2" />
        ))}
      </div>
      <OpenButtonWithHook />
    </LightgalleryProvider>
  );
};

export default ReactLightGalleryComponent;

const OpenButtonWithHook = (props: any) => {
  const { openGallery } = useLightgallery();
  return (
    <button
      {...props}
      onClick={() => openGallery("group2")}
      className={["button is-primary", props.className || ""].join(" ")}
    >
      Open second photos group (using hook)
    </button>
  );
};
