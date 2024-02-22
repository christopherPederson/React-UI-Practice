import { useState } from "react";

export default function Dictionary() {
    let [word, setWord] = useState("");

    return (
        <>
        <input
            type="text"
            onChange={(e) => {
                setWord(e.target.value);
            }}
        />
        <p>Showing definition for "{word}"</p>
        </>
    );
}
