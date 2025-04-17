import react, { useEffect, useState } from "react"


const TrafficLight = () => {

    const [selected, setSelected] = useState ("red")
    const [active, setActive] = useState(false)

    const changeColor = (color) =>{
        setSelected(color)
    }

    useEffect(() => {
        if(active){
            const interval = setInterval(()=>{
                if (selected == "green") {
                    setSelected("yellow")
                } else if (selected == "yellow") {
                    setSelected("red")
                } else if (selected == "red") {
                    setSelected("green")
                }
            }, 2000)
            return () => clearInterval(interval)
        }
    }, [active, selected])
    
    return(
        <main>
            <div className="p-box"></div>
            <div className="box-light">
                
                <div 
                   className={`red ${selected == "red" ? "light-on" : ""}`}
                   onClick={()=>changeColor("red")}
                ></div>
                <div 
                   className={`yellow ${selected == "yellow" ? "light-on" : ""}`}
                   onClick={()=>changeColor("yellow")}
                ></div>
                <div 
                   className={`green ${selected == "green" ? "light-on" : "" }`}
                   onClick={()=>changeColor("green")}
                ></div>
            </div>
            <div className="button">
                <button onClick={() => setActive(!active)} className="btn btn-success">AUTO</button>
            </div>
        </main>
    )
}

export default TrafficLight;