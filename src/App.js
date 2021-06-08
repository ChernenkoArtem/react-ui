import './App.css';
import search from './images/search.svg'
import heart from './images/heart.svg'
import {cards} from './mocData/index'

function App() {
  return (
    <div className="App">
      <header className="header">
          <div className="header__img">
              <img src={search}  className="header__search-img"/>
          </div>
          <input className="header__search" placeholder="Search..."/>
      </header>
        <main className="main">
            {
                cards.map((card,index) => {
                    return (
                        <div className="card" key={index}>
                            <div className="heart">
                                <img src={heart}/>
                            </div>
                            <div className="card__img">
                                <img src={card.img}/>
                            </div>
                            <div className="card__description">
                                <div className="brand">{card.name}</div>
                                <div className="brand-2">{card.name}</div>
                            </div>
                        </div>
                    )
                })
            }

        </main>
    </div>
  );
}

export default App;
