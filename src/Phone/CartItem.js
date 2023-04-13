import React, { Component } from 'react'

import { connect } from 'react-redux';
class CartItem extends Component {
    render() {
        let { propItem } = this.props;

        return (
            <div style={{ width: '350px' }} className='container-fluid'>
                <div className="card text-left">
                    <img className="card-img-top" src={propItem.hinhAnh} alt='img' />
                    <div className="card-body">
                        <h4 className="card-title">{propItem.tenSP}</h4>
                        <div className='d-flex justify-content-left'>
                            <button onClick={() => { this.props.xemChiTiet(propItem) }} className='bg-info text-light p-2 rounded-lg'>Xem chi tiết</button>
                            <button onClick={() => { this.props.themGioHang(propItem) }} className='bg-success text-light p-2 rounded-lg ml-3'>Thêm giỏ hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        themGioHang: (sanpham) => {
            let spGioHang = {
                maSP: sanpham.maSP,
                tenSP: sanpham.tenSP,
                hinhAnh: sanpham.hinhAnh,
                sl: 1,
                gia: sanpham.giaBan,
            }

            let action = {
                type: 'THEM_GIO_HANG', 
                spGioHang 

            }
            dispatch(action);

        },
        xemChiTiet: (sanpham) => {
            let action = {
                type: 'XEM_CHI_TIET',
                sanpham
            }
            dispatch(action);
        }
    }
}
export default connect(null, mapDispatchToProps)(CartItem)
