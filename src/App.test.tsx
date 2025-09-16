import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import {App} from "@/app";

describe('App Component', () => {
    it('renders the heading', () => {
        render(<App />);
        const heading = screen.getByText(/Hello from Docker Compose Watch/i);
        expect(heading).toBeInTheDocument();
    });

    it('renders the button and updates count on click', () => {
        render(<App />);
        const button = screen.getByRole('button', { name: /count is 0/i });
        expect(button).toBeInTheDocument();

        // Kliknięcie przycisku zwiększa licznik
        fireEvent.click(button);
        const updatedButton = screen.getByRole('button', { name: /count is 1/i });
        expect(updatedButton).toBeInTheDocument();
    });
});
