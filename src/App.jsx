
import './App.css';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './components/MyCard.jsx';



function App() {
  

  return (
    <>
    
      
      
      <Header title = "Adopta un Perrito!"/>
       
       <div className='espacioCarta'>
      <MyCard
      image = "https://img.freepik.com/foto-gratis/adorable-perro-basenji-marron-blanco-sonriendo-dando-maximo-cinco-aislado-blanco_346278-1657.jpg?t=st=1709517316~exp=1709520916~hmac=88dae2cf7d346c2816760a4f59d49f3df8d5c77f3ac2fb54a25e49c338a21873&w=1800"
      title = "Capitán"
      descripcion = "Aventurero de sofás y chef de zapatos aficionado, busca socio humano"
      color="warning"
      text="Luna"
      />

      <MyCard
      image = "https://img.freepik.com/foto-gratis/carrera-perrito-maltipu-esta-planteando_155003-22631.jpg?t=st=1709517563~exp=1709521163~hmac=4f0f8108663e8d897584e247397258fb185fecd514c8eef39c75d15c49b82598&w=1380"
      title = "Lucho"
      descripcion = "Realeza del salón, especialista en dar vueltas elegantes y robar corazones con miradas tiernas."
      color="warning"
      text="Lucho"
      />

     
      <MyCard
      image = "https://img.freepik.com/foto-gratis/disparo-enfoque-selectivo-adorable-golden-retriever-al-aire-libre_181624-45215.jpg?t=st=1709517456~exp=1709521056~hmac=ea71c361aaaee95691b07f198e960b1e47e27183817e45a8d55a6b81e5505a91&w=1800"
      title = "Almendra"
      descripcion = "Maestro del escondite de calcetines y campeón mundial en carreras hacia la nada."
      color="warning"
      text="Almendra"
      />

<MyCard
      image = "https://img.freepik.com/foto-gratis/golden-retriever-crema-inglesa-aislado_155003-32567.jpg?t=st=1709517513~exp=1709521113~hmac=48e76b6a9a1e548a9a95ed136d6de8bead57be5f7381250368034f3daca625c6&w=1380"
      title = "Kim"
      descripcion = "Profesional en terapia de abrazos y especialista en curar días malos con lametones de amor."
      color="warning"
      text="Kim"
      />


     </div>
      
      <Footer/>

      
      
    </>
  )
}

export default App