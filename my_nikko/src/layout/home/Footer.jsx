import React from "react";
import "./home.scss";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiVisaFill } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer">
        <h3>Christmas last-order dates</h3>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <h3>Gift Cards</h3>
              <p>Last order date: Tuesday 19th December</p>
              <p>Latest delivery: Saturday 23rd Decembe</p>
              <a href="">SHOP GIFT CARDS</a>
            </div>
            <div className="col-3">
              <h3>Gift Box Service</h3>
              <p>Last order date: Tuesday 19th December</p>
              <p>Latest delivery: Saturday 23rd Decembe</p>
              <a href="">DISCOVER MORE</a>
            </div>
            <div className="col-3">
              <h3>Standard Delivery</h3>
              <p>Last order date: Tuesday 19th December</p>
              <p>Latest delivery: Saturday 23rd Decembe</p>
              <a href="">DISCOVER MORE</a>
            </div>
            <div className="col-3">
              <h3>Collection</h3>
              <p>Last order date: Tuesday 19th December</p>
              <p>Latest delivery: Saturday 23rd Decembe</p>
              <a href="">DISCOVER MORE</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer2">
        <div className="row">
          <div className="col-5">
            <p style={{ fontSize: "30px" }}>Don’t miss our latest updates</p>
            <p>Be the first to know about new products, events, and offers.</p>
          </div>
          <div className="col-7">
            <p style={{ fontSize: "20px" }}>Email Address</p>
            <input type="text" style={{ width: "70%", marginRight: "10px" }} />
            <button
              style={{
                backgroundColor: "white",
                padding: "3px",
                borderRadius: "10px",
              }}
            >
              SIGN UP
            </button>
            <p style={{ paddingTop: "10px" }}>
              By choosing to sign up, you will join our mailing list. You can
              opt out at any time.
            </p>
          </div>
        </div>
      </div>
      <div className="footer3">
        <div className="footer3_left">
          <h2 style={{ color: "rgb(198, 157, 157)" }}>NIKKO</h2>
          <p style={{ fontSize: "15px" }}>
            For nearly 30 years, we’ve believed in making the most of life’s
            simple pleasures. Principally in white, we create impeccably stylish
            pieces for your home, wardrobe and everyday life – designed to be
            loved and last.
          </p>
          <p>
            <FaInstagram /> <FaFacebook /> <IoLogoTiktok /> <FaPinterest />{" "}
            <FaTwitter /> <FaYoutube />
          </p>
        </div>

        <div className="container footer3_right">
          <div className="row">
            <div className="col-3">
              <p>Shopping Online</p>
              <a href="">Contact Us</a>
              <a href="">Delivery</a>
              <a href="">Christmas Delivery</a>
              <a href="">Returns</a>
              <a href="">Track My Order</a>
            </div>
            <div className="col-3">
              <p>About Us</p>
              <a href="">Contact Us</a>
              <a href="">Delivery</a>
              <a href="">Christmas Delivery</a>
              <a href="">Returns</a>
              <a href="">Track My Order</a>
            </div>
            <div className="col-3">
              <p>Simpler Shopping</p>
              <a href="">Contact Us</a>
              <a href="">Delivery</a>
              <a href="">Christmas Delivery</a>
              <a href="">Returns</a>
              <a href="">Track My Order</a>
            </div>
            <div className="col-3">
              <p>Our Stores</p>
              <a href="">Contact Us</a>
              <a href="">Delivery</a>
              <a href="">Christmas Delivery</a>
              <a href="">Returns</a>
              <a href="">Track My Order</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer4_legal">
        <div className="footer_legal_info">
          <a href="">Terms & ConditionsPrivacy </a>
          <a href="">PolicyAccessibility</a>
          <a href="">Accessibility</a>
          <p>© 2023 The White Company. All rights reserved</p>
        </div>
        <div className="footer_legal_icon">
          <p style={{ fontSize: "30px" }}>
            <RiVisaFill /> <FaCcPaypal /> <FaCcMastercard />
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
