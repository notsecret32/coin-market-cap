interface IInfoBlock {
  text: string
}

export const InfoBlock = ({ text }: IInfoBlock) => {
  return (
    <div className="w-screen mx-auto flex flex-col h-screen">
      <div className="bg-[#ebecf1] text-center py-32 mx-4 lg:mx-32 rounded-xl m-auto">
        <h1 className="font-semibold text-2xl">{text}</h1>
      </div>
    </div>
  )
}
