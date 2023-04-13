import React, { Component } from 'react'

import {connect} from 'react-redux';
class Cart extends Component {
  renderCart = () => {
    return this.props.propGioHang.map((item, index) => {
        return <tr key={index}>
            <td scope="row">{item.maSP}</td>
            <td>{item.tenSP}</td>
            <td >
                <img style={{ width: '50px' }} src={item.hinhAnh} alt='img'></img>
            </td>
            <td className='d-flex justfi-content-center align-items-center'>
                <button onClick={() => { this.props.tangGiamSL(item,-1) }} style={{ backgroundColor: '#fff' }}>
                    <i class="fa fa-minus-circle"></i>
                </button>
                {item.sl}
                <button onClick={() => { this.props.tangGiamSL(item,1) }} style={{ backgroundColor: '#fff' }}>
                    <i class="fa fa-plus-circle"></i>
                </button>
            </td>
            <td>{item.gia.toLocaleString()}</td>
            {/* //* toLocaleString(), dùng để hiển thị các dấu phẩy giữa các con số */}
            <td>{(item.gia * item.sl).toLocaleString()}</td>
            <td>
                <button onClick={() => { this.props.xoaGioHang(item) }} className='btn btn-danger'>Xóa</button>
            </td>
        </tr>
    })
}

renderTongTien = () => {
    return this.props.propGioHang.reduce((tongtien,sanpham,index) => {
        return tongtien += (sanpham.gia * sanpham.sl);
    },0).toLocaleString()
}

render() {
    return (
        <div>
            <div>
                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div style={{ minWidth: '1000px' }} className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Mã sản phẩm</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Hình ảnh</th>
                                            <th>SL</th>
                                            <th>Đơn giá</th>
                                            <th>Thành tiền</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderCart()}
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <th colspan="5" className='text-right'>Tổng Tiền</th>
                                            <td>
                                                {this.renderTongTien()}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                                <button type="button" className="btn btn-success">Tiếp theo</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

const mapStateToProp = state => {      
return { 
    propGioHang: state.stateGioHang.gioHang
}
}

const mapDispatchToProps = (dispatch) => {
return {
    xoaGioHang: (sanpham) => {
        let action = {
            type: 'XOA_GIO_HANG',
            sanpham
        }
        dispatch(action);
    },
    tangGiamSL: (sanpham,number) => {
        let action = {
            type: 'TANG_GIAM_SO_LUONG',
            sanpham,number
        }
        dispatch(action);
    }
}
}
export default connect(mapStateToProp, mapDispatchToProps)(Cart);
