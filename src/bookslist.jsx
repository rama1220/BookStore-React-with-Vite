import { useState, useEffect } from "react";
import jsonData from "./books.json";
import { Link } from "react-router-dom";

const Booklist = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData.buku);
  }, []);
  return (
    <>
      <div className="container">
        <div className="center-box">
          <h1 className="title">Your List</h1>
          <div className="card-container">
            {data.map((book) => (
              <div key={book.bookid} className="cardBox">
                <h2>{book.judul}</h2>
                <p>Penulis: {book.penulis}</p>
                <p>Tahun Terbit: {book.tahun_terbit}</p>
                <img src={book.gambar} alt={book.judul} className="book-image" />
                <button className="btn-det">
                  <Link to={`detail/${book.bookid}`} className="detail-btn">
                    <h2>Detail</h2>
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Booklist;
