import * as React from "react";
import Header from "../../fragments/Header";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Card } from "antd";
import Item from "antd/lib/list/Item";

const { Meta } = Card;

export default function Home() {
  const [isDetail, setIsDetail] = React.useState();

  React.useEffect(() =>{
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`).then((res)=>{
        setIsDetail(res.data.results)
        console.log(res.data.results);
    })
  },[]);

   

  return (
    <div> 
      <Header/>
      {isDetail.map((item)=>{
        <div>
        <Card
          hoverable
          style={{ width: 240 }}
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
      })}
    </div>
  );
}
