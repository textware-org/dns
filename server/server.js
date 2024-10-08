const express = require('express');
const bodyParser = require('body-parser');
const Greenlock = require('greenlock-express');
// import Greenlock from 'greenlock';
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
/*
const greenlock = Greenlock.init({
    packageRoot: __dirname,
    configDir: "./greenlock.d",
    maintainerEmail: process.env.LETS_ENCRYPT_EMAIL,
    cluster: false
});
*/
// greenlock.create

// Endpoint do zamawiania usługi
app.post('/api/order', async (req, res) => {
    const { serviceName, selectedApp, domain } = req.body;

    // Logika do generowania certyfikatu i rekordu CNAME
    try {
        /*
        // Generowanie certyfikatu
        greenlock.create({
            version: 'draft-11',
            server: 'https://acme-v02.api.letsencrypt.org/directory',
            email: process.env.LETS_ENCRYPT_EMAIL,
            agreeTos: true,
            approveDomains: [domain],
            configDir: './greenlock.d',
            communityMember: true,
            debug: true
        });

        await greenlock.get({ domains: [domain] });
*/
        // Dodanie rekordu CNAME w Cloudflare
        await axios.post(`https://api.cloudflare.com/client/v4/zones/${process.env.ZONE_ID}/dns_records`, {
            type: 'CNAME',
            name: domain,
            content: process.env.SAAS,
            ttl: 1,
            proxied: false
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`, // Użycie zmiennej z .env
                'Content-Type': 'application/json'
            }
        });

        res.json({ message: 'Usługa zamówiona pomyślnie!' });
    } catch (error) {
        res.status(500).json({ message: 'Wystąpił błąd: ' + error.message });
    }
});


const PORT = process.env.PORT || 3000; // Użycie zmiennej z .env
app.listen(PORT, () => {
    console.log(`Serwer działa na http://localhost:${PORT}`);
});


/*
// Uruchomienie serwera
const PORT = process.env.PORT || 3000;
greenlock.create({
    version: 'draft-11',
    server: 'https://acme-v02.api.letsencrypt.org/directory',
    email: process.env.LETS_ENCRYPT_EMAIL,
    agreeTos: true,
    configDir: './greenlock.d',
    communityMember: true,
    debug: true
});

// Uruchomienie serwera HTTPS
greenlock.listen(80, 443, () => {
    console.log(`Serwer działa na http://localhost:${PORT}`);
});
*/
