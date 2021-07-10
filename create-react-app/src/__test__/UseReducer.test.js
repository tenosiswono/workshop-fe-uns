import { expect } from '@jest/globals'
import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';


import App from '../pages/UseReducer'

test('useReducer', () => {
  render(<App />)
  expect(screen.getByText(/Count 0/)).toBeInTheDocument()
  expect(screen.getByText(/Name: Tamdia/)).toBeInTheDocument()
})
test('useReducer action increment decrement', () => {
  render(<App />)
  expect(screen.getByText(/Count 0/)).toBeInTheDocument()
  expect(screen.getByText(/Name: Tamdia/)).toBeInTheDocument()
  const incButton = screen.getByTestId('btn-increment')
  fireEvent.click(incButton)
  expect(screen.getByText(/Count 1/)).toBeInTheDocument()
  const decButton = screen.getByTestId('btn-decrement')
  fireEvent.click(decButton)
  expect(screen.getByText(/Count 0/)).toBeInTheDocument()
})