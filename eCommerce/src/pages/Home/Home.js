import React, { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../components/home/YearProduct/YearProduct";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsFromBackend } from "../../utils/api";
import { setBackendProducts } from "../../redux/orebiSlice";


const Home = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProductsFromBackend();
        dispatch(setBackendProducts(products));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [dispatch]);

console.log(products);
  return (
    <div className="w-full mx-auto overflow-hidden">
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        <Sale />
        <NewArrivals />
        <BestSellers />
        <YearProduct />
        <SpecialOffers />
      </div>
    </div>
  );
};

export default Home;
