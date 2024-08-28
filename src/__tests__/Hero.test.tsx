import Hero from '@/components/Hero/Hero'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
 
describe('Renders Headring', () => {
  it('renders a heading', () => {
    render(<Hero />)
 
    const heading = screen.getByRole('heading', { name: "Hello Worl" })
 
    expect(heading).toBeInTheDocument()
  })
})