import {useState,useEffect} from "react"
import { Items } from "../../data/sideitems";
import { Compare } from "../../helpers/compareUrlPath";

const useGetDataSideBarItems =()=>{
     const [sideItems, setSideItems] = useState([]);
     useEffect(() => {
       setSideItems(Items);
       console.log(Compare("/invoices"));
     }, []);
     return sideItems;
}

export default useGetDataSideBarItems;