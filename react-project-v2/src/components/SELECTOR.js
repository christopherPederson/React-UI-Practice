import "./SELECTOR.css";

let SELECTOR = () => {
    return (
        <div className="tile">
            <div className="InputWrapper">
                <h2>Gender</h2>
                <div className="checkWrapper">
                    <input type="checkbox" />
                    <h3>Male</h3>
                </div>
                <div className="checkWrapper">
                    <input type="checkbox" />
                    <h3>Female</h3>
                </div>
            </div>
            <div className="InputWrapper">
                <h2>Race</h2>
                <div className="checkWrapper">
                    <input type="checkbox" />
                    <h3>Caucasian</h3>
                </div>
            </div>
            <div className="InputWrapper">
                <div className="checkWrapper">
                    <input type="checkbox" />
                    <h3>Asian</h3>
                </div>
            </div>
        </div>
    );
};

export default SELECTOR;
