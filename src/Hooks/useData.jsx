import { useEffect, useState } from "react";


const useData = () => {
    const [menus,setmenus]=useState([]);
    const [loading,setloading] =useState(true)

    useEffect(()=>{
        fetch("Menu.json")
        .then(res=>res.json())
        .then(data=>{
            
            setmenus(data)
            setloading(false)
        
        })
    },[])

    return [menus,loading];
};

export default useData;