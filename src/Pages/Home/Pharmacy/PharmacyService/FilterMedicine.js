import { TfiReload } from 'react-icons/tfi';
import { RiWomenLine } from 'react-icons/ri';
import { TbDevices2 } from 'react-icons/tb';
import { MdPersonalInjury } from 'react-icons/md';
import { SiGeneralmotors, SiPlaystationvita } from 'react-icons/si';

const FilterMedicine = (props) => {
    const filterMedicine = e => {
        props.setFilterMedicine(e)
    }

    return (
        <div>
            <div className='mx-auto'>
                <div className='flex justify-between'>
                    <button
                        onClick={() => window.location.reload()}
                        className='medicine-btn hover-underline-animation bg-[#0E7490]'
                    >
                        <TfiReload /> All Medicines
                    </button>

                    <button
                        value="general"
                        onClick={(e) => filterMedicine(e.target.value)}
                        className='medicine-btn hover-underline-animation bg-[#0E7490]'
                    >
                        <SiGeneralmotors /> General Medicines
                    </button>

                    <button
                        value="women"
                        onClick={(e) => filterMedicine(e.target.value)}
                        className='medicine-btn hover-underline-animation bg-[#0E7490]'
                    >
                        <RiWomenLine /> Women Care
                    </button>

                    <button
                        value="devices"
                        onClick={(e) => filterMedicine(e.target.value)}
                        className='medicine-btn hover-underline-animation bg-[#0E7490]'
                    >
                        <TbDevices2 /> Devices
                    </button>
                    <button
                        value="personal care"
                        onClick={(e) => filterMedicine(e.target.value)}
                        className='medicine-btn hover-underline-animation bg-[#0E7490]'
                    >
                        <MdPersonalInjury />  Personal Care
                    </button>
                    <button
                        value="vitamin"
                        onClick={(e) => filterMedicine(e.target.value)}
                        className='medicine-btn hover-underline-animation bg-[#0E7490]'
                    >
                        <SiPlaystationvita /> Vitamins
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterMedicine;