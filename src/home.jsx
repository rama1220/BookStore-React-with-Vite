import peak from "./assets/images/peaky.jpg";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="side">
          <div className="inside">
            <div className="kiri">
              <h2>Welcome to the Bookstore</h2>
              <p>
                the best place to explore the world of books! We invite you to discover the magic of books from various genres and eras. Welcome your book adventure to the Bookstore! Here, we present a collection of books that amaze,
                inspire and entertain.
              </p>
            </div>
            <div className="kanan">
              <img src={peak} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
