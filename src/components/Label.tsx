type LabelProps = {
    text: string,
    closeLabel :(text :string)=>void
}

export const Label = ({ text, closeLabel }:LabelProps) => {
  return (
    <div className="bg-(--Light-Grayish-Cyan-Bg) flex justify-between rounded-lg max-h-12">
        <p className="text-(--Desaturated-DarkCyan) font-bold px-4 py-2 text-sm">{text}</p>
        <button aria-label="close label"
            className="bg-(--Desaturated-DarkCyan) rounded-br-lg rounded-tr-lg px-2 cursor-pointer hover:bg-black"
            onClick={()=>closeLabel(text)}
        >
            <svg width="14" height="14"><path fill="#FFF" fillRule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/></svg>
        </button>
    </div>
  )
}
