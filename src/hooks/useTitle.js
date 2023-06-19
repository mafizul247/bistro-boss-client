import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Bistro Boss`
    }, [title])
};

export default useTitle;