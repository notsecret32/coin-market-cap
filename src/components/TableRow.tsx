interface ITableRowProps {
  onClick?: (e: React.MouseEvent<HTMLTableRowElement>) => void
  className?: string | React.CSSProperties
  children?: React.ReactNode
}

export const TableRow = ({ children, className, onClick }: ITableRowProps) => {
  return (
    <tr
      className={`border-b border-[#f0f1f6] hover:bg-[#e7e7e9] cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </tr>
  )
}
