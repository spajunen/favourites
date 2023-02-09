import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import AddFavourite from './AddFavourite';
import {QueryClient, QueryClientProvider} from 'react-query';

test('renders content', () => {
    render(<QueryClientProvider client={new QueryClient()}><AddFavourite /></QueryClientProvider>);
    const element = screen.getByText("Lisää lempijuomasi alla olevalla lomakkeella");
    expect(element).toBeDefined();
});