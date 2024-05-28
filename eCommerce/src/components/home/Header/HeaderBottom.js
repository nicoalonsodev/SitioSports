import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import Flex from "../../designLayouts/Flex";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { paginationItems } from "../../../constants";
import { BsSuitHeartFill } from "react-icons/bs";
const HeaderBottom = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, [show, ref]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = products.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  const handleSearchShop = () => {
    if (searchQuery) {
      navigate(`/shop?search=${searchQuery}`);
      setSearchQuery("");
    }
  };
  return (
    <Flex className="flex flex-col lg:flex-row items-start lg:items-center justify-end w-full lg:w-2/3 h-full lg:h-14">
      <div className="relative w-full lg:w-auto h-[40px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl shadow-sm">
        <input
          className=" h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
          type="text"
          onChange={handleSearch}
          value={searchQuery}
          placeholder="Buscar"
        />
        <button onClick={handleSearchShop}>
          <FaSearch className="w-5 h-5 cursor-pointer" />
        </button>
        {searchQuery && (
          <div
            className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
          >
            {searchQuery &&
              filteredProducts.map((item) => (
                <div
                  onClick={() =>
                    navigate(
                      `/product/${item.productName
                        .toLowerCase()
                        .split(" ")
                        .join("")}`,
                      {
                        state: {
                          item: {
                            _id: item.id,
                            badge: item.badge,
                            img: item.variants[0].imgUrl[0],
                            productName: item.productName,
                            price: item.price,
                            brand: item.brand,
                            cat: item.cat,
                            sub_cat: item.sub_cat,
                            sizes: item.sizes,
                            variants: item.variants,
                            description: item.description,
                            color: item.color,
                          },
                        },
                      }
                    ) &
                    setShowSearchBar(true) &
                    setSearchQuery("")
                  }
                  key={item._id}
                  className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                >
                  <img
                    className="w-24"
                    src={item.variants[0].imgUrl[0]}
                    alt="productImg"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-md">{item.productName}</p>
                    {/* <p className="text-xs">
                      {item.des.length > 100
                        ? `${item.des.slice(0, 100)}...`
                        : item.des}
                    </p> */}
                    <span className="text-primeColor font-semibold">
                      ${item.price}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </Flex>
  );
};

export default HeaderBottom;
