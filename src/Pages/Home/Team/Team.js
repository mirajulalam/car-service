import React from 'react';
import image1 from '../../../assets/images/team/1.jpg';
import image2 from '../../../assets/images/team/2.jpg';
import image3 from '../../../assets/images/team/3.jpg';

const Team = () => {
    return (
        <div className='py-10'> 
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-[#ff3818]">Team</p>
                <h2 className="text-5xl font-semibold my-4">Meet Our Team</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image1} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h1 className='text-2xl  font-bold'>Car Engine plug</h1>
                <h3 className='font-semibold'>Engine Expert</h3>
            </div>
        </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image2} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h1 className='text-2xl  font-bold'>Car Engine plug</h1>
                <h3 className='font-semibold'>Engine Expert</h3>
            </div>
        </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image3} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h1 className='text-2xl  font-bold'>Car Engine plug</h1>
                <h3 className='font-semibold'>Engine Expert</h3>
            </div>
        </div>
            </div>
        </div>
    );
};

export default Team;