import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


test('Renders the /', () => {
  // render(<App />);
  const headElement = screen.getByText("Little Lemon");
  expect(headElement).toBeInTheDocument();

  // const reserveButton = screen.getByText("Order Now");
  // fireEvent.click(reserveButton);

  // const headingElementNew = screen.getByText("Daily Specials");
  // expect(headingElementNew).toBeInTheDocument();
})