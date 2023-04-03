import React from 'react';

const ModalDoctor = (props) => {
    const { data, setData, handleErrorSuccess, handleOnSubmit } = props;

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
            <label
                htmlFor="my-modal-6"
                className="btn"
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
                                placeholder='Patient Name'
                                onChange={e => setPatient(e.target.value)}
                                className="input input-bordered my-2 text-center"
                                required
                            />
                            <input
                                type="phone"
                                placeholder='Phone Number'
                                onChange={e => setPhone(e.target.value)}
                                className="input input-bordered my-2 text-center"
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