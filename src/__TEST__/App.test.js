import { render, screen } from '@testing-library/react';
import App from 'App';

test('renders App landing page', () => {
	render(<App />);
	const linkElement = screen.getByText(/Nucamp/i);
	expect(linkElement).toBeInTheDocument();
});
