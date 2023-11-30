import React from "react";
import Header from "../home/Header";
import Footer from "../home/Footer";
import "../home/home.scss";
import "../register/register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";

function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email chưa đúng định dạng ")
        .required("Vui lòng điền đầy đủ thông tin"),
      password: Yup.string()
        .min(8, "Nhập nhiều hơn 8 kí tự")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]*$/,
          "Password phải chứa ít nhất một chữ hoa, số, kí tự đặc biệt và không có khoảng trắng "
        )
        .required("Vui lòng điền đầy đủ thông tin"),
    }),
    onSubmit: async (values) => {
      try {
        let url = await axios.get(
          `http://localhost:7000/users?email=${values.email}&password=${values.password}`
        );

        let result = url.data;

        if (result.length > 0) {
          if (result[0].status !== "blocked") {
            localStorage.setItem("userLogin", JSON.stringify(result[0]));
            if (result[0].role === "admin") {
              navigate("/admin");
            } else if (
              result[0].role === "regular" &&
              result[0].status !== "blocked"
            ) {
              navigate("/");
            }
          } else {
            alert("Tài khoản của bạn hiện tại đang bị khoá");
          }
        } else {
          // Sai email hoặc password
          alert("Email hoặc mật khẩu không đúng");
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <>
      <Header />

      <div className="myAccount">
        <div className="myAccount_login">
          <h2>Sign In or Create An Account</h2>
          <ul>
            <li>For faster checkout</li>
            <li>For easier order tracking</li>
            <li>To use saved addresses and payment types</li>
            <li>To access your Saved Items</li>
          </ul>
          <div className="login">
            <h3>Sign In</h3>
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="">Email Address</label>
              <input
                type="text"
                placeholder="Enter Email"
                id="name"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email && (
                <p style={{ color: "red" }}>{formik.errors.email}</p>
              )}
              <label htmlFor="">Password</label>
              <input
                type="text"
                placeholder="Enter Passwors"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.errors.password && formik.touched.password && (
                <p style={{ color: "red" }}>{formik.errors.password}</p>
              )}
              <br />
              <button type="submit">SIGN IN</button>
            </form>
            <br />
            <a href="">FORGOT YOUR PASSWORD?</a>
            <Link to="/register">CREATE AN ACCOUNT</Link>
          </div>
        </div>
        <div className="mayAccount_img">
          <img
            src="https://whitecompany.scene7.com/is/image/whitecompany/SIGN_IN_D?wid=500&hei=650"
            alt=""
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;
