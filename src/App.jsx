import { HeartIcon, SpinnerIcon } from "./icons";
import { useState } from "react";
import "./App.css";

function App() {
    const [liked, setLiked] = useState(false);

    const handleLikeUnlike = () => {
        setLiked(!liked);
    };

    return (
        <div>
            <button
                className={`likeBtn ${liked ? "liked" : ""}`}
                onClick={handleLikeUnlike}
            >
                <HeartIcon /> {liked ? "Liked" : "Like"}
            </button>
        </div>
    );
}

export default App;
