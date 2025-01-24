type TagProps ={
    text :string
}
export const Tag = ({ text }:TagProps) => {
  return (
    <p className="bg-(--Light-Grayish-Cyan-Bg) text-(--Desaturated-DarkCyan) font-bold px-3 py-0.5 text-[16px] rounded-md max-h-8">{text}</p>
  )
}
