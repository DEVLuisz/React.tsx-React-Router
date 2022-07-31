/* eslint-disable indent */
import Footer from 'Components/Footer';
import Header from 'Components/Header';
import Nav from 'Components/Nav';
import Cardapio from 'pages/Cardapio';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';
import Sobre from 'pages/Sobre';
import Inicio from 'pages/Start/inicio';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

export default function AppRouter() {
  return(
     <main className='container'>
       <BrowserRouter>
      <Nav />
       <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Inicio />}/>
          <Route path='cardapio' element={<Cardapio />}/>
          <Route path='sobre' element={<Sobre />}/>
        </Route>
        <Route path='prato/:id' element={<Prato />} />
        <Route path='*' element={<NotFound />} />
       </Routes>
       <Footer />
      </BrowserRouter>
     </main>
  );
}