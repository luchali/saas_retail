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

    fs.readFile(ordersFilePath, 'utf8', (err, ordersData) => {
        let orders = [];
        if (!err && ordersData) {
            try {
                orders = JSON.parse(ordersData);
            } catch (e) {
                console.error("Error parsing orders JSON", e);
            }
        }

        orders.unshift(newOrder);

        // Update products stock
        fs.readFile(productsFilePath, 'utf8', (err, productsData) => {
            if (err) {
                console.error("Error reading products file", err);
                return res.status(500).send("Error reading products");
            }

            let products = [];
            try {
                products = JSON.parse(productsData);
            } catch (e) {
                console.error("Error parsing products JSON", e);
                return res.status(500).send("Error parsing products");
            }

            if (newOrder.items && Array.isArray(newOrder.items)) {
                newOrder.items.forEach(item => {
                    const productIndex = products.findIndex(p => p.id === item.id);
                    if (productIndex !== -1) {
                        // Reduce stock
                        products[productIndex].stock = Math.max(0, products[productIndex].stock - item.quantity);

                        // Increase sales
                        products[productIndex].sales = (products[productIndex].sales || 0) + item.quantity;

                        // Update status
                        if (products[productIndex].stock === 0) {
                            products[productIndex].status = 'Out of Stock';
                        } else if (products[productIndex].stock < 10) {
                            products[productIndex].status = 'Low Stock';
                        } else {
                            products[productIndex].status = 'Active';
                        }
                    }
                });
            }

            // Save orders
            fs.writeFile(ordersFilePath, JSON.stringify(orders, null, 2), 'utf8', (err) => {
                if (err) {
                    console.error("Error writing orders file", err);
                    return res.status(500).send("Error saving order");
                }

                // Save updated products
                fs.writeFile(productsFilePath, JSON.stringify(products, null, 2), 'utf8', (err) => {
                    if (err) {
                        console.error("Error writing products file", err);
                        return res.status(500).send("Error updating stock");
                    }
                    res.status(200).send("Order saved and stock updated successfully");
                });
            });
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
