import { useRef, useState } from "react"

function MyInput({ placeholder, ref }) {
    return <input placeholder={placeholder} ref={ref} />
}

export default function Ref() {
    const [showRef, setShowRef] = useState(true)
    const myRef = useRef("")

    return (
        <>
            <button onClick={() => console.log(myRef)}>Click to log ref</button>
            {showRef && <MyInput ref={myRef} />}
            <button onClick={() => setShowRef(!showRef)}>{showRef ? 'Click to kill the input' : 'Click to ressurect the input'}</button>
        </>
    )
}
