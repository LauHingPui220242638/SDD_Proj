import { useState } from "react";

interface Props {
    items : string[];
    heading : string;
    onSelectItem : (item:string) => void;
}

function ListGroup({items, heading, onSelectItem}:Props) {

    
    // items = [];
    function getMessage(item:string[]) {
        return item.length === 0 ? <p>No Item Found</p> : null
    }
    const [SelectedIndex, setSelectedIndex] = useState(1);
    return <>
        <h1>{heading}</h1>
        {getMessage(items)}
        <ul className="list-group">

            {items.map((item, index) =>
                <li
                    key={item}
                    className={`list-group-item ${SelectedIndex === index && 'active'}`}

                    onClick={()=>{
                        setSelectedIndex(index);
                        onSelectItem(item);
                        }
                    }
                    
                >{item}</li>)}
        </ul>
    </>;
}

export default ListGroup;