import { useEffect, useRef, useState } from "react"
import Login from "../Login"


const PeopleContainer = ({recipeList}) => {

    const getId = useRef(null)
    const [getResult, setGetResult] = useState(null)
    async function getDataById () {
        const Id = getId.current.value
        if(Id){
            try{
                const Res = await fetch(`http;//localhost:8080/person/${Id}`)
                if(!Res.ok){
                    const message = `An error has occured: ${Res.status} - ${Res.statusText}`;
                    throw new Error(message);
                }
                const data = await Res.json()
                const Result = {
                    data: data,
                    status: Res.status,
                    statusText: Res.statusText,
                    headers: {
                      "Content-Type": Res.headers.get("Content-Type"),
                      "Content-Length": Res.headers.get("Content-Length"),
                    },
            };
            setGetResult(JSON.stringify(Result, null, 2))
        }
        catch(err){
            setGetResult(err.message)
        }
    } 
}

    const [peopleList, setPeopleList] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/person/all")
        .then(response => response.json())
        .then(data => setPeopleList(data))
    },[]);

    const handleSubmitLogin = () => {
        fetch("http;//localhost:8080/person/{id}")

     .then(response => response.json())
     .then(data => [...recipeList, data])

    }

    return(
        <>
        <Login peopleList={peopleList} recipeList={recipeList} onLogin={getDataById} getId={getId} />
        </>
    )
}

export default PeopleContainer;