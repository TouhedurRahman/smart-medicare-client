import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MedicineBrandService = () => {
  const { state, dispatch, user } = useContext(AuthContext);
  const { result } = useLoaderData();

  let [value, setValue] = useState("");
  let [medicine, setMedicine] = useState([]);

  useEffect(() => {
    if (value) {
      const filter = result.medicine.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
      setMedicine(filter);
    }
    else {
      setMedicine(result.medicine)
    }
  }, [value])

  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [city, setCity] = useState("")
  const [price, setPrice] = useState(0)

  const medicinePay = (item) => {
    axios.post(`http://localhost:5000/api/v1/medicine/init`, {
      phone: phone,
      category: item?.name,
      city: city,
      name: name,
      price: price,
      id: item?._id,
      email: user?.email
    })
      .then(res => {
        window.location.replace(res.data.result);
        // setAppointment(res.data.result)
      })
      .catch(error => {
        toast.error(<h1>error.message</h1>)
        // setError(error.message)
      })
  }

  return (
    <div className='my-24'>
      <div className='container mx-auto'>
        <div className='my-24'>
          <input type="text" onChange={(e) => setValue(e.target.value)} placeholder="Search necessery medicine" className="border border-purple-900" style={{ border: "1px indigo solid" }} />
        </div>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-4 place-items-center my-40 '>

          {
            medicine.map(item =>
              <div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
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
                    <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold w-full rounded mt-2 block " onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}>
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* <input type="checkbox" id="my-modal" className="modal-toggle" />
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
                </div> */}

                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                  <div className="modal-box">
                    <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="form-control">
                      <form className='mt-5'>
                        <input
                          type="tel"
                          placeholder='Phone Number'
                          onChange={(e) => setPhone(e.target.value)}
                          className="text-center rounded-xl"
                          required
                        />
                        <input
                          type="text" placeholder='Full Name'
                          onChange={(e) => setName(e.target.value)}
                          className="text-center rounded-xl"
                          required
                        />
                        <input
                          type="text"
                          placeholder='Current Address'
                          onChange={(e) => setCity(e.target.value)}
                          className="text-center rounded-xl"
                          required
                        />

                        <input
                          type="number"
                          placeholder='Enter Quantity'
                          min="1"
                          onChange={(e) => setPrice(e.target.value * item?.price)}
                          className="text-center rounded-xl"
                          required
                        />
                      </form>
                    </div>

                    <div className='text-center text-lg mt-5'>
                      <h1>Total Price ৳ {!price ? item?.price : price}/-</h1>
                    </div>

                    <div className="modal-action">
                      <label htmlFor="my-modal" className="btn rounded-xl w-full" onClick={() => medicinePay(item)}>Medicine Order</label>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default MedicineBrandService;