import Counter from "../components/Counter";  
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe } from "vitest";
const user = userEvent.setup();

describe('test the counter', () => {
  
  test("Renders initial text", () => {
    render(<Counter />);  
    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });
  
  test('increment the count', async () => {
    render(<Counter/>)
    await user.click(screen.getByRole('button', {name: /increment/i}))
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument()
  }),

  test('changes color', () => {
    
  })
})