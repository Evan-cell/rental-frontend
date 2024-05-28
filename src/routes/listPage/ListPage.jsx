import React from 'react'
import { listData } from "../../lib/DummyData"
import "./ListPage.scss"
import Filter from '../../components/filter/Filter'
import Card from '../../components/card/Card'
function ListPage() {
  const data = listData
  return (
    <div className='listPage'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter/>
          {data.map(item=>(
            <Card key={item.id}/>
          ))}
        </div>
      </div>
      <div className="mapContainer">map</div>
    </div>
  )
}

export default ListPage