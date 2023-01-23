import './App.css';
import Image from './Image';
import cat from './cat.jpg'

function App() {
  return (
    <div>
      <Image alternativeText={ `Cute cat staring`} source={cat} />
    </div>
  );
}

export default App;
