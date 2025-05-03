import React from "react";

export default function GifImage({ src, alt, className = "locomoto-gif-small" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      draggable="false"
    />
  );
}