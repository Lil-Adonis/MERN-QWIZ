import { useEffect, useState } from "react"


/** redux actions */

/** fetch question hook to fetch api data and set value to store */
export const useFetchQestion = () => {
    const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetData(prev => ({...prev, isLoading : true}));


        /** async function fetch backend data */
        (async () => {
            try {
                const [{ questions, answers }] = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, (data) => data)
                
                if(questions.length > 0){
                    setGetData(prev => ({...prev, isLoading : false}));
                    setGetData(prev => ({...prev, apiData : questions}));


        

}