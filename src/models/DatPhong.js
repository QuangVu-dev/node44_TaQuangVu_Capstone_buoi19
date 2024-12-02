import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class DatPhong extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ma_phong: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ngay_den: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ngay_di: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    so_luong_khach: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ma_nguoi_dat: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DatPhong',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
