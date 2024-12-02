import express from "express";
import userRoutes from "./NguoiDung.router.js";
import phongRoutes from "./Phong.router.js";
import authRoutes from "./auth.router.js";
import viTriRoutes from "./Vitri.router.js";
import datPhongRoutes from "./DatPhong.router.js";
import binhLuanRoutes from "./BinhLuan.router";

// tạo object router tổng
const rootRoutes = express.Router();

rootRoutes.use("/users", userRoutes);
rootRoutes.use("/dat-phong", phongRoutes);
rootRoutes.use("/auth", authRoutes);
rootRoutes.use("/vi-tri", viTriRoutes);
rootRoutes.use("/dat-phong", datPhongRoutes);
rootRoutes.use("/binh-luan", binhLuanRoutes);

// export rootRoutes cho index.js
export default rootRoutes;
