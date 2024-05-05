import { useActionState } from "react";
import { useFormStatus } from 'react-dom';

export default function UseActionState() {
    const [state, formAction] = useActionState(async (previousState, formData) => {
        const name = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(formData.get("newName"));
            }, 2000);
        })

        return [...previousState, name];
    }, []);

    return (
        <form action={formAction}>
            <input required name="newName" />
            <SubmitButton />
            <ul>
                {state.map((name, index) => <li key={index}><p>{name}</p></li>)}
            </ul>
        </form>
    )
}

function SubmitButton() {
    const { pending } = useFormStatus();
    return <button type="submit" disabled={pending}>{pending ? 'Loading' : 'Add'}</button>
}