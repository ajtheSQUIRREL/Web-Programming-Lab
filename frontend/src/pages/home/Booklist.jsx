import React from "react";
import { getImgUrl } from "../../utils/getImgUrl";
import { useFetchAllBooksQuery } from "../../redux/features/books/booksApi";

const Booklist = () => {
  const { data: books = [] } = useFetchAllBooksQuery();

  return (
    <div className="py-10 px-4">
      <h2 className="text-3xl font-semibold mb-6">Book List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.length > 0 ? (
          books.map((book, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-md shadow-sm bg-gray-800 text-white flex flex-col items-center">
              {/* Display Book Image */}
              <div className="w-32 h-48 mb-4">
                {book.coverImage ? (
                  <img
                    src={getImgUrl(book.coverImage)}
                    alt={book.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-500 flex items-center justify-center rounded-md">
                    <p className="text-gray-200 text-sm">No Image</p>
                  </div>
                )}
              </div>

              {/* Display Book Details */}
              <h3 className="text-lg font-bold">{book.title}</h3>
              {book.author && (
                <p className="text-gray-300">Author: {book.author}</p>
              )}
              {book.newPrice ? (
                <p className="text-gray-300">Price: ${book.newPrice}</p>
              ) : (
                <p className="text-gray-300">Price: Not Available</p>
              )}
            </div>
          ))
        ) : (
          <p>No books available.</p>
        )}
      </div>
    </div>
  );
};

export default Booklist;
