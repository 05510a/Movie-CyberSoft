import Axios from "axios";
import * as yup from "yup";
export const signupUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("Không được bỏ trống tài khoản"),
  matKhau: yup.string().required("Không được bỏ trống mật khẩu"),
  hoTen: yup.string().required("Không được bỏ trống họ tên"),
  email: yup
    .string()
    .required("Không được bỏ trống email")
    .email("Email không hợp lệ"),
  soDt: yup
    .string()
    .required("Không được bỏ trống số điện thoại")
    .matches(/^[0-9]+$/),
});

class UserService {
  signUp(data) {
    return Axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data,
    });
  }
  logIn(user) {
    return Axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user,
    });
  }
}
export default UserService;
