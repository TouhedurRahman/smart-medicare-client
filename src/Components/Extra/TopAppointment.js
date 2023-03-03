import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const TopAppointment = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/doctor")
      .then(response => {
       
        setData(response?.data?.result.slice(0,10))
      })
      .catch(error => {
     
      })
  }, [])
 
  return (
    <div className='container mx-auto'>
      <div className='grid justify-center align-center'>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="viewCount" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default TopAppointment;