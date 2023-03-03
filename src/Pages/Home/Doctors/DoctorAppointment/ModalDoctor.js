import React from 'react';

const ModalDoctor = (props) => {
     
   const {data,setData,handleErrorSuccess,handleOnSubmit} = props;
    const setPatient = e => {
        const value = { ...data, patientName: e }
        setData(value)
    }
    const setPhone = e => {
        const value = { ...data, contactNumber: e }
        setData(value)
    }
    return (
        <>
            <label htmlFor="my-modal-6" className="btn" onClick={() => handleErrorSuccess("")}>Appointment</label>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="form-control">
                        <div className="input-group">
                            <form>
                             
                                <input type="text" placeholder='enter patient name' required onChange={e => setPatient(e.target.value)} className="input input-bordered my-2" />
                                <input type="number" placeholder='enter phone number' required onChange={e => setPhone(e.target.value)} className="input input-bordered my-2" />
                            </form>

                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn" onClick={handleOnSubmit}>Confirm Appointment</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalDoctor;