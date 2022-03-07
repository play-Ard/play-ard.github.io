import { createContext } from "react";

export const ProjectsContext = createContext({});
/* 

    1 - Project Context yapısı oluşturulmalı
    2 - ProjectContext.Provider yapısı App.js dosyasında child componenetleri kapsamalı 
    3 - App.js dosyasında ilk parametre değişken ikinci parametre method
        const [widgetValue, setWidgetValue] = useState([]) 
    4 - Child componentlerde stateleri kullanmak için, hangi child componentse onun içinde useContext yapısı oluşturulmalı 
        const { setScreenSize, screenSize } = useContext(ProjectsContext); 
    5 - *Button onclick = clickHandler* gibi bir yapı ile state güncellemesi yapılır.
        const handleClick = e => {

            setWidgetValue(e);

            console.log(e.target.innerText);

            localStorage.setItem("widgetValue", e.target.innerText)
            
            }

 */