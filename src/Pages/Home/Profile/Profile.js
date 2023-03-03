import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Profile = () => {
    const { userProfile } = useContext(AuthContext)
    const [file, setFile] = useState(null);
    const handleChange = (e) => {
      setFile(e.target.files[0]);
    };
    const handleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", userProfile?.email);
        formData.append("file", file);
    
        try {
          const res = await fetch("http://localhost:5000/api/v1/file/upload", {
            method: "POST",
            body: formData,
          });
          const data = await res.json();
           if(data.modifiedCount==1){
            window.location.reload() 
           }
        } catch (err) {
         
        }
      };
    
    return (
        <div className='container flex justify-center'>

            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4">


                    <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">

                    </div>
                </div>
                <div className="flex flex-col items-center pb-10">
                     {userProfile?.pic?<img className="w-24 h-24 mb-3 rounded-full shadow-lg" src= {userProfile?.pic} alt="Bonnie image" />: <form   onSubmit={handleUpload}>
                        <input type="file" onChange={handleChange}/>
                        <button value="submit" className='btn'>submit</button>
                     </form>
                     }
                    
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"> {userProfile?.name}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{userProfile?.status}</span>
                    <div className="flex mt-4 space-x-3 md:mt-6">

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;