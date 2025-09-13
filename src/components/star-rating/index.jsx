import { useState } from 'react';
import {FaStar} from 'react-icons/fa'

function StarRating({noOfStars}){

    const [rating,setrating]=useState(0);
    const [hover,sethover]=useState(0);

    return (
        <div className='flex flex-col justify-center py-30 bg-blue-400 my-10'>
            <div className='flex justify-center mb-6'>{
                [...Array(noOfStars)].map((_,index)=>{
                    index += 1;
                    return(
                        <FaStar 
                        className={(index<=(hover||rating)?'cursor-pointer text-amber-300':'cursor-pointer')}
                        key={index}
                        onClick={()=>{
                            if(rating===index){setrating(0);sethover(0)}
                            else setrating(index);
                        }}
                        onMouseMove={()=>{
                            (index<rating)?sethover(rating):sethover(index);
                        }}
                        onMouseLeave={()=>{
                            sethover(rating);
                        }}
                        size={40}
                        />
                    )
                })
            }
            </div>
            <p className='text-4xl font-medium'>{hover} Stars</p>
        </div>
    )
}

export default StarRating;