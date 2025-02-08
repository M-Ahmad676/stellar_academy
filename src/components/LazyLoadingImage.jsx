import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function LazyLoadingImage({title,path,styling,placeholder}) {
  return (
    <>
        <LazyLoadImage
          src={path}
          alt= {title}
          className={styling}
          placeholderSrc={placeholder}
          effect="blur"
        />
    </>
  )
}
