import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';
import Test from './test';
import Home from './home';
//import { PageTransition } from '@steveeeie/react-page-transition';
import Notfound from './Notfound';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Thread from './thread';
import Article from './components/article';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar logo={"/logo1.png"} name="نام برند" cart={1}/>
      <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/thread/:threadId" element={ <Thread />}/>
      <Route path="/article/:articleId" element={ <Article />}/>
      <Route path="test/:userId" element={ <Test/> } />
      <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer logo={"/logo1.png"} name="نام برند"/>

    </div>
  )
}

export default App
