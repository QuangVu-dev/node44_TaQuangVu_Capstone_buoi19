import {
  createRefToken,
  createRefTokenAsyncKey,
  createToken,
  createTokenAsyncKey,
} from "../config/jwt.js";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const model = initModels(sequelize);
const prisma = new PrismaClient();

const register = async (req, res, next) => {
  try {
    const { name, email, pass_word, phone, birth_day, gender, role } = req.body;
    console.log({ name, email, pass_word, phone, birth_day, gender, role });
    const userExist = await prisma.NguoiDung.findFirst({
      where: { email },
    });
    console.log({ userExist });
    if (userExist) {
      return res
        .status(400)
        .json({ message: `Tài khoản đã tồn tại`, data: null });
    }

    const userNew = await prisma.NguoiDung.create({
      data: {
        name: name,
        email,
        pass_word: bcrypt.hashSync(pass_word, 10),
        phone: phone,
        birth_day: isNaN(new Date(birth_day).getTime())
          ? null
          : new Date(birth_day),
        gender: gender,
        role: role,
      },
    });

    return res.status(200).json({
      message: "Đăng ký thành công",
      data: userNew,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Có lỗi xảy ra. Vui lòng thử lại sau.",
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    // b1: lấy email và pass_word từ body request
    // b2: check user thông qua email (get user từ db)
    //   b2.1: nếu không có user => ra error user not found
    //   b2.2: nếu có user => check tiếp pass_word
    //     b2.2.1: nếu password không trùng nhau => ra error password is wrong
    //     b2.2.2: nếu password trùng nhau => tạo access token
    let { email, pass_word } = req.body;
    let user = await prisma.NguoiDung.findFirst({
      where: { email },
    });
    if (!user) {
      return res.status(400).json({ message: "Email is wrong" });
    }
    let checkPass = bcrypt.compareSync(pass_word, user.pass_word);
    if (!checkPass) {
      return res.status(400).json({ message: "Password is wrong" });
    }

    let accessToken = createToken({ userId: user.id });
    console.log("Access Token:", accessToken);
    // tạo refresh token
    let refreshToken = createRefToken({ userId: user.id });
    // lưu refresh token vào database
    await prisma.NguoiDung.update({
      data: {
        refresh_token: refreshToken,
      },
      where: { id: Number(user.id) },
    });

    // lưu refresh token vào cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true, // cookie không thể truy cập được từ javascript để bảo mật
      secure: false, // dùng cho localhost, nếu chạy https thì phải set là true
      sameSite: "Lax", // đảm bảo cookie được gửi trong nhiều domain khác nhau
      maxAge: 7 * 24 * 60 * 60 * 1000, // thời gian tồn tại là 7 ngày
    });

    return res.status(200).json({
      message: "Login successfully",
      data: accessToken,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Có lỗi xảy ra. Vui lòng thử lại sau.",
      error: error.message,
    });
  }
};

export { register, login };
