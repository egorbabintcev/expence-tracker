import React from 'react'
import { render, screen } from '@testing-library/react'
import { v4 } from 'uuid'
import { Category, IExpense } from 'core'
import ExpenceItem from './'

describe('ExpenceItem component', () => {
  test('Should render info from props', () => {
    const currentDate = new Date()
    const expence: IExpense = {
      id: v4(),
      name: 'Test',
      category: Category.food,
      amount: 123,
      createdAt: currentDate,
    }

    render(<ExpenceItem {...expence} />)
    expect(screen.getByText(/Test/)).toBeInTheDocument()
    expect(screen.getByText(Category.food)).toBeInTheDocument()
    expect(screen.getByText(/123/)).toBeInTheDocument()
  })
})
