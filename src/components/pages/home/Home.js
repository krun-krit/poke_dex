import * as React from 'react'
import Header from '../../fragments/Header'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Card } from 'antd'
import Item from 'antd/lib/list/Item'

const { Meta } = Card

export default function Home() {
  const [isData, setIsData] = React.useState()

  React.useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`).then((res) => {
      console.log('res', res)

      const pokeList = res.data.results
      pokeList.forEach((item) => {
        axios.get(item.url).then((val) => {
          item.detail = val
        })
      })
      setIsData(pokeList)
      console.log('pokeList', pokeList)
    })
  }, [])

  return (
    <div>
      {isData !== undefined && isData !== null ? (
        <div>
          <Header />
          {isData.map((item) => {
            return (
              <div>
                <Card
                  hoverable
                  style={{ width: 140 }}
                  cover={
                    <img alt="example" src={item.id.sprites.other.dream_world.front_default} />
                  }
                >
                  <Meta key={item.id} title={item.name} description={item.url} />
                </Card>
              </div>
            )
          })}
        </div>
      ) : (
        <div>undifined</div>
      )}
    </div>
  )
}

//https://github.com/rivera1294/pokemon/blob/master/src/App.js
//https://www.youtube.com/watch?v=HaEB0vdxpdg
