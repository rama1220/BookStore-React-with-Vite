import harry from "./assets/images/harry.jpg";
const About = () => {
  return (
    <>
      <div className="container  con-abt">
        <div className="about">
          <div className="inside abt">
            <img src={harry} alt="" />
            <p>
              Welcome to Book Store - A World of Literacy At Book Store, we believe that the greatest beauty and power lies in neatly bound pages and amazing stories. We are a community of book lovers committed to bringing together people
              who understand that every book is a door to a new adventure.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
