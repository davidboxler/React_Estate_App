import bg from "../../assets/images/bg.png";

function AboutPage() {
    return (
        <div className="homePage">
          <div className="textContainer">
            <div className="wrapper">
              <h1>About</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
                ipsam adipisci ipsum nesciunt quidem esse mollitia porro, minima
                voluptas dolores aliquam, ab officiis blanditiis tenetur suscipit
                beatae similique officia alias?
              </p>
              <div className="boxes_about">
                <div className="box">
                  <h1>16+</h1>
                  <h2>Years of Experience</h2>
                </div>
                <div className="box">
                  <h1>200</h1>
                  <h2>Award Gained</h2>
                </div>
                <div className="box">
                  <h1>2000+</h1>
                  <h2>Property Ready</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="imgContainer">
            <img src={bg} alt="img-bg" />
          </div>
        </div>
    );
}

export default AboutPage;