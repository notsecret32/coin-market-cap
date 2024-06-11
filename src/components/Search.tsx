import { HiSearch } from 'react-icons/hi'
import { updateSearchCoinName } from 'src/redux/slices/searchCoinSlice'
import { useAppDispatch } from 'src/redux/store'

export const Search = () => {
  const dispatch = useAppDispatch()

  return (
    <div className="flex flex-row bg-[#ebecf1] px-3 py-2 rounded-xl gap-2">
      <HiSearch size={24} />
      <div className="w-full">
        <input
          className="bg-transparent border-none w-full focus:border-none focus:outline-none"
          onChange={(e) =>
            dispatch(updateSearchCoinName({ coinName: e.target.value }))
          }
          type="search"
          placeholder="Введите название монеты"
        />
      </div>
    </div>
  )
}
