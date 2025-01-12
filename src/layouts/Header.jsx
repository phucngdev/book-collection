import React, { useEffect, useState } from "react";
import { formatDate } from "../utils/format";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Modal } from "antd";
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
const Header = () => {
  const [search, setSearch] = useState("");
  const [listSearch, setListSearch] = useState([]);
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
                handleClick(book);
                setIsModalOpen(false);
                setSearch("");
              }}
            >
              <img src={book.imageUrl} alt={book.title} className="w-10 " />
              {book.title}
            </div>
          ))}
      </Modal>
      <header className="flex items-center justify-between">
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
      </header>
    </>
  );
};

export default Header;
