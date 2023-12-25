import { useParams } from "react-router-dom";
import jsonData from "./books.json";
const Detail = () => {
  const { bookId } = useParams();

  // bookId menjadi tipe data number
  const bookIndex = parseInt(bookId);

  // Dapatkan buku berdasarkan bookid
  const book = jsonData.buku.find((id) => id.bookid === bookIndex);

  if (!book) {
    return <div className="NotFound">Book not found</div>;
  }

  return (
    <>
      <div className="container">
        <div className="boxDetail">
          <div className="cardDetail">
            <div className="title">Ditail Books</div>
            <img src={book.gambar} alt={book.judul} />
            <h1>{book.judul}</h1>
            <p>Penulis: {book.penulis}</p>
            <p>Tahun Terbit: {book.tahun_terbit}</p>
            <p className="sinops">Sinopsis : {book.sinopsis}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
