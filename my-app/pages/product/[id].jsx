import Navbar from "../../components/Navbar";
import { useRouter } from "next/router"
import { useRef,useEffect } from "react";


const Product = ({ products }) => {
    const router = useRouter();
    const modelRef = useRef(null);

    useEffect(() => {
        M.Modal.init(modelRef.current)
    }, [])
    

    if (router.isFallback) {
        return "Loading...."
    }

    const getModel = () => {
        return (
            <div id="modal1" class="modal" ref={modelRef}>
                <div class="modal-content">
                    <h4>{products.name}</h4>
                    <p>Are You Sure, You Want To Delete This?</p>
                </div>
                <div class="modal-footer">
                    <button class="btn waves-effect waves-light #b71c1c red darken-4" type="submit" name="action">Cancel</button>
                    <button class="btn waves-effect waves-light #b71c1c red darken-4" type="submit" name="action">Yes</button>
                </div>
            </div>
        )
    }

    return (
        <>
            <Navbar />
            <div className="container center-align">
                <h3 style={{ fontSize: "32px", fontFamily: "inherit" }}>{products.name}</h3>
                <img src={products.mediaUrl} alt="" width="350px" />
                <h3 style={{ fontSize: "30px" }}>Rs  {products.price}</h3>
                <p className="left-align" style={{ fontWeight: "500" }}>{products.description}</p>
                <div class="input-field col s6">
                    <input style={{ width: "50%" }} placeholder="Enter Number of Item" id="numberOfItem" type="number" class="validate" />
                    <button class="btn waves-effect waves-light" type="submit" name="action">Add</button>
                </div>
                <button class="btn waves-effect waves-light #b71c1c red darken-4" type="submit" name="action">Delete</button>
                {getModel()}
            </div>
        </>
    )
}



// export async function getServerSideProps({params:{id}}){
//     const res = await fetch(`http://localhost:3000/api/product/${id}`)
//     const data = await res.json();
//     props:{
//          products :data 
//     }
// }


export async function getStaticProps({ params: { id } }) {
    const res = await fetch(`http://localhost:3000/api/product/${id}`)
    const data = await res.json();
    return {
        props: {
            products: data
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: "63a9205590c6ad5bd55938ec" } }
        ],
        fallback: true,
    }
}

export default Product;