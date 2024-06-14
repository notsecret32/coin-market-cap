interface ITableCellProps {
  className?: string | React.CSSProperties
  children?: React.ReactNode
}

export const TableCell = ({ children, className }: ITableCellProps) => {
  return <td className={`font-inter py-3 ${className}`}>{children}</td>
}
