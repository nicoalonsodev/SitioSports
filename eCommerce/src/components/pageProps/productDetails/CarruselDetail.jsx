import React, { useEffect, useState } from "react";

const CarruselDetail = ({ productInfo, variantImages }) => {
  const [images, setImages] = useState([
    { imgSrc: "" },
    { imgSrc: "" },
    { imgSrc: "" },
    { imgSrc: "" },
  ]);
  const [activeImg, setActiveImage] = useState("");

  useEffect(() => {
    if (productInfo && productInfo.img) {
      setImages(variantImages);
      setActiveImage(variantImages[0]);
    }
  }, [variantImages]);
  return (
    <>
      {productInfo ? (
        <div className="flex flex-col gap-6 lg:w-[40%]">
          <img
            src={activeImg}
            alt=""
            className="w-full h-full aspect-square object-cover rounded-xl"
          />
          <div className="h-24 flex justify-center">
            <div className="flex flex-row justify-center space-x-6 h-24 overflow-hidden">
              {images?.map((image) => (
                <img
                  src={image}
                  alt=""
                  className={`w-24 h-24 rounded-md cursor-pointer ${
                    activeImg === image ? "border-2 border-gray-500 shadow-md" : ""
                  }`}
                  onClick={() => setActiveImage(image)}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CarruselDetail;
