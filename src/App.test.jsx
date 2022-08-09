import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('Portfolio site test', () => {
    it('should render Olivia Miller on the nav bar', () => {
        render(
          <MemoryRouter>
            <App />
          </MemoryRouter>
        );

        const name = screen.getByText(/Olivia Miller/i);

        expect(name).toBeInTheDocument();
    })
})