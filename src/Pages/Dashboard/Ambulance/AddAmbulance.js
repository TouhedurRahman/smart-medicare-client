import axios from 'axios';
import React, { useState } from 'react';
import { BDLocations } from "react-bd-location";
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AddAmbulance = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const onSubmit = (data) => {
        axios.post("http://localhost:5000/api/v1/ambulance",data)
        .then(response=>{
            toast.success(<h2>congrats you can successfully added ambulance  </h2>)
        })
        .catch(error=>{
            toast.error(<h1>  {error?.response?.data?.error}</h1>);
        })
        reset()
    }

    let inputClass = "block rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
    let labelClass = "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3";
    return (
        <div className='w-full px-12'>
              <h1 className='text-center text-3xl text-indigo-800 my-10 '>Add Ambulance</h1>
            <form  onSubmit={handleSubmit(onSubmit)} className="bg-gray-200 w-full p-12">
                <div class="relative">
                    <input type="text" id="driver_name" className={inputClass} placeholder=" " {...register("name", { required: true })}
                        aria-invalid={errors.name ? "true" : "false"} />
                    <label for="driver_name" class={labelClass}>Driver Name</label>
                </div>
                <div class="relative">
                    <input type="text" id="ambulanceNumber" className={inputClass} placeholder=" " {...register("ambulanceNumber", { required: true })}
                        aria-invalid={errors.ambulanceNumber ? "true" : "false"} />
                    <label for="ambulanceNumber" class={labelClass}>Ambulance Number</label>
                </div>
                <div class="relative">
                    <input type="text" id="imgUrl" className={inputClass} placeholder=" " {...register("img", { required: true })}
                        aria-invalid={errors.img ? "true" : "false"} />
                    <label for="img" class={labelClass}>Img Url</label>
                </div>
                <div class="relative">
                    <input type="text" id="description" className={inputClass} placeholder=" " {...register("description", { required: true })}
                        aria-invalid={errors.description ? "true" : "false"} />
                    <label for="description" class={labelClass}>Description</label>
                </div>
                <div class="relative">
                    <input type="text" id="category" className={inputClass} placeholder=" " {...register("category", { required: true })}
                        aria-invalid={errors.category ? "true" : "false"} />
                    <label for="category" class={labelClass}>Category</label>
                </div>  <div class="relative">
                    <input type="text" id="contact" className={inputClass} placeholder=" " {...register("contact", { required: true })}
                        aria-invalid={errors.contact ? "true" : "false"} />
                    <label for="contact" class={labelClass}>Contact Number</label>
                </div>  <div class="relative">
                    <input type="text" id="location" className={inputClass} placeholder=" " {...register("location", { required: true })}
                        aria-invalid={errors.location ? "true" : "false"} />
                    <label for="location" class={labelClass}>Location </label>
                </div>
                <div class="relative">
                    <input type="number" id="serviceCharge" className={inputClass} placeholder=" " {...register("serviceCharge", { required: true })}
                        aria-invalid={errors.serviceCharge ? "true" : "false"} />
                    <label for="serviceCharge" class={labelClass}>service Charge </label>
                </div>
              <div className='text-center'>
              <button type="submit" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                    Add Ambulance
                </button>
              </div>
            </form>
        </div>
    );
};

export default AddAmbulance;