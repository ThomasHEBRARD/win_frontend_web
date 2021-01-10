import React, { useState } from "react";
import InputField from "./input";
import bottles from './services/api/bottles';

const App = () => {
    const [value, setValue] = useState('')
    const [suggestions, setSuggestions] = useState([])

    return (<>
        <InputField
            value={value}
            onChange={async newValue => {
                setValue(newValue);
                const data = await bottles.getBottles({ name: newValue })
                setSuggestions(data?.map((r: { name: any; }) => r.name));
            }} />
        {suggestions && suggestions.slice(0, 30)?.map(sugg => <div>{sugg}</div>)}
    </>
    );
}

export default App
