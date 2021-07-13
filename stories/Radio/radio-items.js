import {InputTitle} from '../Input/input-styling'

export const printRadioItems = ({customName, customOptions}) =>{

    const allItems = customOptions.map((element) => {
        let items = []
        items.push(
            <> <label for={element}>
                <input type="radio" value={element} id={element} name={customName}/> 
               {element}</label>
            </>)
        return items
    });
      
    return allItems
}