import * as React from "react";
import Header from "../../fragments/Header";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Card } from "antd";
import Item from "antd/lib/list/Item";

const { Meta } = Card;

export default function Home() {
  const [isData, setIsData] = React.useState();
  const [isDetail, setIsDetail]  = React.useState();

  React.useEffect(async() =>{
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`).then((res)=>{
        setIsData(res.data.results)
        console.log(res.data.results);
    })
     
  },[]);

  const nextData = isData.map((item) =>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${item.id}`).then((res)=>{
      setIsDetail(res.data.types[0])
      
    })
  })

   

  return (
    <div> 
      {isData !== undefined && isData !== null?<div>
      <Header/>
      {/* {isData.map((item)=>{
       return <div>
        <Card
          hoverable
          style={{ width: 140 }}
          cover={
            <img
              alt="example"
              src="https://cdn.majorcineplex.com/uploads/content/images/Screen_Shot_2018_11_12_at_12.24.40_PM.0.png"
            />
          }
        >
          <Meta
            key={item.id}
            title={item.name}
            
          />
        </Card>
      </div>
      })} */}
      </div>: <div>undifined</div> }

     
    </div>
  );
}

//https://github.com/rivera1294/pokemon/blob/master/src/App.js
//https://www.youtube.com/watch?v=HaEB0vdxpdg
