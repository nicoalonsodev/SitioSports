import React, { useState } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";
import { toast } from "react-toastify";

const Product = (props) => {
  const dispatch = useDispatch();
  const _id = props.productName;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);
  const [wishList, setWishList] = useState([]);
  const navigate = useNavigate();
  const productItem = props;
  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: productItem,
      },
    });
  };
  const calculateDiscountedPrice = () => {
    const discountedPrice = props.price * (1 - props.discount / 100);
    return discountedPrice.toFixed(2);
  };

  return (
    <div className="w-full relative group">
      <div className="max-w-80 max-h-80 relative overflow-y-hidden cursor-pointer">
        <div onClick={handleProductDetails}>
          <Image className="w-full h-full" imgSrc={props.img} />
        </div>
        <div className="absolute top-4 left-4">
          {props.discount !== 0 ? (
            <Badge text={props.discount !== 0 ? `%${props.discount}` : ""} />
          ) : (
            ""
          )}
        </div>
        <div className="w-full h-auto absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
            <li
              onClick={handleProductDetails}
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              View Details
              <span className="text-lg">
                <MdOutlineLabelImportant />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-80 py-2 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between ">
          <h2 className="text-sm text-gray-700">{props.productName}</h2>
        </div>
        <div className="flex gap-x-2">
          {props.discount !== 0 ? (
            <p className="text-[#767676] font-bold text-[14px]">
              ${calculateDiscountedPrice()}
            </p>
          ) : (
            ""
          )}
          <p
            className={`${
              props.discount !== 0 ? "line-through" : ""
            } text-[#767676] font-semibold text-[14px]`}
          >
            ${props.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
