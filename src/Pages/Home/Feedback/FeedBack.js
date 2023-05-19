import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { BiSend } from 'react-icons/bi';
import Rating from 'react-rating';
import './feebac.css';
import quote from '../../../assets/quote.svg';

const FeedBack = () => {
    const [review, setReview] = useState([]);
    const [value, setValue] = React.useState(1);
    const [toggler, setToggler] = useState(null);
    const [upValue, setUpValue] = useState("")
    const reviews = useRef();
    const { user, token } = useContext(AuthContext)

    let config = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    // giving review from users 
    const onHandle = (e) => {
        const addReview = reviews.current.value;
        const confirm = window.confirm("are you sure to give review this system");

        if (confirm && value) {
            axios.post('http://localhost:5000/api/v1/review', {
                comment: addReview,
                rating: value,
                name: user?.displayName
            })
                .then((response) => {
                    if (!response?.data?.error) {
                        const addReviewData = [{ comment: addReview, rating: value, name: user?.displayName }, ...review]
                        setReview(addReviewData)
                    }

                })
                .catch(error => {

                })
        }
        reviews.current.value = ""
        e.preventDefault()
    }
    // getting all review 
    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/review')
            .then((response) => {
                setReview(response.data.data)
            })
            .catch(error => {

            })
    }, []);

    // delete your review 
    /* const deleteReview = (id) => {
        axios.delete(`http://localhost:5000/api/v1/review/${id}`)
            .then((response) => {
                const filter = review.filter(item => item._id !== id)
                setReview(filter)
            })
            .catch(error => {

            })
    } */
    // update review 
    const updateReview = (id, email) => {

        axios.patch(`http://localhost:5000/api/v1/review/${id}`, { comment: upValue, email: email })
            .then((response) => {

            })
            .catch(error => {

            })
        setToggler(null)
        window.location.reload()
        //  e.preventDefault(); 
    }
    const onChangeHandler = (e) => {
        setUpValue(e.target.value)
    }

    return (
        <div className='container mx-auto'>
            <div>
                <div className="bg-white p-6 rounded-lg">
                    <div>
                        <h3 className='text-3xl text-center text-[#0E7490] font-bold mb-5'>
                            <i>
                                Leave Feedback_
                            </i>
                        </h3>
                    </div>
                    <form onSubmit={onHandle}>
                        <div className='bg-[#D3D3D3] text-center m-3 p-5 rounded-2xl'>
                            <Rating
                                emptySymbol="fa-regular fa-star fa-2x"
                                fullSymbol="fa fa-star fa-2x"
                                className='text-yellow-600'
                                initialRating={value}
                                onChange={(e) => setValue(e)}
                            />
                        </div>
                        <div className='bg-[#F7E0B8] text-center m-3 p-5 rounded'>
                            <textarea
                                className="bg-gray-200 border border-gray-400 p-2 w-full"
                                placeholder="Enter your feedback here..."
                                ref={reviews}
                            />
                        </div>
                        <div className='text-center'>
                            <button
                                className="bg-[#0E7490] text-white p-2 mt-4 hover:bg-blue-600 rounded-lg px-10"
                                type="submit"
                            >
                                <span className='flex flex-center align-center'><span>Send </span> <BiSend className='mt-1 ml-2' /> </span>
                            </button>
                        </div>
                    </form>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <h3 className='text-4xl text-[#0E7490] font-bold mb-5'>
                            <i>
                                What our patients says_
                            </i>
                        </h3>
                    </div>
                    <figure>
                        <img className='w-24 lg:w-48 h-20' src={quote} alt='Loading...'></img>
                    </figure>
                </div>
                <div className='show-review-sec  '>
                    {
                        review.map(item => <div key={item._id}>
                            {
                                toggler !== item._id
                                    ?
                                    <div className='show-review'>
                                        <h4> {item?.name}</h4>
                                        <h6> {item.comment}  </h6>
                                        <Rating
                                            className='text-yellow-600'
                                            emptySymbol="fa-regular fa-star fa-2x"
                                            fullSymbol="fa fa-star fa-2x"

                                            initialRating={item.rating}
                                            readonly
                                        />
                                        {item.email === user.email && <div>
                                            {/* <button className='bg-danger text-light  ms-3' onClick={() => deleteReview(item._id)}>Delete</button>
                                    <button className='bg-danger text-light  ms-3' onClick={() => setToggler(item._id)}>Edit</button> */}
                                        </div>}
                                    </div>
                                    :
                                    <div>
                                        <div className='feedback-sec'>
                                            <input value={upValue || item.comment} onChange={value => { onChangeHandler(value) }} placeholder='write comment'></input>
                                            <button className='bg-black' type='submit' onClick={(e) => updateReview(item._id, item.email)}>Send <BiSend /></button>
                                            <button className='bg-primary text-light' onClick={() => setToggler(null)}>cencel</button>
                                        </div>
                                    </div>
                            }
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FeedBack;