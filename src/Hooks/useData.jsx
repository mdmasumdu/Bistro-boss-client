import { useEffect, useState } from "react";


const useData = () => {
    const [menus,setmenus]=useState([]);
    const [loading,setloading] =useState(true)

    useEffect(()=>{
        fetch("http://localhost:5000/menu")
        .then(res=>res.json())
        .then(data=>{
            
            setmenus(data)
            setloading(false)
        
        })
    },[])

    return [menus,loading];
};

export default useData;