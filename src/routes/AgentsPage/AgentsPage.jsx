import bg from "../../assets/images/bg.png";

function AgentsPage() {
  return (
    <div className="agentsPage">
      <div className="textContainer">
        <div className="wrapper">
          <h1>Agents</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            ipsam adipisci ipsum nesciunt quidem esse mollitia porro, minima
            voluptas dolores aliquam, ab officiis blanditiis tenetur suscipit
            beatae similique officia alias?
          </p>
          <div className="box-container container">
            <div className="box">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="foto de usuario"
              />
              <h3>Clara</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam quas optio dolore et, illum est ipsa doloribus culpa
                hic enim nihil quasi architecto possimus rem, sapiente harum
                aut! Recusandae, deserunt?
              </p>
            </div>
            <div className="box">
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="foto de usuario"
              />
              <h3>Samuel</h3>
               <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam quas optio dolore et, illum est ipsa doloribus culpa
                hic enim nihil quasi architecto possimus rem, sapiente harum
                aut! Recusandae, deserunt?
              </p>
            </div>
            <div className="box">
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="foto de usuario"
              />
              <h3>Nathan</h3>
               <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam quas optio dolore et, illum est ipsa doloribus culpa
                hic enim nihil quasi architecto possimus rem, sapiente harum
                aut! Recusandae, deserunt?
              </p>
            </div>
            <div className="box">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="foto de usuario"
              />
              <h3>Amelia</h3>
               <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam quas optio dolore et, illum est ipsa doloribus culpa
                hic enim nihil quasi architecto possimus rem, sapiente harum
                aut! Recusandae, deserunt?
              </p>
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

export default AgentsPage;
