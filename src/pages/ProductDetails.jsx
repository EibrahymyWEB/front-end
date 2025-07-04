import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

export default function ProductDetails() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error("Error fetching product:", err));
    }, [id]);

    const handleDelete = () => {
        if (window.confirm("Voulez-vous vraiment supprimer ce produit ?")) {
            axios.delete(`http://localhost:3000/products/${id}`)
                .then(() => {
                    alert("Produit supprimé !");
                    navigate("/"); // Redirection vers la page d'accueil
                })
                .catch(err => console.error("Erreur de suppression :", err));
        }
    };

    return (
        <div className="container mt-4">
            <h2>Product Details (ID: {id})</h2>
            {!product ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h5>{product.name}</h5>
                    <p>Prix : <strong>{product.price} DH</strong></p>
                    
                    <button className="btn btn-danger" onClick={handleDelete}>
                        Supprimer
                    </button>
                </div>
            )}
        </div>
    );
}
