import { Route, Routes } from "react-router-dom";
import { Home } from './pages/home'
import { Contact } from './pages/contact'
import { Store} from './pages/store'
import { Item } from './pages/item'
import { NotFound } from "./pages/notFound";
import { Cart } from "./pages/cart";
import { Footer } from "./components/footer";
import { StickyBanenr } from "./components/stickyBanner";
import NavBar from "./components/navbar"
import 'flowbite'


function App() {
  return (
    <>
   <NavBar />
   <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/store">
        <Route index element={<Store/>}/>
        <Route path=":id" element={<Item/>} />
      </Route>
      <Route path="/cart" element={<Cart />}/>
      <Route path="*" element={<NotFound/>}/>
   </Routes>
   <StickyBanenr />
   <Footer/>
   </>
  );
}

export default App;
