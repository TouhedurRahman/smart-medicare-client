import React, { useState } from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {GrRestroomWomen} from 'react-icons/gr';
import {TbDevices2} from 'react-icons/tb';
import { MdPersonalInjury} from 'react-icons/md';
import { SiPlaystationvita} from 'react-icons/si';

const FilterMedicine = (props) => {
    const filterMedicine = e => {
        props.setFilterMedicine(e)
    }
    return (
        <div>
            <div>
                
                <div  >
                    <button value="women" onClick={(e) => filterMedicine(e.target.value)} className='medicine-btn hover-underline-animation'   ><GrRestroomWomen /> Women Care</button> <br />
                    <button value="devices" onClick={(e) => filterMedicine(e.target.value)} className='flex'><TbDevices2 /> Devices</button><br />
                    <button value="personal care" onClick={(e) => filterMedicine(e.target.value)} className='medicine-btn hover-underline-animation'><MdPersonalInjury />  Personal Care</button><br />
                    <button value="vitamin" onClick={(e) => filterMedicine(e.target.value)} className='medicine-btn hover-underline-animation'  ><SiPlaystationvita /> Vitamins</button>
                </div>
            </div>
        </div>
    );
};

export default FilterMedicine;