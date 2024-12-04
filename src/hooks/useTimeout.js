export default function useTimeout(callbak,dealy)
{
    const callbackRef=useRef(callback);
    callbackRef.current=callback;//reffering to updated callback
    useEffect(()=>{
       const timerId=setTimeout(callbackRef,current,delay);
       return ()=>{
        clearTimeout(timerId)
       }
    },[delay])

}