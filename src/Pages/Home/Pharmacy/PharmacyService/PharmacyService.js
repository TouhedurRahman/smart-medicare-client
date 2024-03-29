import React, { useEffect, useState } from 'react';
import FilterMedicine from './FilterMedicine';
import './Pharmacy.css'
import { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import { AiFillMedicineBox } from 'react-icons/ai';
import { BiCategoryAlt } from 'react-icons/bi';
import { BsCartPlusFill } from 'react-icons/bs';
import { GiMedicines } from 'react-icons/gi';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

const PharmacyService = () => {
	const { dispatch, user } = useContext(AuthContext);

	const [medicine, setMedicine] = useState([]);
	const [filterMedicine, setFilterMedicine] = useState("");
	const [searchMedicine, setSearchMedicine] = useState("");

	const [phone, setPhone] = useState("");
	const [name, setName] = useState("");
	const [city, setCity] = useState("");
	const [price, setPrice] = useState(0);

	const [modal, setModal] = useState(false);

	const [pageCount, setPageCount] = useState(0);
	const [page, setPage] = useState(0);

	const location = useLocation();
	const navigate = useNavigate();

	const goToLogin = () => {
		if (!user?.email) {
			navigate('/user/login', { state: { from: location }, replace: true });
		}
	}

	useEffect(() => {
		fetch(`http://localhost:5000/api/v1/medicine?category=${filterMedicine}&page=${page}`)
			.then(res => res.json())
			.then(data => {
				if (searchMedicine) {
					const result = data.result?.result.filter(item => (item.name).toUpperCase().includes(searchMedicine.toUpperCase()))
					setMedicine(result);
				} else {
					setMedicine(data.result?.result);
				}
			})
			.catch(error => { })
	}, [filterMedicine, searchMedicine, page]);

	useEffect(() => {
		fetch('http://localhost:5000/api/v1/medicineCount')
			.then(res => res.json())
			.then(data => {
				const count = data.count;
				const pages = Math.ceil(count / 10);
				setPageCount(pages);
			})
	}, [])

	const handlerMedicine = (e) => {
		setSearchMedicine(e.target.value);
	}

	const medicinePay = e => {
		axios.post(`http://localhost:5000/api/v1/medicine/init`, {
			phone: phone,
			category: modal?.name,
			city: city,
			name: name,
			price: (price + 10),
			id: modal?._id,
			email: user?.email
		})
			.then(res => {
				window.location.replace(res.data.result);
			})
			.catch(error => { })
	}

	return (
		<div>
			<div className="w-full topbar py-2">
				<div className='my-5'>
					<FilterMedicine setFilterMedicine={setFilterMedicine} />
				</div>
			</div>

			<div className="" >
				<label htmlFor="simple-search" className="sr-only">Search</label>
				<div className="relative w-full">
					<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-gray-500 dark:text-gray-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clipRule="evenodd"
							></path>
						</svg>
					</div>
					<input
						onChange={handlerMedicine}
						type="text" id="simple-search"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search Necessary Medicine"
						required
					/>
				</div>
				<div className='grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-4 place-items-center my-5'>
					{
						medicine.map((item, index) =>
							<div className="max-w-sm rounded overflow-hidden shadow-lg p-3" key={item._id}>
								<img className="mx-auto rounded-lg" src={item.imgUrl} alt={item.name} style={{ width: "300px", height: "200px" }} />
								<div className="px-3 py-4">
									<div className="text-center text-center font-bold text-xl mb-2">{item.name}</div>
									<div
										className='w-full flex justify-center items-center'
										style={{ height: "80px" }}

									>
										<p
											className="text-gray-700 text-base text-center"
										>
											{item.description.slice(0, 75) + '...'}
										</p>
									</div>
								</div>
								<div className='w-full flex justify-between items-center mb-2'>
									<p className='flex justify-end items-center font-bold'><BiCategoryAlt className='mr-1' />{item.category.toUpperCase()}</p>
									<p className='flex justify-start items-center font-bold'>{item.brand.name}<GiMedicines className='ml-1' /></p>
								</div>
								<div className='w-full flex justify-between items-center'>
									<div className='w-full flex justify-center text-center'>
										<p className='flex justify-center items-center font-bold bg-[#C2C2C2] rounded-full p-1 px-3'>প্রতি পাতা/পিস ৳ {item.price}/-</p>
									</div>
									<div>
										{
											user?.email
												?
												<button
													className="btn bg-[#0E7490]"
													onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
												>
													<BsCartPlusFill />
												</button>
												:
												<button
													className="btn bg-[#0E7490]"
													onClick={() => goToLogin()}
												>
													<BsCartPlusFill />
												</button>
										}
									</div>
								</div>
								{
									user.email
										?
										<div className='my-1'>
											<label
												htmlFor="medicine-modal"
												onClick={() => setModal(item)}
												className="w-full flex justify-center items-center btn  bg-[#0E7490]"
											>
												<span className='mr-1'>Medicine Order</span><AiFillMedicineBox />
											</label>
										</div>
										:
										<button onClick={() => goToLogin()} className='my-1 w-full flex justify-center items-center btn  bg-[#0E7490]'>
											<span className='mr-1'>Medicine Order</span><AiFillMedicineBox />
										</button>
								}
							</div>
						)
					}
				</div>

				<div className='pagination text-center'>
					<button
						className='disabled:text-[gray]'
						onClick={() => setPage(page - 1)}
						disabled={page === 0}
					>
						<span className=' flex justify-center items-center'><AiOutlineDoubleLeft className='mr-2' /> Previous</span>
					</button>
					{
						[...Array(pageCount).keys()]
							.map(number =>
								<button
									className={
										page === number ? 'selected' : ''
									}

									onClick={
										() => setPage(number)
									}
								>
									{number + 1}
								</button>
							)
					}
					<button
						className='disabled:text-[gray]'
						onClick={() => setPage(page + 1)}
						disabled={page === pageCount - 1}
					>
						<span className=' flex justify-center items-center'>Next <AiOutlineDoubleRight className="ml-2" /></span>
					</button>
				</div>

				<input type="checkbox" id="medicine-modal" className="modal-toggle" />
				<div className="modal">
					<div className="modal-box relative">
						<label htmlFor="medicine-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
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
									onChange={(e) => setPrice(e.target.value * modal?.price)}
									className="text-center rounded-xl"
									required
								/>
							</form>
						</div>
						<div className='text-center text-lg mt-5'>
							<h1>Total Price ৳ {!price ? (modal?.price + 10) : (price + 10)}/-</h1>
						</div>

						<div className="modal-action">
							<label htmlFor="medicine-modal" className="btn rounded-xl w-full" onClick={() => medicinePay()}>Medicine Order</label>
						</div>

						<div className='text-center text-[gray] italic mt-3'>
							<h1>** বিঃদ্রঃ ১০ টাকা ডেলিভারি চার্জ যুক্ত করা হয়েছে **</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PharmacyService;