import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function NewColorForm({addColor}){
     const [form,updateForm] = useState({name: '', hex: '#000000'});
     const history = useHistory();

     function handleChange(evt){
        updateForm(f => ({...f, [evt.target.name]: evt.target.value}));
     }

     function handleSubmit(evt){
        evt.preventDefault();
        addColor({[form.name]: form.hex});
        history.push('/colors')
     }

     const {name, hex} = form

    return (
        <div className="NewColorForm">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Color name</label>
                    <input name="name" 
                    id="name"
                    placeholder="Color name"
                    onChange={handleChange}
                    value={name}/>
                </div>
                <div>
                    <label htmlFor="hex">Color Hex</label>
                    <input name="hex"
                    id="hex"
                    type="color"
                    onChange={handleChange}
                    value={hex}/>
                </div>
                <input type="submit" value='Add this color'/>
            </form>
        </div>
    )
}

export default NewColorForm;