import React from "react";
import {StyledFiltersPlatformBlock} from "./ui/StyledFiltersPlatformBlock";

// eslint-disable-next-line react/display-name
const PlatformsList = React.forwardRef(({platforms, onChange, disabled}, ref) => {

    return (
        <StyledFiltersPlatformBlock>
            <h3>Platforms</h3>
            <select disabled={disabled} className='platformsSelect' ref={ref} onChange={(e) => onChange(e.target.value)}>
                <option value='0'>clear</option>
                { platforms?.results?.map( el => (
                    <option value={el.id} key={el.id}>{el.name}</option>
                ))}
            </select>
        </StyledFiltersPlatformBlock>
    )
})

export default PlatformsList
