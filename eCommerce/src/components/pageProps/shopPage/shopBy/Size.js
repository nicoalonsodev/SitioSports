import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleSizes } from "../../../../redux/orebiSlice";
import { TiArrowSortedDown } from "react-icons/ti";
const Size = () => { 
  const dispatch = useDispatch();
  const checkedSizes = useSelector((state) => state.orebiReducer.checkedSizes);
  const [showColors, setShowColors] = useState(true);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    if (checkedSizes.length !== 0) {
      const hasNonColorSize = checkedSizes.some(
        (size) => !colors.find((color) => color.title === size.title)
      );
      setShowFilter(!hasNonColorSize);
    }
  }, [checkedSizes]);

  const colors = [
    {
      _id: 9001,
      title: "39",
    },

    {
      _id: 9003,
      title: "40",
    },

    {
      _id: 9005,
      title: "41",
    },

    {
      _id: 9007,
      title: "42",
    },

    {
      _id: 9009,
      title: "43",
    },

    {
      _id: 9011,
      title: "44",
    },

    {
      _id: 90013,
      title: "45",
    },
  ];

  const handleToggleSize = (size) => {
    dispatch(toggleSizes(size));
  };
  const handleFilterToggle = () => {
    if (checkedSizes.length === 0) {
      setShowFilter(!showFilter);
    }
  };
  return (
    <div>
      <div
        className="flex justify-between cursor-pointer pb-2"
        onClick={handleFilterToggle}
      >
        <h1 className="text-lg lg:text-xl font-semibold" icons={true}>Talles</h1>
        <TiArrowSortedDown
          className={`text-lg ${
            showFilter ? "rotate-180" : "rotate-0"
          } duration-300`}
        />
      </div>
      {showFilter && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-gray-100 lg:text-[#767676]">
            {colors.map((item) => (
              <li
                key={item._id}
                className="border-b-[1px] cursor-pointer border-b-[#F0F0F0] pb-2 flex items-center gap-2"
                onClick={() => handleToggleSize(item)}
             >
                <input
                  type="checkbox"
                  id={item._id}
                  checked={checkedSizes.some((b) => b._id === item._id)}
                  onChange={() => handleToggleSize(item)}
                />
                {item.title}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Size;
