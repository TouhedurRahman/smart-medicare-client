import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';

const EditDoctor = () => {
	const { id } = useParams();
	const [singleDoctor, setSingleDoctor] = useState({});

	const onSubmit = e => {
		axios.patch(`http://localhost:5000/api/v1/doctor/${id}`, singleDoctor)
			.then(response => {
				setSingleDoctor(response?.data?.result);
			})
			.catch(error => { })
		e.preventDefault()
	};

	useEffect(() => {
		axios.get(`http://localhost:5000/api/v1/doctor/${id}`)
			.then(response => {
				setSingleDoctor(response?.data?.result);
			})
			.catch(error => { })
	}, [id])

	const onChangeName = e => {
		setSingleDoctor({ name: e.target.value, chamber: singleDoctor?.chamber, fee: singleDoctor?.fee })
	}
	const onChangeChamber = e => {
		setSingleDoctor({ name: singleDoctor?.name, chamber: e.target.value, fee: singleDoctor?.fee })
	}
	const onChangePrice = e => {
		setSingleDoctor({ name: singleDoctor?.name, chamber: singleDoctor?.chamber, fee: e.target.value })
	}

	return (
		<div className='container mx-auto'>
			<div>
				<div>
					<h3 className='text-3xl text-center text-[#0E7490] font-bold m-5'>
						<i>
							Update Doctor_
						</i>
					</h3>
				</div>
				<form className='bg-zinc-200 p-4 rounded-xl' onSubmit={onSubmit}>
					<div className="flex flex-col space-y-2">
						<label htmlFor="firstName" className="text-sm font-medium text-gray-700">
							First Name
						</label>
						<input
							id="name"
							name="name"
							type="text"
							className='border rounded-md py-2 px-3'
							value={singleDoctor?.name || ''}
							onChange={(e) => onChangeName(e)}
						/>
						<label htmlFor="chamber " className="text-sm font-medium text-gray-700">
							Chamber
						</label>
						<input
							id="chamber"
							name="chamber"
							type="text"
							className='border rounded-md py-2 px-3'
							value={singleDoctor?.chamber || ''}
							onChange={(e) => onChangeChamber(e)}
						/>
						<label htmlFor="number" className="text-sm font-medium text-gray-700">
							Chamber
						</label>
						<input
							id="number"
							name="price"
							type="number"
							className='border rounded-md py-2 px-3'
							value={singleDoctor?.fee || ''}
							onChange={(e) => onChangePrice(e)}
						/>
						<div className='text-center m-5'>
							<button
								type="submit"
								button className='bg-[#0E7490]'
							>
								Update Doctor
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EditDoctor;