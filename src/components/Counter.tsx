import { decrement, increment } from 'src/redux/slices/counterSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/store'

export const Counter = () => {
  const count = useAppSelector((state) => state.counter.count)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  )
}
