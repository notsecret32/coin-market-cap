import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { SortingTableEnum } from 'src/enums'
import { setSortingColumn } from 'src/redux/slices/sortingTableSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/store'

interface ICoinHeaderColumnProps {
  id: number
  title?: string
  style: string
  position: string
  sortable: boolean
}

export const CoinHeaderColumn = ({
  id,
  title,
  style,
  position,
  sortable,
}: ICoinHeaderColumnProps) => {
  const { columnId, sortingType } = useAppSelector(
    (state) => state.sortingTableSlice,
  )
  const dispatch = useAppDispatch()

  const onColumnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()

    const newSortingType =
      sortingType === SortingTableEnum.Ascending
        ? SortingTableEnum.Descending
        : SortingTableEnum.Ascending

    dispatch(
      setSortingColumn({
        columnId: id,
        sortingType: newSortingType,
        columnName: title,
      }),
    )
  }

  return (
    <th
      className={style}
      onClick={sortable ? (e) => onColumnClick(e) : undefined}
    >
      <div className={`flex flex-row items-center select-none ${position}`}>
        <p>{title}</p>
        {columnId === id && columnId !== 0 && sortable ? (
          sortingType === SortingTableEnum.Ascending ? (
            <TiArrowSortedUp />
          ) : (
            <TiArrowSortedDown />
          )
        ) : (
          <></>
        )}
      </div>
    </th>
  )
}
