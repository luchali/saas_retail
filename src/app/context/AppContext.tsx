import React, { createContext, useContext, useState, useEffect } from 'react';

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

interface AppContextType {
    products: Product[];
    orders: Order[];
    cart: CartItem[];
    notifications: AppNotification[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
    addOrder: (order: Omit<Order, 'id' | 'status' | 'date' | 'timestamp' | 'avatar'>) => void;
    addNotification: (notification: Omit<AppNotification, 'id' | 'time' | 'read' | 'timestamp'>) => void;
    markNotificationAsRead: (id: string) => void;
    storeName: string;
    setStoreName: (name: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [products] = useState<Product[]>([
        { id: '1', name: 'Wireless Headphones Pro', price: '$149.99', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80', description: 'Premium noise-cancelling headphones.', category: 'Electronics', sku: 'SKU-001', stock: 45, sales: 128, status: 'Active' },
        { id: '2', name: 'Smart Watch Band', price: '$34.50', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80', description: 'Durable and stylish.', category: 'Accessories', sku: 'SKU-002', stock: 8, sales: 245, status: 'Low Stock' },
        { id: '3', name: 'Linen Blouse Set', price: '$89.00', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80', description: 'Perfect for summer.', category: 'Clothing', sku: 'SKU-003', stock: 12, sales: 89, status: 'Active' },
        { id: '4', name: 'Ceramic Plant Pot', price: '$42.00', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80', description: 'Handmade ceramic pot.', category: 'Home', sku: 'SKU-004', stock: 0, sales: 52, status: 'Out of Stock' },
    ]);

    const [orders, setOrders] = useState<Order[]>([]);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [notifications, setNotifications] = useState<AppNotification[]>([
        { id: '1', type: 'order', text: 'Platform initialized successfully', time: 'Just now', read: false, timestamp: Date.now() }
    ]);
    const [storeName, setStoreName] = useState('My Premium Store');

    const addToCart = (product: Product) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: string) => {
        setCart(prev => prev.filter(item => item.id !== productId));
    };

    const clearCart = () => setCart([]);

    const addNotification = (notifData: Omit<AppNotification, 'id' | 'time' | 'read' | 'timestamp'>) => {
        const newNotif: AppNotification = {
            ...notifData,
            id: Math.random().toString(36).substr(2, 9),
            time: 'Just now',
            read: false,
            timestamp: Date.now()
        };
        setNotifications(prev => [newNotif, ...prev]);
    };

    const markNotificationAsRead = (id: string) => {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
    };

    const addOrder = (orderData: Omit<Order, 'id' | 'status' | 'date' | 'timestamp' | 'avatar'>) => {
        const orderId = `#ORD-${Math.floor(1000 + Math.random() * 9000)}`;
        
        // Generate initials for avatar
        const initials = orderData.customer
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase()
            .substring(0, 2);

        const newOrder: Order = {
            ...orderData,
            id: orderId,
            status: 'New',
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            avatar: initials || '??',
            timestamp: Date.now(),
        };
        setOrders(prev => [newOrder, ...prev]);
        
        // Add notification about the new order
        addNotification({
            type: 'order',
            text: `New order ${orderId} received from ${orderData.customer}`
        });
    };

    return (
        <AppContext.Provider value={{ 
            products, 
            orders, 
            cart, 
            notifications, 
            addToCart, 
            removeFromCart, 
            clearCart, 
            addOrder, 
            addNotification,
            markNotificationAsRead,
            storeName, 
            setStoreName 
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error('useAppContext must be used within AppProvider');
    return context;
};
