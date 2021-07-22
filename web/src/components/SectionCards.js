import {useEffect, useState} from "react";
import Card from "./Card"
import './SectionCards.css'

const SectionCards = ()=>{
    const [produtos,setProdutos] = useState();
    useEffect(()=>{
        const fakeProdutos =
            fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
            .then(json=>setProdutos(json))

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