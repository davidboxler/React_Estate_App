import SearchBar from "../../components/SearchBar";

import "./HomePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            ipsam adipisci ipsum nesciunt quidem esse mollitia porro, minima
            voluptas dolores aliquam, ab officiis blanditiis tenetur suscipit
            beatae similique officia alias?
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>743</h1>
              <h2>fdjdjfdj</h2>
            </div>
            <div className="box">
              <h1>743</h1>
              <h2>fdjdjfdj</h2>
            </div>
            <div className="box">
              <h1>743</h1>
              <h2>fdjdjfdj</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
