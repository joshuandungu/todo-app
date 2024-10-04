import { useState, useEffect }  from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, SetError] = useState(null);
    useEffect(() => {

        const abortCont = new  AbortController();
        setTimeout(() => {
            fetch (url, { signal: abortCont.signal } )
        .then(res => {
            if (!res.ok) {
                throw Error('Could not fetch data for that resource');
            }
           return  res.json()
        })
        .then(data => {
            // console.log(data);
            setData(data);
            setIsPending(false);
            SetError(null);
        })
        .catch((err) => {
            if(err.name === 'AbortError') {
                console.log('Fetch aborted');
            } else {
                setIsPending(false);
           SetError(err.message);
            }
            
        })
        }, 1000);
        return () => abortCont.abort();
    }, [url]);
    return { data, isPending, error}
}
export default useFetch;