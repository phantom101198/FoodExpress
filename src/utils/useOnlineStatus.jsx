import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);
    const [onlineText, setOnlineText] = useState("Online");

    useEffect(() => {
        window.addEventListener("online", () => {
            setOnlineStatus(true);
            setOnlineText("Online");
        })
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
            setOnlineText("Offline");
        })
    }, [])

    return {onlineStatus, onlineText};
}

export default useOnlineStatus;