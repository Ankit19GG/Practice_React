import { useEffect, useState } from "react";

function LoadMore() {
    const [loading, setloading] = useState(false);
    const [products, setproducts] = useState([]);
    const [count, setcount] = useState(0);
    const [errormsg, seterrormsg] = useState('');

    async function fetchProducts() {
        try {
            setloading(true);
            const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${count*20}&select=id,title,price,thumbnail`);
            
            const data = await res.json();
            console.log(data);
            if (data && Array.isArray(data.products)) {
                setproducts((prev) => [...prev, ...data.products]);
                setcount(prev => prev + 1);
            } else {
                throw new Error("API response does not contain products array");
            }
        } catch (err) {
            seterrormsg(err.message || "Unknown error");
        } finally {
            setloading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    if (errormsg) {
        return <div className="text-red-600 text-xl">Error: {errormsg}</div>;
    }

    if (loading && products.length === 0) {
        return <div className="text-2xl">Loading... Please wait</div>;
    }

    return (
        <>
        <div className="flex-wrap flex my-10 justify-center">
            {products.map((product) => {
                if (!product || !product.id) return null;
                return (
                    <div className="border-1 rounded-2xl flex flex-col justify-baseline bg-amber-50 w-50 h-70 p-2 text-black text-left m-2" key={product.id}>
                        <div className="border-2"
                            style={{
                                backgroundImage: product.thumbnail ? `url(${product.thumbnail})` : "none",
                                width: "183px",
                                height: "165px",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderRadius: "10px",
                            }}
                        ></div>
                        <p className="my-2">{product.title}</p>
                        <span className="text-2xl">$ {product.price}</span>
                    </div>
                )
            })}
            
        </div>
        <button className="h-13 w-30" onClick={fetchProducts}>Load More</button>
        </>
    )
}

export default LoadMore;