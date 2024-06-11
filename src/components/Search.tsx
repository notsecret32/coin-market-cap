import { HiSearch } from 'react-icons/hi'

export const Search = () => {
  return (
    <div className="flex flex-row bg-[#ebecf1] px-3 py-2 rounded-xl gap-2">
      <HiSearch size={24} />
      <div className="w-full">
        <input
          className="bg-transparent border-none w-full focus:border-none focus:outline-none"
          type="search"
          placeholder="Введите название монеты"
        />
      </div>
    </div>
  )
}
