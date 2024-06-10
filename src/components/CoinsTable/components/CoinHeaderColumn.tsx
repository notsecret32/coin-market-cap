interface ICoinHeaderColumnProps {
  id: number
  title?: string
  style: string
}

export const CoinHeaderColumn = ({
  id,
  title,
  style,
}: ICoinHeaderColumnProps) => {
  const onColumnClick = () => {
    console.log(`Clicked on ${title} (${id})`)
  }

  return (
    <th className={style} onClick={() => onColumnClick()}>
      {title}
    </th>
  )
}
