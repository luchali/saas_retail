import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';

export const store = configureStore({
    reducer: {
        app: appReducer,
    },
});

// Subscribe to store changes to persist state to localStorage
// This ensures every action (like clearing the cart) is immediately saved.
store.subscribe(() => {
    try {
        const state = store.getState().app;
        localStorage.setItem('saas_retail_state', JSON.stringify(state));
    } catch (e) {
        console.error("Could not save state to localStorage", e);
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
