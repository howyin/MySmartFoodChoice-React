import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { RiUser3Line } from "react-icons/ri";
import { getDatabase, ref, query, onValue } from "firebase/database";
import HomeLogo from '../assets/myfoodchoicelogo.png';
import { useNavigate } from "react-router-dom";

function UserHeader() {
  const [profilePicture, setProfilePicture] = useState("");
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem("uid");
  const navigate = useNavigate();

  useEffect(() => {
    const db = getDatabase();
    const userRef = query(ref(db, `User Profile/${userId}`));

    const unsubscribeUser = onValue(
      userRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          console.log(userData);
          setProfilePicture(userData.profileImageUrl);
          setLoading(false);
        } else {
          console.log("User not found");
          setLoading(false);
        }
      },
      (error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    );

    return () => unsubscribeUser();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="nav">
      <div className="header-content">
        <ul className="nav-links">
          <li>
            <Link to="/">
              <img src={HomeLogo} alt="Home" style={{ width: '50px', height: '50px' }} />
            </Link>
          </li>
          <li>
            <h1 className='title'>SmartFoodChoice</h1>
          </li>
          <li>
            <Link to="/RoyaltyPoints">Royalty points</Link>
          </li>
          <li>
            <Link to="/ReviewForm">Leave a review</Link>
          </li>
          <li>
            <Link to="/ContactUs">Contact Us</Link>
          </li>
          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>
        </ul>
      </div>
      <div className="login-section">
        <li className="avatar-dropdown">
          <Link to="#" className="avatar-icon">
            {loading ? (
              <p>Loading image...</p>
            ) : profilePicture ? (
              <img
                src={profilePicture}
                height={50}
                width={50}
                style={{ borderRadius: "50%" }}
                alt="Profile"
              />
            ) : (
              <RiUser3Line />
            )}
          </Link>
          <div className="dropdown-content">
            <Link to="#" onClick={handleLogout}>Logout</Link>
          </div>
        </li>
      </div>
    </nav>
  );
}

export default UserHeader;
