import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import initialOrdersFromFile from '../data/orders.json';
import initialProductsFromFile from '../data/products.json';

export interface Product {
    id: string;
    name: string;
    price: string;
    image: string;
    description: string;
    category: string;
    sku: string;
    stock: number;
    sales: number;
    status: 'Active' | 'Low Stock' | 'Out of Stock';
}

export interface Order {
    id: string;
    customer: string;
    email: string;
    phone: string;
    address: string;
    product: string;
    amount: string;
    status: string;
    date: string;
    avatar: string;
    timestamp: number;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface AppNotification {
    id: string;
    type: 'order' | 'warning' | 'success' | 'shipping' | 'review';
    text: string;
    time: string;
    read: boolean;
    timestamp: number;
}

interface AppState {
    products: Product[];
    orders: Order[];
    cart: CartItem[];
    notifications: AppNotification[];
    storeName: string;
}

// Helper to load state from localStorage
const loadFromLocalStorage = (): AppState | undefined => {
    try {
        const serializedState = localStorage.getItem('saas_retail_state');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
};
// Для того, щоб дані записувалися у фізичний файл, потрібно, щоб у фоні працював сервер. Запускаємо команду: node src/api/server.js
const defaultProducts: Product[] = [
    { id: '1', name: 'Wireless Headphones Pro', price: '$149.99', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80', description: 'Premium noise-cancelling headphones.', category: 'Electronics', sku: 'SKU-001', stock: 45, sales: 128, status: 'Active' },
    { id: '2', name: 'Smart Watch Band', price: '$34.50', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80', description: 'Durable and stylish.', category: 'Accessories', sku: 'SKU-002', stock: 8, sales: 245, status: 'Low Stock' },
    { id: '3', name: 'Linen Blouse Set', price: '$89.00', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80', description: 'Perfect for summer.', category: 'Clothing', sku: 'SKU-003', stock: 12, sales: 89, status: 'Active' },
    { id: '4', name: 'Ceramic Plant Pot', price: '$42.00', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80', description: 'Handmade ceramic pot.', category: 'Home', sku: 'SKU-004', stock: 0, sales: 52, status: 'Out of Stock' },
];

const persistedState = loadFromLocalStorage();

const initialState: AppState = persistedState || {
    products: initialProductsFromFile as Product[],
    orders: initialOrdersFromFile as Order[],
    cart: [],
    notifications: [
        { id: '1', type: 'order', text: 'Platform initialized successfully', time: 'Just now', read: false, timestamp: Date.now() }
    ],
    storeName: 'My Premium Store',
};

// Async thunk to handle order placement and physical file sync
export const syncOrderToFile = createAsyncThunk(
    'app/syncOrderToFile',
    async (order: Order) => {
        try {
            const response = await fetch('http://localhost:3001/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(order),
            });
            return response.ok;
        } catch (e) {
            console.error("Failed to sync order to file", e);
            return false;
        }
    }
);

// Async thunk to handle product catalog sync
export const syncProductsToFile = createAsyncThunk(
    'app/syncProductsToFile',
    async (products: Product[]) => {
        try {
            const response = await fetch('http://localhost:3001/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(products),
            });
            return response.ok;
        } catch (e) {
            console.error("Failed to sync products to file", e);
            return false;
        }
    }
);

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const existing = state.cart.find(item => item.id === action.payload.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.cart = [];
        },
        addOrder: (state, action: PayloadAction<Order>) => {
            state.orders.unshift(action.payload);

            // Add notification
            state.notifications.unshift({
                id: Math.random().toString(36).substr(2, 9),
                type: 'order',
                text: `New order ${action.payload.id} received from ${action.payload.customer}`,
                time: 'Just now',
                read: false,
                timestamp: Date.now()
            });
        },
        addNotification: (state, action: PayloadAction<Omit<AppNotification, 'id' | 'time' | 'read' | 'timestamp'>>) => {
            state.notifications.unshift({
                ...action.payload,
                id: Math.random().toString(36).substr(2, 9),
                time: 'Just now',
                read: false,
                timestamp: Date.now()
            });
        },
        markNotificationAsRead: (state, action: PayloadAction<string>) => {
            const notification = state.notifications.find(n => n.id === action.payload);
            if (notification) {
                notification.read = true;
            }
        },
        setStoreName: (state, action: PayloadAction<string>) => {
            state.storeName = action.payload;
        },
        addProduct: (state, action: PayloadAction<Omit<Product, 'id' | 'sales' | 'status'>>) => {
            const newProduct: Product = {
                ...action.payload,
                id: Math.random().toString(36).substr(2, 9),
                sales: 0,
                status: 'Active'
            };
            state.products.push(newProduct);
        },
        updateProduct: (state, action: PayloadAction<Product>) => {
            const index = state.products.findIndex(p => p.id === action.payload.id);
            if (index !== -1) {
                state.products[index] = action.payload;
            }
        },
        deleteProduct: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter(p => p.id !== action.payload);
        },
        archiveProduct: (state, action: PayloadAction<string>) => {
            const product = state.products.find(p => p.id === action.payload);
            if (product) {
                product.status = 'Out of Stock';
            }
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    clearCart,
    addOrder,
    addNotification,
    markNotificationAsRead,
    setStoreName,
    addProduct,
    updateProduct,
    deleteProduct,
    archiveProduct
} = appSlice.actions;
export default appSlice.reducer;
