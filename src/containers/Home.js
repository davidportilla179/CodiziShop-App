import ItemList from '../components/ItemList';

const Home = () => {
  return (
    <div>
      <img src="https://shop.codiziapp.com/wp-content/uploads/2021/09/COVER-CODIZISHOP.jpg" className="img-fluid" alt="cover-codizishop" />
      <div className="container mt-5">
        <h1 className="text-center">LO MÁS VENDIDO</h1>
        <ItemList />
      </div>
    </div>
  )
}

export default Home;
