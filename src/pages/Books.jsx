import React, { useEffect, useState } from "react";
import { formatDate, formatPrice } from "../utils/format";
import { CoffeeOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Modal } from "antd";
import categories from "../data/categories";
import animes from "../data/anime";

const getGreeting = () => {
  const hour = new Date().getHours(); // Lấy giờ hiện tại (0–23)
  if (hour < 12) {
    return "Good morning";
  } else if (hour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
};

const Books = () => {
  const [books, setBooks] = useState(() => {
    return animes;
  });

  const [search, setSearch] = useState("");
  const [listSearch, setListSearch] = useState([]);
  const [category, setCategory] = useState({
    id: 0,
    name: "All books",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setSearch("");
    setListSearch([]);
  };

  const handleSearch = () => {
    const filteredBooks = animes.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
    setListSearch(filteredBooks);
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  useEffect(() => {
    if (!category) {
      setBooks(animes);
      return;
    }
    const { name, id } = category;
    const filteredBooks =
      name === "All books" || id === 0
        ? animes
        : animes.filter((book) => book.genre.includes(name));
    setBooks(filteredBooks);
  }, [category, animes]);

  return (
    <>
      <Modal
        title="Tìm kiếm"
        open={isModalOpen}
        onCancel={handleCancel}
        className="top-4"
        footer={false}
      >
        <Input
          placeholder="Tìm kiếm sách"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-3"
        />
        {search &&
          listSearch &&
          listSearch.map((book) => (
            <div
              className="hover:shadow-lg hover:bg-slate-200 bg-white p-4 flex items-center gap-3 cursor-pointer"
              key={book.id}
              onClick={() => {
                // navigate(`/chi-tiet/${book.title}`);
                setIsModalOpen(false);
                setSearch("");
              }}
            >
              <img src={book.imageUrl} alt={book.title} className="w-10 " />
              {book.title}
            </div>
          ))}
      </Modal>
      <div className="p-2">
        <div className="flex items-center justify-between">
          <div className="">
            <h2 className="text-black text-2xl font-bold font-jetbrains">
              {getGreeting()}, Phuc!
            </h2>
            <p className="text-gray-400 text-sm">Today is {formatDate()}</p>
          </div>
          <SearchOutlined
            className="text-black text-xl size-10 flex items-center justify-center rounded-md bg-black bg-opacity-5 hover:bg-opacity-10 active:bg-opacity-15"
            onClick={() => showModal()}
          />
        </div>
        <div className="h-[150px] flex items-start justify-between rounded-lg bg-[#416b49] p-2 mt-10">
          <div className="h-full flex flex-col items-start justify-between p-4">
            <div className="">
              <h3 className="text-xl text-white">Owned books</h3>
              <p className="text-[10px] text-gray-200 mt-1">
                Get more books, Let gooooooooo
              </p>
            </div>
            <div className="text-2xl text-white font-jetbrains font-bold">
              {animes.length}
            </div>
          </div>
          <div className="h-full flex items-center justify-center p-5 bg-white rounded-lg">
            <img
              src="https://product.hstatic.net/200000343865/product/6_952c89aa38ea46d48cc79e1cacc2edb0_compact.jpg"
              className="rounded-lg object-cover h-full"
              alt=""
            />
          </div>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto mt-5">
          <div
            onClick={() =>
              setCategory({
                id: 0,
                name: "All books",
              })
            }
            className={`flex items-center justify-center px-3 py-1 rounded-full cursor-pointer ${
              category.id === 0
                ? "bg-[#416b49] text-white"
                : "bg-black bg-opacity-5"
            }`}
          >
            <span className="text-sm whitespace-nowrap">All books</span>
          </div>
          {categories.map((cate) => (
            <div
              key={cate.id}
              onClick={() => setCategory(cate)}
              className={`flex items-center justify-center px-3 py-1 rounded-full cursor-pointer ${
                category.id === cate.id
                  ? "bg-[#416b49] text-white"
                  : "bg-black bg-opacity-5"
              }`}
            >
              <span className="text-sm whitespace-nowrap">{cate.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <h2 className="relative text-xl font-jetbrains font-bold text-[#416b49] ps-[18px] before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[5px] before:bg-[#416b49]">
            {category.name}
          </h2>
          {books.length > 0 ? (
            <>
              <div className="grid grid-cols-2 gap-4 my-5">
                {books.map((anime) => (
                  <div
                    key={anime.id}
                    className="p-2 flex flex-col rounded-lg border border-[#c7c7c7]"
                  >
                    <div className="p-3">
                      <img
                        src={anime.imageUrl}
                        alt={anime.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <h4 className="text-sm">{anime.title}</h4>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-lg text-red-600">
                          {formatPrice(anime.price)}
                        </span>
                        <span className="text-sm text-gray-400">
                          {anime.publisher}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center my-10">
                <div className="flex flex-col items-center gap-5">
                  <CoffeeOutlined className="text-4xl text-[#416b49]" />
                  <p className="text-sm font-jetbrains">
                    You don't have this type of book!
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="p-2 pt-5 border-t border-[#c7c7c7]">
        <h2 className="text-xl text-center text-[#416b49] font-jetbrains font-bold mb-2">
          My book collection
        </h2>
        <p className="text-sm text-center text-[#b0b0b0]">
          Connect with me on social media so we can communicate and collaborate
          on deals.
        </p>
        <div className="mt-5 mb-10 flex items-center justify-center gap-5">
          <a
            href="mailto:phucnguyen09022003@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-3xl hover:text-[#416b49] hover:scale-125 transition duration-300"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
            </svg>
          </a>
          <a
            href="https://github.com/phucngdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-3xl hover:text-[#416b49] hover:scale-125 transition duration-300"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 496 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-3xl hover:text-[#416b49] hover:scale-125 transition duration-300"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/emkhonganhanh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-3xl hover:text-[#416b49] hover:scale-125 transition duration-300"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/_phucghethanh_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-3xl hover:text-[#416b49] hover:scale-125 transition duration-300"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
          <a
            href="tel:+84793395545"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-3xl hover:text-[#416b49] hover:scale-125 transition duration-300"
            tabIndex={0}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Books;
