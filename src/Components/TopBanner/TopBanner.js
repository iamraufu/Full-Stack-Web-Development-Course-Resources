import React from 'react';
import './TopBanner.css';
import topBannerData from '../../data/topBannerData';
import topImage from '../../images/top.png'

const TopBanner = () => {
    return (
        <div className="bg-brand">
            <div className='container'>
                <img className='mx-auto d-block py-3' src={topImage} alt="top banner" />

                <div className="row">
                    {
                        topBannerData.map(data =>
                            <div key={data.id} style={{ borderRadius: '50px' }} className="col m-2 bg-white">
                                <img src={data.image} width='50' className='img-fluid py-1' alt={data.name} />
                                <a href={data.link} className='text-decoration-none text-dark fw-bold ps-2'>{data.name}</a>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
};

export default TopBanner;