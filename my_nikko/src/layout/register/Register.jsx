import React, { useEffect, useState } from "react";
import Header from "../home/Header";
import Footer from "../home/Footer";
import "./register.scss";
import axios from "axios";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function Register() {
  const [dataUser, setDataUser] = useState([]);
  const loadUser = async () => {
    let result = await axios.get("http://localhost:8000/users");
    setDataUser(result);
  };
  useEffect(() => {
    loadUser();
  }, []);

  const [emailError, setEmailError] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      phonenumber: "",
      email: "",
      password: "",
      role: "regular",
      status: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(5, "Nhập nhiều hơn 5 kí tự")
        .max(25, "Không vượt quá 25 kí tự")
        .required("không được để trống"),
      phonenumber: Yup.string().required("không được để trống"),
      email: Yup.string()
        .email("email chưa đúng định dạng")
        .required("không được để trống"),

      password: Yup.string()
        .min(8, "Nhập nhiều hơn 8 kí tự")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]*$/,
          "Password phải chứa ít nhất một chữ hoa, số, kí tự đặc biệt và không có khoảng trắng "
        )
        .required("không được để trống"),
    }),

    onSubmit: async (values) => {
      const emailExist = dataUser.data.some(
        (user) => user.email === values.email
      );
        if (emailExist) {
        setEmailError(true);
      } else {
        await axios.post("http://localhost:8000/users", values);
        toast.success("Đăng kí thành công");
        navigate("/login");
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
          <div className="register">
            <h3>CREATE ACCOUNT</h3>
            <form onSubmit={formik.handleSubmit}>
              <label>User Name</label>
              <input
                type="text"
                placeholder="Enter Username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              {formik.errors.username && formik.touched.username && (
                <p style={{ color: "red" }}>{formik.errors.username}</p>
              )}
              <label>Email Address</label>
              <input
                type="text"
                placeholder="Enter Email Address"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />

              {formik.errors.email && formik.touched.email && (
                <p style={{ color: "red" }}>{formik.errors.email}</p>
              )}
              {emailError && (
                <p style={{ color: "red" }}>Email đã có người sử dụng</p>
              )}
              <label>Password</label>
              <input
                type="taxt"
                placeholder="Enter Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />

              {formik.errors.password && formik.touched.password && (
                <p style={{ color: "red" }}>{formik.errors.password}</p>
              )}
              <br />
              <button type="submit">CREATE ACCOUNT</button>
            </form>
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

export default Register;
