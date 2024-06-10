interface IButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  className?: React.HTMLAttributes<HTMLDivElement> | string
  children: React.ReactNode
}

export const Button = ({ children, onClick, className }: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#ebecf1] hover:bg-[#c5c5ca] px-3 py-2 rounded-xl font-semibold ${className}`}
    >
      {children}
    </button>
  )
}
