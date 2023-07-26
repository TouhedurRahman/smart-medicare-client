import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


const TopAppointment = () => {
	const [data, setData] = useState([]);
	const [chartWidth, setChartWidth] = useState(1350);

	useEffect(() => {
		axios.get("http://localhost:5000/api/v1/doctor")
			.then(response => {
				setData(response?.data?.result.slice(0, 10));
			})
			.catch(error => { })
	}, []);

	useEffect(() => {
		const handleResize = () => {
			const breakpoint = 768;
			const newWidth = window.innerWidth >= breakpoint ? 1350 : window.innerWidth - 40;
			setChartWidth(newWidth);
		};
		window.addEventListener('resize', handleResize);

		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className='container mx-auto mt-5'>
			<div>
				<h3 className='text-3xl text-center text-[#0E7490] font-bold m-5'>
					<i>
						Top Appointed Doctors_
					</i>
				</h3>
			</div>
			<div className='grid justify-center align-center'>
				<BarChart
					width={chartWidth}
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
					<Bar dataKey="viewCount" fill="#82ca9d" />
				</BarChart>
			</div>
		</div>
	);
};

export default TopAppointment;