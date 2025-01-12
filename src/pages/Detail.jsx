import React, { useState } from "react";
import { useParams } from "react-router-dom";
import animes from "../data/anime";
import { toSlug } from "../utils/slug";
import { formatPrice } from "../utils/format";

const Detail = () => {
  const { slug } = useParams();

  const [book, setBook] = useState(() => {
    const bookDT = animes.find((b) => toSlug(b.title) === slug);
    return bookDT;
  });
  const [imageSelected, setImageSelected] = useState(book?.imageUrl);
  console.log("🚀 ~ const[book,setBook]=useState ~ book:", book);

  return (
    <>
      <div className="mt-4">
        <h1 className="text-xl">{book.title}</h1>
        <div className="w-full flex items-center justify-center h-[300px] mt-5">
          <img
            src={imageSelected}
            alt={book?.title}
            className="object-cover h-full"
          />
        </div>
        <div className="flex overflow-x-auto space-x-2 mt-5">
          {book.images.map((img) => (
            <div
              key={img}
              onClick={() => setImageSelected(img)}
              className="p-1 h-[80px] rounded-md border border-[#c7c7c7] flex-shrink-0"
            >
              <img
                src={img}
                alt={book?.title}
                className="object-cover h-full w-14"
              />
            </div>
          ))}
        </div>
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <p className="text-xl text-red-600">{formatPrice(book.price)}</p>
            <p className="text-sm">{book.publisher}</p>
          </div>
          <p className="text-sm">buyed: {book.purchaseDate}</p>
          <p className="text-sm mt-4">{book.description}</p>
        </div>
      </div>
    </>
  );
};

export default Detail;
