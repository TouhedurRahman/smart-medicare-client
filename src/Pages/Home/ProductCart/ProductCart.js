import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const ProductCart = () => {
    const {state,dispatch} = useContext(AuthContext);
    
    const [phone, setPhone] = useState("")
    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [price, setPrice] = useState(0)

    const medicinePay = item => {
        axios.post(`http://localhost:5000/api/v1/medicine/init`, {
            phone: phone,
            category: item?.name,
            city: city,
            name: name,
            price: price,
            id: item?._id
        })
            .then(res => {

                window.location.replace(res.data.result)
                // setAppointment(res.data.result)
            })
            .catch(error => {

                // setError(error.message)
            })
    }

    return (
        <div>
            <div className='grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-4 place-items-center my-40 '>
          
          {state?.cart.map((item, index) =>
          <div>   <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-52" src={item.imgUrl} alt={item.name} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{item.name}</div>
                    <p className="text-gray-700 text-base">{item.description.slice(0, 100)}</p>
                </div>
                <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        {item.price}
                    </span>

                    <label htmlFor="my-modal" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-1 btn">Medicine Order</label>
                  <button onClick={()=>dispatch({type:"REMOVE_TO_CART",payload:item})}>REMOVE FROM CART</button>
                </div>
            </div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">

                    <input type="tel" required placeholder='enter your phone number' onChange={(e) => setPhone(e.target.value)} />
                    <input type="text" required placeholder='enter your name ' onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder='enter your city ' onChange={(e) => setCity(e.target.value)} />

                    <input type="number" placeholder='enter your quantity' min="1" onChange={(e) => setPrice(e.target.value * item?.price)} />
                    <div className="modal-action">
                      
                            <button onClick={() => medicinePay(item)}>
                                Medicine Order</button>
                       
                    </div>
                    <h1>{!price ? item?.price : price}</h1>
                </div>
            </div></div>
             
          )}
        </div>
        </div>
    );
};

export default ProductCart;