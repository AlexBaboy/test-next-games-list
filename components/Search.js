import React from "react";
import {StyledSearchBlock} from "./ui/StyledSearchBlock";

// eslint-disable-next-line react/display-name
const Search = React.forwardRef (({searchHandler, disabled}, ref) => {

    return (
        <StyledSearchBlock>
            <h3>Search by name</h3>
            <div>
                <input
                    disabled={disabled}
                    className='searchInputField'
                    type='text'
                    ref={ref}
                    onKeyDown={(e) => searchHandler(e)}
                    placeholder='fill the name and press ENTER'
                />
            </div>
        </StyledSearchBlock>
    )
})

export default Search
