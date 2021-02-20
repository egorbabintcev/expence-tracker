import { useState, useEffect } from 'react'

type ILongpressListeners = {
  [property in 'onMouseDown' |
  'onMouseUp' |
  'onMouseLeave' |
  'onTouchStart' |
  'onTouchEnd']: () => void
}

const useLongPress = (callback: (unknown) => unknown, ms: number): ILongpressListeners => {
  const [startLongPress, setStartLongPress] = useState(false)

  useEffect(() => {
    let timerId
    if (startLongPress) {
      timerId = setTimeout(callback, ms)
    } else {
      clearTimeout(timerId)
    }

    return () => {
      clearTimeout(timerId)
    }
  }, [callback, ms, startLongPress])

  return {
    onMouseDown: () => setStartLongPress(true),
    onMouseUp: () => setStartLongPress(false),
    onMouseLeave: () => setStartLongPress(false),
    onTouchStart: () => setStartLongPress(true),
    onTouchEnd: () => setStartLongPress(false),
  }
}

export default useLongPress
