import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _BinhLuan from  "./BinhLuan.js";
import _DatPhong from  "./DatPhong.js";
import _NguoiDung from  "./NguoiDung.js";
import _Phong from  "./Phong.js";
import _ViTri from  "./ViTri.js";

export default function initModels(sequelize) {
  const BinhLuan = _BinhLuan.init(sequelize, DataTypes);
  const DatPhong = _DatPhong.init(sequelize, DataTypes);
  const NguoiDung = _NguoiDung.init(sequelize, DataTypes);
  const Phong = _Phong.init(sequelize, DataTypes);
  const ViTri = _ViTri.init(sequelize, DataTypes);


  return {
    BinhLuan,
    DatPhong,
    NguoiDung,
    Phong,
    ViTri,
  };
}
