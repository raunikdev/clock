import { useState, useEffect } from 'react'
import './clock.css'
function Clock(){
    const [time,setTime] = useState(new Date());
    useEffect(()=>{
        const intervalid = setInterval(()=>{
            setTime(new Date());
        },1000)
        return()=>{
            clearInterval(intervalid)
        }
    },[])
    useEffect(()=>{
        document.title= formatTime()
    })
    function formatTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridiem = 12>hours ? "AM" : "PM";
        hours= hours %12 || 12;

        return (`${attachZero(hours)}: ${attachZero(minutes)} : ${attachZero(seconds)} ${meridiem}`)
    }
    function attachZero(value){
        return value<10 ? "0"+value:value;
    }
    return(
        <>
            <div className='clock'>
                {formatTime()}
            </div>
        </>
    )

}
export default Clock