import Navbar from "./components/Navbar";
import Item from "./components/Item";
import itemData from "./data";



function App() {

  const items = itemData.map(item => {
    return <Item 
            key={item.id}
            item={item}

            />
  })

  return (
    <div className="App">
      <Navbar />
      {/* <img src="./img/black-globe.png" className="globe-background" /> */}
      <section className="item-list">
        {items}
      </section>
    </div>
  );
}

export default App;
