export type NavBarOption = {
  selected: boolean,
  icon: React.ReactNode,
  text: string,
  to: string
}

type NavBarProps = {
  options: NavBarOption[],
  onSelect: (o: NavBarOption) => void
}

function slectableStyle(selected: boolean): string {
  return selected ? `text-pink font-bold` : 'text-overlay0';
}

/**
 * В качестве ключа используется текст опции в меню, пожэтому он должен быть уникальным
 */
export default function NavBar({options, onSelect}: NavBarProps) {
  return (
    <div className="bg-base text-text flex flex-col place-items-center h-screen w-52 space-y-2 rounded-r-[28px]">
      <h1 className="py-14 text-lg font-bold">SpectruMine</h1>
      
      {options.map(option =>
      <div 
        className={`flex flex-row w-5/6 py-6 px-4 ${slectableStyle(option.selected)} hover:text-rosewater hover:ml-6 transition-all`} 
        key={option.text}
        onClick={() => onSelect(option)}
      >
          {option.icon}
          <h1 className={`select-none flex-1 text-end`}>{option.text}</h1>
      </div> 
      )}     
    </div>
  )
}