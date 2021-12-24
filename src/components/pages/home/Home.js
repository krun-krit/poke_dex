import * as React from 'react'
import Header from '../../fragments/Header'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Card } from 'antd'
import Item from 'antd/lib/list/Item'

const { Meta } = Card

export default function Home() {
  const [isData, setIsData] = React.useState([])

  React.useEffect(() => {
    async function callApi() {
      let result = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151%27')
      let newArray = []
      result.data.results.forEach(async (element) => {
        let obj = {}
        obj = element
        let result2 = await axios.get(element.url)
        obj.detail = result2.data
        // console.log(`obj`, obj)
        newArray.push(obj)
        let newArr = isData
        newArr.push(obj)
        setIsData([...isData, newArr])
      })
    }
    callApi()
  }, [])

  console.log('item', isData)
  return (
    <div>
      {console.log(`data`, isData && isData[0])}
      {isData && isData[0] ? (
        <div>
          <Header />

          {isData.map((item) => {
            console.log('tt', item)
            return (
              <div>
                <Card
                  hoverable
                  style={{ width: 140 }}
                  cover={
                    <img
                      alt="example"
                      src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`}
                    />
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
