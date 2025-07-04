import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            name,
            price: Number(price)
        };

        axios.post("http://localhost:3000/products", newProduct)
            .then(() => {
                alert("Produit ajouté !");
                navigate("/"); // Redirige vers la page d'accueil
            })
            .catch((err) => console.error("Erreur lors de l'ajout :", err));
    };

    return (
        <div className="container mt-4">
            <h2>Ajouter un nouveau produit</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Nom du produit</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Prix</label>
                    <input
                        type="number"
                        className="form-control"
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>
        </div>
    );
}
