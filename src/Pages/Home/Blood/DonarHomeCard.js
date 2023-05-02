import React from 'react';

const DonarHomeCard = ({ donar }) => {
    const { firstName, lastName, bloodGroup, gender, status, _id, file, phone, location } = donar;

    return (
        <div className="rounded shadow-lg">
            <div className="shadow-xl">
                <figure className="grid justify-center content-center px-10 pt-10">
                    <img src={file} alt="Blood_Donar" className="rounded-xl" style={{ height: "200px", width: "200px" }} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{firstName} {lastName}</h2>
                    <div className='flex text-center'>
                        <p>
                            {
                                gender === 'male' ? "Male" : "Female"
                            }
                        </p>
                        <p className='ml-3 mr-3'> || </p>
                        <p>{phone}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>{location}</p>
                        <p>{bloodGroup}</p>
                    </div>
                    <p>
                        {
                            status === 'active'
                                ?
                                <span className='text-[#00A65E]'>Ready for donate blood</span>
                                :
                                <span className='text-[red]'>I donate blood few months ago</span>
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DonarHomeCard;