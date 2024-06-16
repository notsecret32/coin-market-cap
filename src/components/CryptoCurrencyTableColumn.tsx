import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { setSortingColumn } from 'src/redux/slices/sortingTableSlice'
import { useAppDispatch, useAppSelector } from 'src/redux/store'
import { SortDirection, SortableTableColumn } from 'src/types'

interface ITableColumnProps {
  sortColumn?: SortableTableColumn
  className?: string | React.CSSProperties
  position?: string | React.CSSProperties
  children?: React.ReactNode
}

export const CryptoCurrencyTableColumn = ({
  children,
  className,
  position,
  sortColumn,
}: ITableColumnProps) => {
  const { column, direction } = useAppSelector(
    (state) => state.sortingTableSlice,
  )
  const dispatch = useAppDispatch()

  const onColumnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()

    if (!sortColumn) return

    const sortDirection: SortDirection = direction === 'asc' ? 'desc' : 'asc'

    dispatch(
      setSortingColumn({
        column: sortColumn,
        direction: sortDirection,
      }),
    )
  }

  return (
    <th
      className={`text-left py-3 ${className}`}
      onClick={(e) => onColumnClick(e)}
    >
      <div className={`flex flex-row items-center select-none ${position}`}>
        {children}
        {column === sortColumn ? (
          direction === 'asc' ? (
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
