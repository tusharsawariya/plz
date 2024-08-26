import { useState, useEffect } from "react";
import axios from "axios";
import './inventory.css'; // Include your custom styles
import { FaBoxOpen, FaTag, FaDollarSign, FaClipboardList, FaListAlt } from 'react-icons/fa';

const Inventory = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setUserId(parseInt(storedUserId, 10));
        }
    }, []);

    const sendData = async (e) => {
        e.preventDefault();
        const formattedQuantity = parseInt(quantity, 10);
        const formattedPrice = parseFloat(price);

        if (isNaN(formattedQuantity) || isNaN(formattedPrice) || userId === null) {
            console.error('Quantity, Price, or userId is invalid.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/item/Saveitem', {
                name,
                description,
                quantity: formattedQuantity,
                price: formattedPrice,
                category,
                userId
            });
            console.log("Success", response.data);
            setName('');
            setDescription('');
            setQuantity('');
            setPrice('');
            setCategory('');
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };

    const handleCancelButton = () => {
        window.location.reload();
    };

    return (
        <div className="inventory-container mt-5">
            <div className="d-flex justify-content-center mb-4">
                <h1 className="inventory-title">Inventory Entries</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <div className="p-5 border rounded bg-white shadow-lg inventory-card">
                        <form onSubmit={sendData}>
                            <div className="mb-3">
                                <label htmlFor="itemName" className="form-label">
                                    <FaBoxOpen className="input-icon" /> Item Name
                                </label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="itemName" 
                                    placeholder="Enter the item name" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">
                                    <FaClipboardList className="input-icon" /> Description
                                </label>
                                <textarea 
                                    className="form-control" 
                                    id="description" 
                                    rows="3" 
                                    placeholder="Enter the description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">
                                    <FaDollarSign className="input-icon" /> Price
                                </label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="price" 
                                    placeholder="Enter the price" 
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    step="0.01"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">
                                    <FaTag className="input-icon" /> Category
                                </label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="category" 
                                    placeholder="Enter the category" 
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="quantity" className="form-label">
                                    <FaListAlt className="input-icon" /> Quantity
                                </label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="quantity" 
                                    placeholder="Enter the quantity" 
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    step="1"
                                    required
                                />
                            </div>
                            
                            <div className="d-flex justify-content-between">
                                <button type="submit" className="btn btn-primary custom-btn">Submit</button>
                                <button type="button" className="btn btn-danger custom-btn" onClick={handleCancelButton}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;
