import React from "react";
import "./home.scss";
import { BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("userLogin");
    navigate("/login");
  };
  return (
    <>
      <h1>NIKKO</h1>
      <div className="headerPage">
        <div className="navMenu">
          <Link to="/">Home</Link>
          <Link to="/products">Chrismas</Link>
          <a href="">Bedroom</a>
          <a href="">Clothing</a>
          <a href="">Candle & Fragrance</a>
          <a href="">Beauty & Spa</a>
        </div>
        <div className="navCart">
          {userLogin === null ? (
            <Link to="/login">
              <AiOutlineUser />
            </Link>
          ) : (
            <span>
              <span>{userLogin.username}</span>
              <button
                style={{
                  backgroundColor: " rgb(198, 157, 157)",
                  border: "none",
                  paddingLeft: "20px",
                }}
                onClick={handleLogOut}
              >
                Logout
              </button>
            </span>
          )}

          <a href="">
            <BsBag />
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
