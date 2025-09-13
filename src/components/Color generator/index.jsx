import { useEffect, useState } from "react"

function rgb(){
    return Math.floor(Math.random()*256);
};

function ColorGenerator(){
    const [code,setCode] = useState("#0084ff");
    const [typeofCode,settypeofCode] = useState(true);

    useEffect(()=>{
        if(typeofCode){
            let code = Math.floor(Math.random()*16777215).toString(16);
            code.length<6 ? code="0"+code : null;
            setCode("#"+code);
        }
        else{
            setCode("rgb("+rgb()+","+rgb()+","+rgb()+")");
        }
    },[typeofCode])

    return(
        <div style={{ backgroundColor: code }} className={`mt-10 p-10 h-150`}>
           <div>
            <button onClick={()=>settypeofCode(!typeofCode)}>Create {typeofCode?"RGB":"HEX"} Color</button>
            <button onClick={()=>{
    if (typeofCode){
        let code = Math.floor(Math.random()*16777215).toString(16);
        (code.length<6)?code="0"+code:null;
        setCode("#"+code);
    }
    else{
        setCode("rgb("+rgb()+","+rgb()+","+rgb()+")");   
    };
}}>Generate Random color</button>
           </div>
           <p className="text-6xl font-medium my-10">{typeofCode?"HEX":"RGB"} Color</p>
           <p className="text-8xl font-medium my-15">{code}</p>
        </div>
    )
}

export default ColorGenerator;