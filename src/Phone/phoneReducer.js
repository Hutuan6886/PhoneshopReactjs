const statePhone = {
    phone: {
        maSP: 1,
        tenSP: "VinSmart Live",
        manHinh: "AMOLED, 6.2, Full HD+",
        heDieuHanh: "Android 9.0 (Pie)",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 5700000,
        hinhAnh: "./img/imgBaitapPhone/vsphone.jpg"
    }
}

const phoneReducer = (state = statePhone, action) => {
    switch (action.type) {
        case 'XEM_CHI_TIET': {
            state.phone = action.sanpham;
        }
        default: {
            return { ...state }
        }
    }
}

export default phoneReducer;