import React from 'react';
import './App.css';
import AppLayout from './components/AppLayout';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
        <QueryClientProvider client={queryClient}>
            <AppLayout/>
        </QueryClientProvider>
    </div>
  );
}

export default App;
