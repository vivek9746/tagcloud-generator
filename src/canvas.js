import React from 'react'

function Canvas(props,ref) {
    return (
        // <div ref={ref}>
       
        // </div>

<canvas ref={ref}>
       
</canvas>
    )
}
const forwardedRef = React.forwardRef(Canvas);
export default forwardedRef;
