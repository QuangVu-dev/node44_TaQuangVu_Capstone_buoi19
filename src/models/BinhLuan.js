import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class BinhLuan extends Model {
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
    ma_nguoi_binh_luan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ngay_binh_luan: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    noi_dung: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sao_binh_luan: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'BinhLuan',
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
