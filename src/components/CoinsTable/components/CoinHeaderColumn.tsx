interface ICoinHeaderColumnProps {
  title?: string
  style: string
}

export const CoinHeaderColumn = ({ title, style }: ICoinHeaderColumnProps) => {
  return <th className={style}>{title}</th>
}
