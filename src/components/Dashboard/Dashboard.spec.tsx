import React from 'react'
import { render, screen } from '@testing-library/react'
import Dashboard from './'

describe('Dashboard component', () => {
  test('Should render', () => {
    render(<Dashboard />)
  })
})
