import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import CarruselDetail from "../../components/pageProps/productDetails/CarruselDetail";
import { fetchProductBySlugFromBackend } from "../../utils/api";
import { setProductById, cleanProductById } from "../../redux/orebiSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {
  const location = useLocation();
  const { slug } = useParams();
  const [prevLocation, setPrevLocation] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [productInfo, setProductInfo] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setProductInfo(location.state?.item || {});
    setDiscountedPrice(location.state?.discountedPrice || "");
    setPrevLocation(location.pathname);

    const fetchData = async () => {
      try {
        const product = await fetchProductBySlugFromBackend(slug);
        dispatch(setProductById(product));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();

    // Cleanup function to run when the component unmounts
    return () => {
      dispatch(cleanProductById());
    };
  }, [location, slug, dispatch]);

  const [images, setImages] = useState("");

  const product = useSelector((state) => state.orebiReducer.idProduct);

  const handleSelectedImages = (variantImgs) => {
    setImages(variantImgs);
  };
 
  return (
    <>{ product ?
      <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
        <div className="max-w-container mx-auto px-4 ">
          <div className="xl:-mt-10 -mt-7">
            <Breadcrumbs title="" prevLocation={prevLocation} />
          </div>
          <div className="flex flex-col justify-center lg:flex-row gap-4 lg:items-start ">
           {images ? <CarruselDetail
              productInfo={product ? product : ""}
              variantImages={images}
            /> : ""}
            <ProductInfo
              productInfo={product ? product : ""}
              handleSelectedImages={handleSelectedImages}
              discountedPrice={discountedPrice}
            />
          </div>
          <div className="flex justify-center py-20">
            <div className="my-4">
              {product.video_youtube ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: product.video_youtube,
                  }}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <BestSellers />
        </div>
      </div> : ""}
    </>
  );
};

export default ProductDetails;
