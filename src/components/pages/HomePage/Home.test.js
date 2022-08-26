import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";  // optional
import userEvent from "@testing-library/user-event";
import Home from './Home';

describe('Home', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  })
})

