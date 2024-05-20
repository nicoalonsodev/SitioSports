import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";
import { FaDownload } from "react-icons/fa";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import CarruselDetail from "../../components/pageProps/productDetails/CarruselDetail";

const tabs = [
  {
    id: "Video",
    label: "Video",
    content: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/watch?v=6e0yIRDVPlA&list=RD6e0yIRDVPlA&start_radio=1"
        title="YouTube Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    ),
  },
];

const ProductDetails = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [productInfo, setProductInfo] = useState([]);
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    setProductInfo(location.state.item);
    setPrevLocation(location.pathname);
  }, [location]);
  console.log(productInfo);
  const [images, setImages] = useState({
  });

  // const [activeImg, setActiveImage] = useState(images.img1);

  const handleSelectedImages = (variantImgs) => {
    setImages(variantImgs);
  };

  return (
    <>
      <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
        <div className="max-w-container mx-auto px-4 ">
          <div className="xl:-mt-10 -mt-7">
            <Breadcrumbs title="" prevLocation={prevLocation} />
          </div>
          <div className="flex flex-col justify-center lg:flex-row gap-4 lg:items-start ">
            <CarruselDetail productInfo={productInfo} variantImages={images} />
            <ProductInfo 
              productInfo={productInfo ? productInfo : ""}
              handleSelectedImages={handleSelectedImages}
            /> 
          </div>
          <div className="flex justify-center py-20">
           
            <div className="my-4">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={activeTab === tab.id ? "" : "hidden"}
                >
                  <p>{tab.content}</p>
                </div>
              ))}
            </div>
          </div>
          <BestSellers />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
