import { useEffect, useState } from "react"


/** redux actions */

/** fetch question hook to fetch api data and set value to store */
export const useFetchQestion = () => {
    const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetData(prev => ({...prev, isLoading : true}));

        

}