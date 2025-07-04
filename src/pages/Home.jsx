import axios from "axios"
import { useEffect, useState } from "react"
import {NavLink} from "react-router-dom"

export default function Home() {
    const [products, setProducts]= useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/products")
        .then(res => setProducts(res.data))
    },[])
    
    return(
        <div>
            <NavLink to="/add" className="btn btn-success mb-3">Ajouter un produit</NavLink>
            <div className="row">
            {products && products.map((product)=>(
                <div key={product.id} className="col-4">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="text-center">{product.name}</h5>
                        </div>
                        <div className="card-body">
                            <div className="alert alert-info text-center">
                                <p className="lead">
                                    {product.price}
                                </p>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <NavLink to={"/products/"+ product.id} className="btn-primary btn">
                            Voir 
                            </NavLink>
                            <button className="btn-danger btn">
                                supprimer
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    )
}