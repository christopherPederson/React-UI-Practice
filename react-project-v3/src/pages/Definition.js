import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function Definition() {
    let { search } = useParams();
    let [searchResults, setSearchResults] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search)
            .then((response) => {
                if (response.status === 404){
                    navigate('/404');
                }
                return response.json();
            })
            .then((data) => {
                setSearchResults(data[0].meanings);
            });
    }, []);

    return (
        <>
            {searchResults
                ? searchResults.map((meaning) => {
                      return (
                          <>
                              <p key={uuidv4()}>
                                  {meaning.partOfSpeech + ": "}
                                  {meaning.definitions[0].definition}
                              </p>
                          </>
                      );
                  })
                : null}
        </>
    );
}
