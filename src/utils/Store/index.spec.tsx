import React from 'react'
import { render, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import Store from 'core'
import { ProvideStore, useStore } from './'

describe('Store hook', () => {
  test('Should render provider with children', () => {
    render(
      <ProvideStore>
        <p>Test</p>
      </ProvideStore>
    )
    expect(screen.getByText(/Test/i)).toBeInTheDocument()
  })

  test('Hook should return Store instance', () => {
    const { result: { current } } = renderHook(() => useStore())
    expect(current).toBeInstanceOf(Store)
  })
})
