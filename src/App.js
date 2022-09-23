// import logo from './logo.svg';
import './App.css';
import original from './products/original-cinnamon-roll.jpg';
import apple from './products/apple-cinnamon-roll.jpg';
import raisin from './products/raisin-cinnamon-roll.jpg';
import walnut from './products/walnut-cinnamon-roll.jpg';
import chocolate from './products/double-chocolate-cinnamon-roll.jpg';
import strawberry from './products/strawberry-cinnamon-roll.jpg';
import logo from './logo/logo-01.svg';

import Roll from './Roll.js';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <div className="list">
        <Roll 
          imageURL={original} 
          rollName="Original cinammon roll"
          price="2.49" />
        <Roll 
          imageURL={apple} 
          rollName="Apple cinammon roll"
          price="3.49" />
        <Roll 
          imageURL={raisin} 
          rollName="Raisin cinammon roll"
          price="2.99" />
      </div>

      <div className="list">
        <Roll 
          imageURL={walnut} 
          rollName="Walnut cinammon roll"
          price="3.49" />
        <Roll 
          imageURL={chocolate} 
          rollName="Double-chocolate cinammon roll"
          price="3.99" />
        <Roll 
          imageURL={strawberry} 
          rollName="Strawberry cinammon roll"
          price="3.99" />
      </div>
    </div>
  );
}

export default App;
