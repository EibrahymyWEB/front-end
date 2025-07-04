import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function EditProduct() {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
            .then(res => {
                setName(res.data.name);
                setPrice(res.data.price);
            })
            .catch(err => console.error(err));
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();

        const updatedProduct = {
            name,
            price: Number(price)
        };

        axios.put(`http://localhost:3000/products/${id}`, updatedProduct)
            .then(() => {
                alert("Produit modifié !");
                navigate(`/products/${id}`);
            })
            .catch(err => console.error("Erreur de modification :", err));
    };

    return (
        <div className="container mt-4">
            <h2>Modifier le produit</h2>
            <form onSubmit={handleUpdate}>
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
                        type="text"
                        className="form-control"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Modifier</button>
            </form>
        </div>
    );
}
