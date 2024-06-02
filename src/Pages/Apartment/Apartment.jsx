import { useEffect, useState } from "react";
import useRooms from "../../Hooks/useRooms";
import ApartmentCard from "./ApartmentCard";
import axios from "axios";

const Apartment = () => {
  const [itemPerpage, setItemPerPage] = useState(6);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [rooms, setRooms] = useState([]);

  // Function to fetch rooms data with pagination
  const fetchRooms = async () => {
    const { data } = await axios(
      `${
        import.meta.env.VITE_API_URL
      }/all-rooms?page=${currentPage}&size=${itemPerpage}`
    );
    setRooms(data);
  };

  // Fetch total count of rooms
  const fetchRoomCount = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/room-count`);
    setCount(data.count);
  };

  useEffect(() => {
    fetchRooms();
  }, [currentPage, itemPerpage]);

  useEffect(() => {
    fetchRoomCount();
  }, []);

  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await axios(
  //       `${
  //         import.meta.env.VITE_API_URL
  //       }/all-rooms?page=${currentPage}&size=${itemPerpage}`
  //     );

  //     setCount(data.length);
  //   };
  //   getData();
  // }, [currentPage, itemPerpage]);

  // useEffect(() => {
  //   const getCount = async () => {
  //     const { data } = await axios(
  //       `${import.meta.env.VITE_API_URL}/room-count`
  //     );

  //     setCount(data.count);
  //   };
  //   getCount();
  // }, []);

  //  handle pagination button
  const handlePaginationButton = (value) => {
    console.log(value);
    setCurrentPage(value);
  };

  console.log(count);
  const numberOfPages = Math.ceil(count / itemPerpage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);
  return (
    <div>
      {rooms.length}
      <div className="grid grid-cols-3 gap-4">
        {rooms.map((room) => (
          <ApartmentCard key={room._id} room={room}></ApartmentCard>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        {/* previous button */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white"
        >
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>
        {/* pages */}
        {pages.map((btnNum) => (
          <button
            onClick={() => handlePaginationButton(btnNum)}
            key={btnNum}
            className={`hidden px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}
        {/* next button */}
        <button className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500">
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Apartment;
