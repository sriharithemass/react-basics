import "./MenuButton.css"

export default function MenuButton({isSelected,onSelect,children})
{
    return(
        <p className={isSelected?'btn active':'btn'} onClick={onSelect}>{children}</p>
    )
    
}