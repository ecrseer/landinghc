import {useEffect, useState} from "react";
import Card from "./Card"
import './SectionCards.css'

const SectionCards = ()=>{
    const [produtos,setProdutos] = useState();
    useEffect(()=>{


    },[])
    return(
        <div className="SectionCards">
            <Card/>
            <Card/>
            <Card/>

            <Card/>
            <Card/>
            <Card/>

            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}
export default SectionCards;