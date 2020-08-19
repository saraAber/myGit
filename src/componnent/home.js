import React,{useState} from 'react'

const Home = () => {
const [mail, setMAil] = useState(false)
  return (
   <div>שלום וברכה, להמזון און ליין    <br/>
     כתובת האתר : https://hamazononline.com <br/>
     <a href="https://hamazononline.com" target="_blank">מעבר לאתר ההזמנות</a> <br/>
      כתובת מייל : <a href="#" >hamazononline@gmail.com</a> <br/> 
    טלפון : 025327277
</div>
  )
}

export default Home
