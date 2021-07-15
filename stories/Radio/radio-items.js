import {InputTitle} from '../Input/input-styling'

export const printRadioItems = ({customName, customOptions,onChange,onBlur}) =>{

    const allItems = customOptions.map((element, index) => {
        let items = []
        items.push(
            <> <label htmlFor={element} >
                    <input type="radio" value={element} id={element} name={customName} onChange={onChange} 
                        onBlur={onBlur}  key={index + element}
                    /> 
               {element}</label>
            </>)
        return items
    });
      
    return allItems
}