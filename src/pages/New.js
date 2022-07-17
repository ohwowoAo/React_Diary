import { useEffect } from "react";
import DiaryEditor from "../components/DiaryEditor";

// const getStringDate = (date) => {
//     return date.toISOString().slice(0,10);
// }

const New = () => {

    useEffect(()=> {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = `감정 일기장 - 새 일기`;
    },[]);

    return(
        <div>
            <DiaryEditor /> 
        </div>
    )
};

export default New;