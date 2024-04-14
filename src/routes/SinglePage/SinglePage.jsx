import bath from "../../assets/images/bath.png";
import bed from "../../assets/images/bed.png";
import message from "../../assets/images/chat.png";
import fee from "../../assets/images/fee.png";
import pet from "../../assets/images/pet.png";
import pin from "../../assets/images/pin.png";
import save from "../../assets/images/save.png";
import school from "../../assets/images/school.png";
import size from "../../assets/images/size.png";
import utility from "../../assets/images/utility.png";
import Map from "../../components/Map";
import Slider from "../../components/Slider";
import { singlePostData, userData } from "../../lib/dummydata";

function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src={pin} alt="img-pin" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">{singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="img-user" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src={utility} alt="img-utility" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src={pet} alt="img-pet" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src={fee} alt="img-fee" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src={size} alt="img-size" />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <img src={bed} alt="img-size" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src={bath} alt="img-size" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src={school} alt="img-school" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src={pet} alt="img-pet" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src={fee} alt="img-fee" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>250m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src={message} alt="img-message" />
              Send a Message
            </button>
            <button>
              <img src={save} alt="img-save" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
