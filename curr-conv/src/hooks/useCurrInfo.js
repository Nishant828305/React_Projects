import {useEffect, useState} from "react"


function useCurrInfo(currency){
    const [data, setData] = useState({})
   
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/e7e606c320c13e0acdef44ba/latest/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data)
    return data;
};

export default useCurrInfo;