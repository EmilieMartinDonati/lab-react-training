// import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import Dice from './components/Dice';
import ClickablePicture from './components/ClickablePicture';
import Carousel from './components/Carousel';
import Img from "./assets/images/maxence.png";
import ImgClicked from './assets/images/maxence-glasses.png';
import NumbersTable from './components/NumbersTable';
import Facebook from './components/Facebook';

function App() {
  const john = {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: new Date('1992-07-14'),
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  };

  const dolores = {
    lastName: 'Delores',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: new Date('1988-05-11'),
    picture: 'https://randomuser.me/api/portraits/women/44.jpg',
  };

  const numbers = {
    min: 1,
    max: 70,
  };

  const languages = {
    en: 'Hello',
    fr: 'Bonjour',
    de: 'Hallo',
    es: 'Hola',
  };

  function Randomize(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const result = Randomize(numbers.min, numbers.max);

  // ColorBox.

  const colors = {
    r: Randomize(0, 255),
    g: Randomize(0, 255),
    b: Randomize(0, 255),
  };

  console.log(colors.r);

  return (
    <div className="App">
      <header className="App-header">
        <hr></hr>
        <h1>ITERATION 1</h1>
        <IdCard
          lastName={john.lastName}
          firstName={john.firstName}
          gender={john.gender}
          height={john.height}
          birth={john.birth}
          picture={john.picture}
        />

        <IdCard
          lastName={dolores.lastName}
          firstName={dolores.firstName}
          gender={dolores.gender}
          height={dolores.height}
          birth={dolores.birth}
          picture={dolores.picture}
        />
        <hr></hr>
        <h1>ITERATION 2</h1>
        <Greetings lang={languages.de}>Ludwig</Greetings>
        <Greetings lang={languages.fr}>François</Greetings>
        <hr></hr>
        <h1>ITERATION 3</h1>
        <Random result={result} />
        <hr></hr>
        <h1>ITERATION 4</h1>
        <BoxColor r={colors.r} g={colors.g} b={colors.b} />
        <hr></hr>
        <h1>ITERATION 5</h1>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
        <hr></hr>
        <h1>ITERATION 6</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
        <hr></hr>
        <h1>ITERATION 7</h1>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: 'Toyota Corolla Altis',
            licensePlate: 'CO42DE',
          }}
        />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: 'Audi A3',
            licensePlate: 'BE33ER',
          }}
        />
        <hr></hr>
        <h1>ITERATION 8</h1>
        <LikeButton />
        <hr></hr>
        <h1>ITERATION 9</h1>
        <ClickablePicture
          img={Img}
          imgClicked={ImgClicked}
        />
        <hr></hr>
        <h1>ITERATION 10</h1>
        <Dice />
        <hr></hr>
        <h1>ITERATION 11</h1>
        <Carousel images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]} />
        <hr></hr>
        <h1>ITERATION 12</h1>
        <NumbersTable limit={12} />
        <hr></hr>
        <h1>ITERATION 13 & 14</h1>
        <Facebook />
      </header>
    </div>
      );
}

      export default App;
