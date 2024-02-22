import { useEffect, useState } from "react";

export default function Dictionary() {
    let [word, setWord] = useState("");
    let [word2, setWord2] = useState("");
    useEffect(() => {
        console.log({ word });
    });

    return (
        <>
            <input
                type="text"
                onChange={(e) => {
                    setWord(e.target.value);
                }}
            />
            <p>Showing definition for "{word}"</p>
            <input
                type="text"
                onChange={(e) => {
                    setWord2(e.target.value);
                }}
            />
            <p>Showing definition for "{word2}"</p>
        </>
    );
}
