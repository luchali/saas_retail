import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const ordersFilePath = path.join(__dirname, '../app/data/orders.json');
const productsFilePath = path.join(__dirname, '../app/data/products.json');

app.post('/api/orders', (req, res) => {
    const newOrder = req.body;

    fs.readFile(ordersFilePath, 'utf8', (err, data) => {
        let orders = [];
        if (!err && data) {
            try {
                orders = JSON.parse(data);
            } catch (e) {
                console.error("Error parsing JSON", e);
            }
        }

        orders.unshift(newOrder); // Add to beginning

        fs.writeFile(ordersFilePath, JSON.stringify(orders, null, 2), 'utf8', (err) => {
            if (err) {
                console.error("Error writing file", err);
                return res.status(500).send("Error saving order");
            }
            res.status(200).send("Order saved successfully");
        });
    });
});

app.post('/api/products', (req, res) => {
    const products = req.body;

    fs.writeFile(productsFilePath, JSON.stringify(products, null, 2), 'utf8', (err) => {
        if (err) {
            console.error("Error writing products file", err);
            return res.status(500).send("Error saving products");
        }
        res.status(200).send("Products saved successfully");
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
