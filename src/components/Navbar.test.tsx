import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('renders the logo text', () => {
    render(<Navbar />)

    expect(screen.getByText('MURALLES & CO.')).toBeDefined()
  })
})
