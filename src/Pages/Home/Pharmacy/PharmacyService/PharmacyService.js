import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import FilterMedicine from './FilterMedicine';
import PharmacySingleProduct from './PharmacySingleProduct';
import './Pharmacy.css'
 
const PharmacyService = () => {
  const location = useLocation();

  const [medicine, setMedicine] = useState([])
  const [filterMedicine, setFilterMedicine] = useState("");
  const [searchMedicine,setSearchMedicine] = useState("")
  // const [category, setCategory] = useState("");
  const [page,setPage] = useState(0)
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/medicine?category=${filterMedicine}&page=${page}`)
      .then(res => res.json())
      .then(data => {
        if(searchMedicine){
          const result = data.result?.result.filter(item => (item.name).toUpperCase().includes(searchMedicine.toUpperCase()))
          setMedicine(result);
        }
        else{
          setMedicine(data.result?.result);
        }
    
          
      })
      .catch(error => {})
  }, [filterMedicine,searchMedicine ]);
  const handlerMedicine= (e) => {
    setSearchMedicine(e.target.value)
  }

  return (
    <div className=' '>
      <div className="sidebar py-40">
     
        <div className='my-24'>
        <FilterMedicine   setFilterMedicine={setFilterMedicine} />
        </div>
      </div>
      
      <div className="content  ">
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </div>
          <input onChange={handlerMedicine} type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search location" required />
        </div>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-4 place-items-center my-40 '>
    
          {medicine.map((item, index) =>
            <PharmacySingleProduct key={item._id} item={item} />
          )}
          
        </div>
      </div>
    </div>
  );
};

export default PharmacyService;