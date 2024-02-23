import { useEffect } from "react";

export default function Definition() {
    useEffect(() => {
        fetch("https://api.dictionaryapi.dev/api/v2/entries/en/word").then(
            (response) => {
                response.json().then((data) => {
                    console.log(data);
                });
            }
        );
    }, []);

    return (
        <div>
            <p>check console</p>
        </div>
    );
}
