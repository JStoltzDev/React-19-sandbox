import { use, Suspense } from 'react';
import { promise } from "../utils"

function Comments({ commentsPromise }) {
    // `use` will suspend until the promise resolves.
    const comments = use(commentsPromise);
    return comments.map(comment => <p key={comment}>{comment}</p>);
}

export default function Page() {
    // When `use` suspends in Comments,
    // this Suspense boundary will be shown.
    const commentsPromise = promise(3000, ["Casper", "Jesper", "Jonathan"])
    return (
        <Suspense fallback={<div><p>Loading...</p></div>}>
            <Comments commentsPromise={commentsPromise} />
        </Suspense>
    )
}