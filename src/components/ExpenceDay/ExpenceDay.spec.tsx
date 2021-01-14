import React from 'react'
import { render, screen } from '@testing-library/react'
import { v4 } from 'uuid'
import { Category } from 'core'
import ExpenceDay from './'

describe('ExpenceDay component', () => {
  test('Should render date in proper locale and format', () => {
    const currentDate = new Date(
      'Sat Sep 7 2002 00:00:00 GMT+0300 (Moscow Standard Time)'
    )
    const mockExpences = [
      {
        id: v4(),
        name: 'Test',
        category: Category.food,
        amount: 123,
        createdAt: currentDate,
      },
    ]

    render(<ExpenceDay date={currentDate} expences={mockExpences} />)
    expect(screen.getByText('7 сентября, сб')).toBeInTheDocument()
  })
})
