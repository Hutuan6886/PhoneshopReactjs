import React, { Component } from 'react'
import Cart from './Cart';
import CartList from './CartList';

import {connect} from 'react-redux';
class PhoneLayout extends Component {
    renderNumberCart = () => {
        return this.props.propGioHang.reduce((tongslsanpham, sanpham, index) => {
            return tongslsanpham += sanpham.sl;
        }, 0).toLocaleString()
    }


    render() {
        return (
            <div className='container-fluid'>
                <div>
                    <button style={{ backgroundColor: '#fff' }} data-toggle="modal" data-target="#modelId" className='m-3'>
                        <i style={{ fontSize: '20px' }} className="fa fa-shopping-cart p-1"></i>
                        ({this.renderNumberCart()})
                        Giỏ Hàng
                    </button>
                    {/* //todo: Cart */}
                    <Cart/>
                    {/* //todo: danh sách sản phẩm */}
                    <CartList/>
                </div>
                {/* //todo: thông tin sản phẩm */}
                <div className='thongtinsanpham mt-4'>
                    <div className='row'>
                        <div className='col-4 text-center'>
                            <h3>{this.props.propPhone.tenSP}</h3>
                            <img style={{ width: '100%' }} src={this.props.propPhone.hinhAnh} alt='img'></img>
                        </div>
                        <div className='col-8 text-center'>
                            <h3>Thông Số Kỹ Thuật</h3>
                            <div className='text-left'>
                                <div className='row'>
                                    <div className='col-3 font-weight-bold p-0'>
                                        <p className='border-top border-dark m-0 p-3'>Màn hình</p>
                                        <p className='border-top border-dark m-0 p-3'>Hệ điều hành</p>
                                        <p className='border-top border-dark m-0 p-3'>Camera trước</p>
                                        <p className='border-top border-dark m-0 p-3'>Camera sau</p>
                                        <p className='border-top border-dark m-0 p-3'>RAM</p>
                                        <p className='border-top border-dark m-0 p-3'>ROM</p>
                                    </div>
                                    <div className='col-9 p-0'>
                                        <p className='border-top border-dark m-0 p-3'>{this.props.propPhone.manHinh}</p>
                                        <p className='border-top border-dark m-0 p-3'>{this.props.propPhone.heDieuHanh}</p>
                                        <p className='border-top border-dark m-0 p-3'>{this.props.propPhone.cameraTruoc}</p>
                                        <p className='border-top border-dark m-0 p-3'>{this.props.propPhone.cameraSau}</p>
                                        <p className='border-top border-dark m-0 p-3'>{this.props.propPhone.ram}</p>
                                        <p className='border-top border-dark m-0 p-3'>{this.props.propPhone.rom}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToString = state => {
    return {
        propPhone: state.statePhone.phone,
        propGioHang: state.stateGioHang.gioHang
    }
}

export default connect(mapStateToString)(PhoneLayout)
