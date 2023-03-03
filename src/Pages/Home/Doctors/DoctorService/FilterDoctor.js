import React  from 'react';
const FilterDoctor = (props) => {
    const setValue = e => {
        props.setSearchDoctor(e.target.value)
    }
    return (
        <div style={{ margin: "12px 0px 25px 0px" }}>             
                <input type="text"  onChange={(e) => setValue(e)} placeholder="Search necessery doctor" className="input input-bordered border-purple-900" />
        </div>
    );
};

export default FilterDoctor;