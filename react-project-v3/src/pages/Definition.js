import { useEffect, useState } from "react";

export default function Definition() {
    let [searchTerm, setSearchTerm] = useState("hello");
    let [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        fetch(
            "https://api.dictionaryapi.dev/api/v2/entries/en/" + searchTerm
        ).then((response) => {
            response.json().then((data) => {
                setSearchResults(data[0].meanings);
            });
        });
    }, []);

    return (
        <>
            {searchResults? searchResults.map((meaning) => {
                return (
                    <>
                        <p>
                            {meaning.partOfSpeech + ': '}
                            {meaning.definitions[0].definition}
                        </p>
                    </>
                );
            }): null}
        </>
    );
}
