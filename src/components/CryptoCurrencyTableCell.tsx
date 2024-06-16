interface ITableCellProps {
  className?: string | React.CSSProperties
  children?: React.ReactNode
}

export const CryptoCurrencyTableCell = ({
  children,
  className,
}: ITableCellProps) => {
  return <td className={`font-inter py-3 ${className}`}>{children}</td>
}
