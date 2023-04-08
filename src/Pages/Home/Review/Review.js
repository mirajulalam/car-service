import React from 'react';
import people1 from "../../../assets/images/review/people1.png";
import people2 from "../../../assets/images/review/people2.png";
import people3 from "../../../assets/images/review/people3.png";

const Review = () => {
    return (
        <div className='py-10'>
            <h1 className='text-center text-4xl font-bold text-[#ff3818] mb-8'>User Reviews</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-20'>
            <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000" className="card lg:mx-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-[#ff3818]">Rating: 5</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <div className="flex items-center mt-5">
                <div className="avatar">
                        <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 mr-5">
                            <img src={people1} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>Marry</h4>
                        <p>caloponiya</p>
                    </div>
                </div>
            </div>
        </div>
            <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000" className="card lg:mx-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-[#ff3818]">Rating: 4</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <div className="flex items-center mt-5">
                <div className="avatar">
                        <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 mr-5">
                            <img src={people2} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>Winson Herry</h4>
                        <p>London</p>
                    </div>
                </div>
            </div>
        </div>
            <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000" className="card lg:mx-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-[#ff3818]">Rating: 3</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <div className="flex items-center mt-5">
                <div className="avatar">
                        <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 mr-5">
                            <img src={people3} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>Jennirper</h4>
                        <p>caliponiya</p>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
    );
};

export default Review;