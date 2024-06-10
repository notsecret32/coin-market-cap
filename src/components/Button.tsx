interface IButtonProps {
  children: React.ReactNode
}

export const Button = ({ children }: IButtonProps) => {
  return (
    <button className="bg-[#ebecf1] hover:bg-[#c5c5ca] px-3 py-2 rounded-xl font-semibold">
      {children}
    </button>
  )
}
