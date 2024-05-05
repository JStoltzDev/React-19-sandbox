import { useState, useTransition } from "react";
import { promise } from "../utils";

export default function UseTransition() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [error, setError] = useState(null);
  const [triggerError, setTriggerError] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    //No need for things like setIsPending, instead startTransition handles that automatically.
    startTransition(async () => {
      const newName = await promise(3000, name, triggerError)
      if (newName.error) {
        setError(newName.msg)
      }
      else {
        console.log(newName)
        setSubmittedName(newName)
      }
    })
  };

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />

      <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>

      <br />

      <div>
        <label htmlFor="error" onClick={() => setTriggerError(!triggerError)}>Trigger error <input type="checkbox" id="error" name="error" value={!triggerError} /></label>
      </div>

      {error && <p>{error}</p>}
      {submittedName && <p>Your name is: {submittedName}</p>}
    </div>
  )
}
