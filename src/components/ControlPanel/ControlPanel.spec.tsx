import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import ControlPanel from './'

describe('ControlPanel component', () => {
  test('Should match snapshot', () => {
    const { container } = render(<ControlPanel />)
    expect(container).toMatchSnapshot()
  })
})
