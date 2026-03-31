import React from "react";
import NotFoundImage from '../../assets/images/error-404-not-found-text-design-vector.webp'

function NotFound() {
  return (
    <div className="flex flex-wrap justify-center ">
      <img src={NotFoundImage} className="w-[80%]" />
    </div>
  );
}

export default NotFound;
