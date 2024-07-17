import {
  LightgalleryProvider,
  LightgalleryItem,
  withLightgallery,
  useLightgallery,
} from "react-lightgallery";

type PhotoItemProps = {
  image?: string;
  thumb?: string;
  group?: string;
};

const PhotoItem = ({ image, thumb, group }: PhotoItemProps) => (
  <div style={{ maxWidth: "250px", width: "200px", padding: "5px" }}>
    <LightgalleryItem group={group} src={image} thumb={thumb}>
      <img src={image} style={{ width: "100%" }} />
    </LightgalleryItem>
  </div>
);

export default PhotoItem;
