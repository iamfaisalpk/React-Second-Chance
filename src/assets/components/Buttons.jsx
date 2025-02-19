import React from "react"

const Buttons = ({handleClick,childern}) => {
    console.log(`rendering button-`, childern);
return (
    <>
        <button onClick={handleClick}>
            {childern}
        </button>
    </>
)
}

export default React.memo(Buttons);
