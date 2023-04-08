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
                <p>There are many benefits to undergoing a fluoride treatment. They include: Reducing cavities by eliminating bacteria that cause decay. It strengthens the enamel of developing teeth, making them better resistant to decay for their lifespan.</p>
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
                <p>A great dentist understands that a patient needs to feel in control of his or her treatment. Honesty and Compassion: A good dentist is also honest and compassionate. Dental problems can affect many areas of a person's life, and dentists need to be sensitive to the problems caused by poor dental health.</p>
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
                <p>Professional teeth whiteners are safe, effective, and done under the supervision of a dental professional. In most cases, it is worth the extra cost to visit the dentist to get long-lasting, safe results. Yes, teeth whitening is very safe when done correctly.</p>
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