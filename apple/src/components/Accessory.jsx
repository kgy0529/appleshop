import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Accessory = () => {
    return (
        <div className='accessory'>
            <h2><span>액세서리.</span> 즐겨 사용하는 기기들과 완벽하게 페어링되는 여러 가지 필수품.</h2>
            <div className="accessorySwiper">
                 <Swiper
                spaceBetween={0}
                slidesPerView={5.4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='accessorysp'
                >
                    <SwiperSlide className='accBox1'>
                        <div className="accBox accBox2 ">
                            <h2>새로움을 입다.</h2>
                            <p>전에 없던 색상으로 찾아온 수많은 액세서리.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="accBox">
                            <div className='colorBox'>
                                <img src={process.env.PUBLIC_URL+'img/MWMR3ref_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/MWMP3ref_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/MWND3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/MT0N3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/MT0Q3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/MWN93_SW_COLOR.jpg'} width="12" alt="" />
                            </div>
                            <div className='infoBox'>
                                <p>New</p>
                                <h3>MagSafe형 iPhone 15 실리콘 케이스 - 라이트 블루</h3>
                                <span className='price'>₩69,000</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="accBox">
                            <div className='colorBox'>
                                <img src={process.env.PUBLIC_URL+'img/HRD32_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/HRCZ2_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/HRD72_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/HRCU2_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/HRDT2_SW_COLOR.jpg'} width="12" alt="" />
                            </div>
                            <div className='infoBox'>
                                <p>&nbsp;</p>
                                <h3>MagSafe형 iPhone 15 실리콘 케이스 - 라이트 블루</h3>
                                <span className='price'>₩69,000</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="accBox">
                            <div className='colorBox'>
                                <img src={process.env.PUBLIC_URL+'img/MW4M3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/MW4L3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/MT583_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/MT533_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/MT553_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/MT563_SW_COLOR.jpg'} width="12" alt="" />
                            </div>
                            <div className='infoBox'>
                                <p>New</p>
                                <h3>MagSafe형 iPhone 15 실리콘 케이스 - 라이트 블루</h3>
                                <span className='price'>₩69,000</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="accBox">
                            <div className='colorBox'>
                                <img src={process.env.PUBLIC_URL+'img/MWMR3ref_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/MWMP3ref_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/MWND3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/MT0N3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/MT373ref_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/MT2R3ref_SW_COLOR.jpg'} width="12" alt="" />
                            </div>
                            <div className='infoBox'>
                                <p>New</p>
                                <h3>MagSafe형 iPhone 15 실리콘 케이스 - 라이트 블루</h3>
                                <span className='price'>₩69,000</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="accBox">
                            <div className='colorBox'>
                                <img src={process.env.PUBLIC_URL+'img/MT2J3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/MT273_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/MT2L3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/MT4Q3_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/MT4U3_SW_COLOR.jpg'} width="12" alt="" />
                            </div>
                            <div className='infoBox'>
                                <p>&nbsp;</p>
                                <h3>MagSafe형 iPhone 15 실리콘 케이스 - 라이트 블루</h3>
                                <span className='price'>₩69,000</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="accBox">
                            <div className='colorBox'>
                                <img src={process.env.PUBLIC_URL+'img/HRD32_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/HRCZ2_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/HRD72_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/HRCU2_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/HRDT2_SW_COLOR.jpg'} width="12" alt="" />
                            </div>
                            <div className='infoBox'>
                                <p>&nbsp;</p>
                                <h3>MagSafe형 iPhone 15 실리콘 케이스 - 라이트 블루</h3>
                                <span className='price'>₩69,000</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="accBox">
                            <div className='colorBox'>
                                <img src={process.env.PUBLIC_URL+'img/HRD32_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/HRCZ2_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/HRD72_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/HRCU2_SW_COLOR.jpg'} width="12" alt="" />
                                <img src={process.env.PUBLIC_URL+'img/HRDT2_SW_COLOR.jpg'} width="12" alt="" />
                            </div>
                            <div className='infoBox'>
                                <p>&nbsp;</p>
                                <h3>MagSafe형 iPhone 15 실리콘 케이스 - 라이트 블루</h3>
                                <span className='price'>₩69,000</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='accBox1'>
                        <div className="accBox accBox2"></div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Accessory;