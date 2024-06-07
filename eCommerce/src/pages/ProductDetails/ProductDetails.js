import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";
import { FaDownload } from "react-icons/fa";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import CarruselDetail from "../../components/pageProps/productDetails/CarruselDetail";

const ProductDetails = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [productInfo, setProductInfo] = useState([]);
  // const [activeTab, setActiveTab] = useState(tabs[0].id);

  // const handleTabClick = (tabId) => {
  //   setActiveTab(tabId);
  // };

  useEffect(() => {
    setProductInfo(location.state.item);
    setDiscountedPrice(location.state.discountedPrice);
    setPrevLocation(location.pathname);
  }, [location]);
  const [images, setImages] = useState({});

  const tabs = [
    // {
    //   id: "Description",
    //   label: "Description",
    //   content: <p>{productInfo.description}</p>,
    // },
    {
      id: "Video",
      label: "Video",
      content: (
        <div dangerouslySetInnerHTML={{ __html: productInfo.video_youtube }} />
      ),
    },
  ];

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
              discountedPrice={discountedPrice}
            />
          </div>
          <div className="flex justify-center py-20">
            <div className="my-4">
              {/* {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={activeTab === tab.id ? "" : "hidden"}
                >
                {tab.content}
                </div>
              ))} */}
              {productInfo.video_youtube ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: productInfo.video_youtube,
                  }}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <BestSellers />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
