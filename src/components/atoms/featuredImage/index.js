import React, { useState } from "react";

import styles from "./image.module.scss";

import MarvelImage from "./../../../images/marvel.jpeg";
import DcImage from "./../../../images/dc.avif";
import NarutoImage from "./../../../images/naruto.png";

const ImageComponent = ({ featuredImage }) => {
  // const [image, setImage] = useState(0);

  const renderImage = (img) => {
    if (img === 1) {
      return (
        <img src={MarvelImage} width="100" height="100" alt="Marvel Universe" />
      );
    }
    if (img === 2) {
      return <img src={DcImage} width="100" height="100" alt="DC Universe" />;
    }
    if (img === 3) {
      return <img src={NarutoImage} width="100" height="100" alt="Naruto" />;
    }
    return <p>Image</p>;
  };

  return (
    <div className={styles.imageWrapper}>{renderImage(featuredImage)}</div>
  );
};

export default ImageComponent;
