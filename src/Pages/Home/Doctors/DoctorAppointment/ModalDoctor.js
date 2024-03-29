import React from 'react';

const ModalDoctor = (props) => {
    const { data, setData, handleErrorSuccess, handleOnSubmit } = props;

    const setPatient = e => {
        const value = { ...data, patientName: e }
        setData(value)
    }

    const setPatientAge = e => {
        const value = { ...data, patientAge: e }
        setData(value)
    }
    const setPhone = e => {
        const value = { ...data, contactNumber: e }
        setData(value)
    }

    return (
        <>
            <label
                htmlFor="my-modal-6"
                className="btn bg-[#0E7490]"
                onClick={() => handleErrorSuccess("")}
            >
                Appointment
            </label>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="form-control">
                        <form className='mt-5'>
                            <input
                                type="text"
                                placeholder="Patient's Name"
                                onChange={e => setPatient(e.target.value)}
                                className="text-center rounded-xl"
                                required
                            />
                            <input
                                type="number"
                                placeholder="Patient's Age"
                                onChange={e => setPatientAge(e.target.value)}
                                className="text-center rounded-xl"
                                required
                            />
                            <input
                                type="phone"
                                placeholder="Mobile Number"
                                onChange={e => setPhone(e.target.value)}
                                className="text-center rounded-xl"
                                required
                            />
                        </form>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn w-full" onClick={handleOnSubmit}>Confirm Appointment</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalDoctor;