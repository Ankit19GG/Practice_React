import { useEffect, useState } from "react";
import {FaAngleRight, FaAngleLeft, FaCircle} from 'react-icons/fa'

function ImageSlider({url,limit}){
    const [images,setimages]=useState([]);
    const [imgindex,setimgindex]=useState(0);
    const [errormsg,seterrormsg]=useState('');
    const [loading,setloading]=useState(false);

    async function fetchImg(getUrl) {
        try {
            setloading(true)
            const res = await fetch(getUrl);
            const data= await res.json();
            if(data){
                setimages(data);
                setloading(false);
            }
        } catch (e) {
            seterrormsg(e.message);
        }
    }

    useEffect(()=>{
        if(url!=='') {
            fetchImg(url+limit);
        }
    },[url,limit])

    useEffect(()=>{
        console.log(images)
        const test = images[imgindex]
        if (test) console.log(test.download_url)
    },[images])

    if(loading){
        return (
            <div className="bg-amber-300 h-100 flex justify-center items-center text-5xl font-medium">Loading... Please wait</div>
        )
    }
    else{ return (
        <div className="bg-amber-300 h-100 flex justify-center items-center text-5xl font-medium py-4">
            <div className="w-150 bg-amber-200 h-full bg-cover"
    style={{
        backgroundImage: `url('${images[imgindex]?.download_url || ""}')`
    }}>
                <div className="flex justify-between items-center h-85 pt-10">
                    <FaAngleLeft className="cursor-pointer" onClick={()=>
                        (imgindex<=0)?setimgindex(limit-1):setimgindex(imgindex-1)
                        }/>
                    <FaAngleRight className="cursor-pointer" onClick={()=>
                        (imgindex>=limit-1)?setimgindex(0):setimgindex(imgindex+1)
                        }/>
                </div>
                <div className="flex justify-center">
                    {Array.from({length: limit}).map((_, index) => (
                        <FaCircle 
                            key={index}
                            className={index === imgindex ? 'text-gray-800 mx-1 cursor-pointer' : 'text-white mx-1 cursor-pointer'}
                            size={10}
                            onClick={()=>setimgindex(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )}
}

export default ImageSlider;