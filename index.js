// Bài tập 1
const KHUVUC_A = "A";
const KHUVUC_B = "B";
const KHUVUC_C = "C";
const DOITUONG1 = "1";
const DOITUONG2 = "2";
const DOITUONG3 = "3";
function diemKhuVuc(khuVuc) {
  switch (khuVuc) {
    case KHUVUC_A: {
      return 2;
    }
    case KHUVUC_B: {
      return 1;
    }
    case KHUVUC_C: {
      return 0.5;
    }
  }
}

function diemDoiTuong(doiTuong) {
  switch (doiTuong) {
    case DOITUONG1: {
      return 2.5;
    }
    case DOITUONG2: {
      return 1.5;
    }
    case DOITUONG3: {
      return 1;
    }
  }
}

function tinhDiem(diem1, diem2, diem3) {
  var ketQua = 0;
  ketQua = diem1 + diem2 + diem3;
  return ketQua;
}

document.querySelector("#ketQua").onclick = function () {
  var diemChuan = document.getElementById("diemChuan").value * 1;
  var khuvuc = document.getElementById("khuVuc").value;
  var doiTuong = document.getElementById("doiTuong").value;
  var diemMonThu1 = document.getElementById("diemMonThu1").value * 1;
  var diemMonThu2 = document.getElementById("diemMonThu2").value * 1;
  var diemMonThu3 = document.getElementById("diemMonThu3").value * 1;
  var tongDiem =
    tinhDiem(diemMonThu1, diemMonThu2, diemMonThu3) +
    diemKhuVuc(khuvuc) +
    diemDoiTuong(doiTuong);
  if (tongDiem >= diemChuan) {
    document.getElementById(
      "xuatKetQua"
    ).innerHTML = `Bạn đã đậu. Tổng điểm: ${tongDiem}`;
  } else if (diemMonThu1 == 0 || diemMonThu2 == 0 || diemMonThu3 == 0) {
    document.getElementById(
      "xuatKetQua"
    ).innerHTML = `Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0`;
  } else {
    document.getElementById(
      "xuatKetQua"
    ).innerHTML = `Bạn đã rớt. Tổng điểm: ${tongDiem}`;
  }
};

// Bài tập 2
function giaTien50KwDau(soKw) {
  if (soKw <= 50) {
  }
  return 500;
}

function giaTienKwTu50Den100(soKw) {
  if (soKw > 50 && soKw <= 100) {
  }
  return 650;
}

function giaTienKwTu100Den200(soKw) {
  if (soKw > 100 && soKw <= 200) {
  }
  return 850;
}

function giaTienKwTu200Den350(soKw) {
  if (soKw > 200 && soKw <= 350) {
  }
  return 1100;
}

function giaTienKwTren350(soKw) {
  if (soKw > 350) {
  }
  return 1300;
}

document.querySelector("#tinhTienDien").onclick = function () {
  var hoTen = document.getElementById("hoTen").value;
  var soKw = document.getElementById("soKw").value * 1;
  var gia50KwDau = giaTien50KwDau(soKw);
  var giaKwTu50Den100 = giaTienKwTu50Den100(soKw);
  var giaKwTu100Den200 = giaTienKwTu100Den200(soKw);
  var giaKwTu200Den350 = giaTienKwTu200Den350(soKw);
  var giaKwTren350 = giaTienKwTren350(soKw);
  var tongTien = 0;
  if (soKw <= 50) {
    tongTien = soKw * gia50KwDau;
  } else if (soKw > 50 && soKw <= 100) {
    tongTien = 50 * gia50KwDau + (soKw - 50) * giaKwTu50Den100;
  } else if (soKw > 100 && soKw <= 200) {
    tongTien =
      50 * gia50KwDau + 50 * giaKwTu50Den100 + (soKw - 100) * giaKwTu100Den200;
  } else if (soKw > 200 && soKw <= 350) {
    tongTien =
      50 * gia50KwDau +
      50 * giaKwTu50Den100 +
      100 * giaKwTu100Den200 +
      (soKw - 200) * giaKwTu200Den350;
  } else {
    tongTien =
      50 * gia50KwDau +
      50 * giaKwTu50Den100 +
      100 * giaKwTu100Den200 +
      150 * giaKwTu200Den350 +
      (soKw - 350) * giaKwTren350;
  }
  document.getElementById(
    "xuatTienDien"
  ).innerHTML = `Họ tên: ${hoTen}; Tiền điện: ${Intl.NumberFormat("vn-Vn", {
    style: "currency",
    currency: "VND",
  }).format(tongTien)}`;
};

// Bài tập 3
document.querySelector("#tinhTienThue").onclick = function () {
  var hoVaTen = document.getElementById("hoVaTen").value;
  var thuNhap1Nam = Number(document.getElementById("thuNhap1Nam").value);
  var soNguoi = Number(document.getElementById("soNguoi").value);
  var thuNhapChiuThue = thuNhap1Nam - 4e6 - soNguoi * 1.6e6;
  if (thuNhapChiuThue <= 60e6) {
    var tienThue = (thuNhapChiuThue * 5) / 100;
  } else if (thuNhapChiuThue > 60e6 && thuNhapChiuThue <= 120e6) {
    var tienThue = (thuNhapChiuThue * 10) / 100;
  } else if (thuNhapChiuThue > 120e6 && thuNhapChiuThue <= 210e6) {
    var tienThue = (thuNhapChiuThue * 15) / 100;
  } else if (thuNhapChiuThue > 210e6 && thuNhapChiuThue <= 384e6) {
    var tienThue = (thuNhapChiuThue * 20) / 100;
  } else if (thuNhapChiuThue > 384e6 && thuNhapChiuThue <= 624e6) {
    var tienThue = (thuNhapChiuThue * 25) / 100;
  } else if (thuNhapChiuThue > 624e6 && thuNhapChiuThue <= 960e6) {
    var tienThue = (thuNhapChiuThue * 30) / 100;
  } else {
    var tienThue = (thuNhapChiuThue * 35) / 100;
  }
  document.getElementById(
    "xuatTienThue"
  ).innerHTML = `Họ tên: ${hoVaTen}; Tiền thuế thu nhập cá nhân: ${Intl.NumberFormat(
    "vn-Vn",
    { style: "currency", currency: "VND" }
  ).format(tienThue)}`;
};

// Bài tập 4
const DOANHNGHIEP = "doanhNghiep";
const NHADAN = "nhaDan";

function giaTienKetNoiCaoCap(loaiKhachHang) {
  switch (loaiKhachHang) {
    case DOANHNGHIEP: {
      return 50;
    }
    case NHADAN: {
      return 7.5;
    }
  }
}

function giaTienPhiCoBan(loaiKhachHang) {
  switch (loaiKhachHang) {
    case DOANHNGHIEP: {
      return 75;
    }
    case NHADAN: {
      return 20.5;
    }
  }
}

function giaTienXuLyHoaDon(loaiKhachHang) {
  switch (loaiKhachHang) {
    case DOANHNGHIEP: {
      return 15;
    }
    case NHADAN: {
      return 4.5;
    }
  }
}

document.getElementById("soKetNoi").style.display = "none";
function myFunction(divId, element) {
  document.getElementById(divId).style.display =
    element.value == "doanhNghiep" ? "block" : "none";
}

document.getElementById("btnTinhTienCap").onclick = function () {
  var maKhachHang = document.getElementById("maKhachHang").value;
  var loaiKhachHang = document.getElementById("loaiKhachHang").value;
  var soKetNoi = document.getElementById("soKetNoi").value * 1;
  var soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;
  var tienKetNoiCaoCap = giaTienKetNoiCaoCap(loaiKhachHang);
  var tienPhiCoBan = giaTienPhiCoBan(loaiKhachHang);
  var tienXuLyHoaDon = giaTienXuLyHoaDon(loaiKhachHang);
  if (loaiKhachHang == DOANHNGHIEP && soKetNoi <= 10) {
    var tongTienCap =
      tienPhiCoBan + tienXuLyHoaDon + soKenhCaoCap * tienKetNoiCaoCap;
  } else if (loaiKhachHang == DOANHNGHIEP && soKetNoi > 10) {
    var tongTienCap =
      tienPhiCoBan +
      (soKetNoi - 10) * 5 +
      tienXuLyHoaDon +
      soKenhCaoCap * tienKetNoiCaoCap;
  } else {
    var tongTienCap =
      tienPhiCoBan + tienXuLyHoaDon + soKenhCaoCap * tienKetNoiCaoCap;
  }
  document.getElementById(
    "xuatTienCap"
  ).innerHTML = `Mã khách hàng: ${maKhachHang}; Tiền cáp: ${Intl.NumberFormat(
    "en-US",
    { style: "currency", currency: "USD" }
  ).format(tongTienCap)}`;
};
