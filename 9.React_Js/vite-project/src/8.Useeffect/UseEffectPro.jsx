import React, { useState } from 'react'
import { Button,Card } from 'reactstrap'
import UseEffectPro1 from './UseEffectPro1'
const NameArr = ["name1", "name2", "name1"]
export default function UseEffectPro() {
  let [userid, setUserid] = useState(1)
  return (
    <>
      {NameArr.map((e, i) => {
        // return <Card name={e} key={i} />;
      })}
      <Card name={NameArr[0]} />
      <Button onClick={() => setUserid(1)}>chnage-1</Button>
      <Button onClick={() => setUserid(2)}>chnage-2</Button>
      <UseEffectPro1 you={userid} />
    </>
  )
}
