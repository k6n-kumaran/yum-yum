import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const GlobalContext = createContext(null);


export default function  GlobalState({children}) {

    const [scroll,setScroll] = useState(false)
    const [searchParam,setSearchParam] = useState("");
    const [loading, setLoading] = useState(false)
    const [dishList, setDishList] = useState([]);
    const [dishDetails, setDishDetails] = useState(null);
    const [favoriteItems,setFavoritesItem] = useState([])
    const navigate = useNavigate()


    async function handleSubmit(event) {
         event.preventDefault();
         setLoading(true)
        try {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
            const data = await response.json();
            if(data?.data?.recipes) {
                setDishList(data?.data?.recipes)
                setLoading(false)
                setSearchParam("")
                navigate("/yum-yum")
            }
        } catch (error) {
            console.log(e);
        }
    }

    function  handleAddFavorites(currentItem) {
        
         let copyFavList = [...favoriteItems];
         const index = copyFavList.findIndex((item )=> item.id === currentItem.id);
         
         if(index === -1) {
            copyFavList.push(currentItem)
         }else {
            copyFavList.splice(index,index + 1)
         }

         setFavoritesItem(copyFavList)

    }

    

    
    return <GlobalContext.Provider 
             value={{searchParam,
             setSearchParam,
             loading, 
             dishList ,
             handleSubmit ,
             dishDetails,
             setDishDetails ,
             handleAddFavorites,
             favoriteItems,
             scroll,setScroll}}>
              {children}
           </GlobalContext.Provider>
}

