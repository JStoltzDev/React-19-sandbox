import { useState, useOptimistic } from "react"
import { promise } from "../utils"

export default function UseOptimistic() {
    const [currentName, setCurrentName] = useState("");
    const [triggerError, setTriggerError] = useState(false);
    const [optimisticName, setOptimisticName] = useOptimistic(currentName);

    const [useTheState, setUseTheState] = useState(false)
    const [optimisticNameUseState, setOptimisticNameUseState] = useState(currentName)

    const submitAction = async formData => {
        const newName = formData.get("name");
        //Updates value immediately, not awaiting the rest of the function like it would with useState.
        setOptimisticName(newName);
        const updatedName = await promise(3000, newName, triggerError);
        if (updatedName?.error) {
            setOptimisticName(currentName)
        }
        else {
            setCurrentName(updatedName);
        }
    };

    const submitActionUseTheState = async formData => {
        const newName = formData.get("name");
        //Updates value immediately, not awaiting the rest of the function like it would with useState.
        setOptimisticNameUseState(newName);
        const updatedName = await promise(3000, newName, triggerError);
        if (updatedName?.error) {
            setOptimisticNameUseState(currentName)
        }
        else {
            setCurrentName(updatedName);
        }
    };

    return (
        <>
            <form action={useTheState ? submitActionUseTheState : submitAction}>
                <p>Your name is: {useTheState ? optimisticNameUseState : optimisticName}</p>
                <p>
                    <label>Change Name:</label>
                    <input
                        type="text"
                        name="name"
                        disabled={useTheState ? currentName !== optimisticNameUseState : currentName !== optimisticName}
                    />
                </p>

            </form>
            <div>
                <label htmlFor="error" onClick={() => setTriggerError(!triggerError)}>
                    Trigger error
                    <input type="checkbox" name="error" value={triggerError} checked={triggerError} readOnly />
                </label>
            </div>
            <div>
                <label htmlFor="useTheState" onClick={() => setUseTheState(!useTheState)}>
                    Run with useState instead of useOptimistic to see difference
                    <input type="checkbox" name="useTheState" value={useTheState} checked={useTheState} readOnly />
                </label>
            </div>
        </>
    );
}