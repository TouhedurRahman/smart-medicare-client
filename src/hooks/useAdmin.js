import { setDate } from "date-fns";
import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/api/v1/getme/${email}`)
                .then(res => res.json())
                .then(data => {
                     
                    // setIsAdmin(data.isAdmin);
                    if(data.user.status.includes("admin")){
                        setIsAdmin(true)
                    }
                    setIsAdminLoading(false);
                })
        }
    }, [email])
    return [isAdmin, isAdminLoading]
}

export default useAdmin;