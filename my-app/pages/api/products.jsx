import initDb from "../Models/Conn";
import Product from "../Models/ProductsSchema"


initDb();

export default (req,res)=>{
    Product.find().then(products=>{
        res.status(200).json(products)
    })
}