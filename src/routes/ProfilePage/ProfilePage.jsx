import Chat from '../../components/Chat';
import List from '../../components/List';

function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Informtion</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar: <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750dpr=2" alt="user-img" />
            </span>
            <span>
              User: <b>Jhon Doe</b>
            </span>
            <span>
              E-mail: <b>johndoe@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My list</h1>
            <button>Create new post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
            <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
