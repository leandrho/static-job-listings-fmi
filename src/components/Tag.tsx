import { useJobs } from "../hooks/useJobs"

type TagProps ={
    text :string
}
export const Tag = ({ text }:TagProps) => {
  const {addLabel} = useJobs();
  return (
    <button 
      className="bg-(--Light-Grayish-Cyan-Bg) text-(--Desaturated-DarkCyan) font-bold px-3 py-0.5 text-[16px] rounded-md max-h-8 hover:bg-(--Desaturated-DarkCyan) hover:text-white cursor-pointer"
      onClick={()=>addLabel(text)}
    >{text}</button>
  )
}
