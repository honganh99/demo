import React, { useEffect, useState } from "react";
import Header from "../home/Header";
import Footer from "../home/Footer";
import "./products.scss";
import { useNavigate, useParams } from "react-router-dom";
import apiProducts from "../../service/apiProducts";

function Products() {
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  const userId = userLogin ? userLogin.id : null;

  const navigate = useNavigate();

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const handleGetProduct = async () => {
    const info = await apiProducts.getProductDetails(id);
    setProduct(info.data);
  };

  useEffect(() => {
    handleGetProduct();
  }, []);

  const [user, setUser] = useState({});
  const [cartProduct, setCartProduct] = useState(user.cart || []);

  const loadUser = async () => {
    if (userId) {
      let result = await axios.get(`http://localhost:8000/users/${userId}`);
      const userData = result.data;
      setUser(userData);
      // Đảm bảo rằng bạn không ghi đè lên giỏ hàng cũ khi cập nhật state
      setCartProduct(userData.cart || []);
    }
  };
  useEffect(() => {
    loadUser();
  }, [userId]);

 



  return (
    <>
      <Header />
      <div className="main_product">
        <h2>Christmas</h2>
        <p style={{ paddingTop: "20px" }}>
          Wreath on the door, the rustle of new ribbons, discover our pieces
          made for magical moments, however you’re celebrating.
        </p>
        <input type="text" placeholder="Tìm kiếm sản phẩm" />
        <br />
        <a href="">GIFTS FOR HER</a>
        <a href="">GIFTS FOR HER</a>
        <a href="">GIFTS FOR HER</a>

        <div className="container products">
          <div className="row">
            <div className="col-4 img-product">
              <img src={product.src} alt="" />
              <p>{product.name}</p>
              <p>${product.price}</p>
              {/* <button onClick={() => addToCart()}>Add to Bag</button> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Products;
