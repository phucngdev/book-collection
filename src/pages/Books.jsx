import React, { useEffect, useState } from "react";
import { formatPrice } from "../utils/format";
import { CoffeeOutlined } from "@ant-design/icons";
import categories from "../data/categories";
import animes from "../data/anime";
import { useNavigate } from "react-router-dom";
import { toSlug } from "../utils/slug";

const Books = () => {
  const navigate = useNavigate();

  const [books, setBooks] = useState(() => {
    return animes;
  });

  const [category, setCategory] = useState({
    id: 0,
    name: "All books",
  });

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

  const handleClick = (book) => {
    const slugTitle = toSlug(book.title);
    navigate(`/${slugTitle}`);
  };

  return (
    <>
      <div className="">
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
              onClick={() => {
                setCategory(cate);
              }}
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
                    onClick={() => handleClick(anime)}
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
    </>
  );
};

export default Books;
