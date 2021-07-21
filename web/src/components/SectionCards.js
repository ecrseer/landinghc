import {useEffect, useState} from "react";
import Card from "./Card"
const SectionCards = ()=>{
    const [produtos,setProdutos] = useState();
    useEffect(()=>{
        const fakeProdutos =
            fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
            .then(json=>setProdutos(json))

    },[])
    return(
        <div>
            <Card/>
            <Card/>
            <Card/>
            {produtos? produtos.map(produto=>
                <h1>1</h1>
            ):
                <div></div>}



        </div>
    )
}
export default SectionCards;