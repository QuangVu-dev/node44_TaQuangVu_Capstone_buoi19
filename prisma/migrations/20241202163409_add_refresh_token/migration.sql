-- CreateTable
CREATE TABLE `BinhLuan` (
    `id` INTEGER NOT NULL,
    `ma_phong` INTEGER NULL,
    `ma_nguoi_binh_luan` INTEGER NULL,
    `ngay_binh_luan` DATE NULL,
    `noi_dung` VARCHAR(255) NULL,
    `sao_binh_luan` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DatPhong` (
    `id` INTEGER NOT NULL,
    `ma_phong` INTEGER NULL,
    `ngay_den` DATE NULL,
    `ngay_di` DATE NULL,
    `so_luong_khach` INTEGER NULL,
    `ma_nguoi_dat` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NguoiDung` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `pass_word` VARCHAR(255) NULL,
    `phone` VARCHAR(255) NULL,
    `birth_day` DATE NULL,
    `gender` VARCHAR(255) NULL,
    `role` VARCHAR(255) NULL,
    `refresh_token` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Phong` (
    `id` INTEGER NOT NULL,
    `ten_phong` VARCHAR(255) NULL,
    `khach` INTEGER NULL,
    `phong_ngu` INTEGER NULL,
    `giuong` INTEGER NULL,
    `phong_tam` INTEGER NULL,
    `mo_ta` VARCHAR(255) NULL,
    `gia_tien` INTEGER NULL,
    `may_giat` BOOLEAN NULL,
    `ban_la` BOOLEAN NULL,
    `tivi` BOOLEAN NULL,
    `dieu_hoa` BOOLEAN NULL,
    `wifi` BOOLEAN NULL,
    `bep` BOOLEAN NULL,
    `do_xe` BOOLEAN NULL,
    `ho_boi` BOOLEAN NULL,
    `ban_ui` BOOLEAN NULL,
    `hinh_anh` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ViTri` (
    `id` INTEGER NOT NULL,
    `ten_vi_tri` VARCHAR(255) NULL,
    `tinh_thanh` VARCHAR(255) NULL,
    `quoc_gia` INTEGER NULL,
    `hinh_anh` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
