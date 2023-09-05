import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ColorList from './ColorList';
import Color from './Color';
import NewColorForm from './NewColorForm';

function Routes(){
    const initialColors = {
        'red': '#FF0000',
        'blue': '#0000FF',
        'green': '#00FF00'
    }

    const [colors,updateColors] = useState(initialColors);

    function handleAdd(newColor){
        updateColors(prevColors => ({...prevColors, ...newColor}))
    }

    function renderColor(props){
        const {color} = props.match.params;
        const hex = colors[color];
        return <Color {...props} hex={hex} color={color} />
    }

    return (
        <Switch>
            <Route exact path='/colors'>
                <ColorList colors={colors}/>
            </Route>
            <Route exact path='/colors/new'>
                <NewColorForm addColor={handleAdd}/>
            </Route>
            <Route path='/colors/:color' render={renderColor}>
            </Route>
            <Redirect to='/colors'/>
        </Switch>
    )
}

export default Routes;