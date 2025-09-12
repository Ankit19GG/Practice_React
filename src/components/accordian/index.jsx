import { useState } from "react";
import data from './data';

function Accordian() {
    const [selected, setselected] = useState(null);
    const [multiSelect, setmultiSelect] = useState(false);
    const [selectIndex, setselectIndex] = useState([]);

    function handleSelected(index) {
        if (multiSelect) {
            setselectIndex(prev =>
                prev.includes(index)
                    ? prev.filter(i => i !== index)
                    : [...prev, index]
            );
        } else {
            setselected(selected === index ? null : index);
        }
    }

    return (
        <div className="flex w-300 bg-amber-100 justify-center">
            <div className="bg-blue-500 w-130 p-3">
                <button className="mb-2" onClick={() => setmultiSelect(!multiSelect)}>
                    Multi select
                </button>
                {data && data.length !== 0 ? (
                    data.map(dataItem => (
                        <div key={dataItem.id} className="flex flex-col border-amber-50 border-2 mb-3 p-2">
                            <div onClick={() => handleSelected(dataItem.id)} className="flex cursor-pointer">
                                <h3 className="mr-2">{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {multiSelect
                                ? selectIndex.includes(dataItem.id) && (
                                    <div className="text-left my-3">{dataItem.answer}</div>
                                )
                                : selected === dataItem.id && (
                                    <div className="text-left my-3">{dataItem.answer}</div>
                                )
                            }
                        </div>
                    ))
                ) : (
                    <p>No data found!</p>
                )}
            </div>
        </div>
    );
}

export default Accordian;