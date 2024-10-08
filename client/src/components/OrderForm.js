import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
    const [serviceName, setServiceName] = useState('');
    const [selectedApp, setSelectedApp] = useState('');
    const [domain, setDomain] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/order', {
                serviceName,
                selectedApp,
                domain
            });
            alert('Zamówienie złożone: ' + response.data.message);
        } catch (error) {
            alert('Wystąpił błąd: ' + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nazwa usługi"
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                required
            />
            <select
                value={selectedApp}
                onChange={(e) => setSelectedApp(e.target.value)}
                required
            >
                <option value="">Wybierz aplikację</option>
                <option value="php">PHP</option>
                <option value="node">Node.js</option>
                <option value="python">Python</option>
            </select>
            <input
                type="text"
                placeholder="Domena"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                required
            />
            <button type="submit">Zamów usługę</button>
        </form>
    );
};

export default OrderForm;
