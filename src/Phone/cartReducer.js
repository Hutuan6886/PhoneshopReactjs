const stateGioHang = {
    gioHang: []
}

const cartReducer = (state = stateGioHang, action) => {
    switch (action.type) {
        case 'THEM_GIO_HANG': {     
            let index = state.gioHang.findIndex(spGH => spGH.maSP === action.spGioHang.maSP)
            if(index !== -1){
                state.gioHang[index].sl += 1;
            }
            else{
                state.gioHang.push(action.spGioHang);
            }
            state.gioHang = [...state.gioHang];
            return {...state}
        }



        case 'XOA_GIO_HANG': {
            let gioHangCapNhat = [...state.gioHang]
            let index = state.gioHang.findIndex(spGH => spGH.maSP === action.sanpham.maSP)
            
            if(index!==-1){
                gioHangCapNhat.splice(index,1);
            }

            state.gioHang = gioHangCapNhat;
            return {...state}
        }

        case 'TANG_GIAM_SO_LUONG': {
            let gioHangCapNhat = [...state.gioHang]
            let index = state.gioHang.findIndex(spGH => spGH.maSP === action.sanpham.maSP)
            if(index !== -1){
                gioHangCapNhat[index].sl += action.number;
                if(action.sanpham.sl < 1){
                    gioHangCapNhat.splice(index,1);
                }
            }
            console.log(gioHangCapNhat);
            state.gioHang = gioHangCapNhat;
            return {...state}
        }
        default: {
            return { ...state }
        }
    }
    
}

export default cartReducer;
