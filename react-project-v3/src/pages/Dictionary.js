import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Dictionary() {
    let [word, setWord] = useState("");
    const navigate = useNavigate();

    return (
        <>
            <input
                type="text"
                onChange={(e) => {
                    setWord(e.target.value);
                }}
            />
            <button onClick={() => {
                navigate("/Definition/" + word);
            }}>Search</button>
        </>
    );
}
