import React from 'react';
import Header from '../Header/Header';
import Info from '../Info/Info';
import About from '../About/About';
import Services from '../Services/Services';
import Rent from '../Rent/Rent';

interface PropsT {
  header: string,
  color: string, 
  key: number
}

const Data:PropsT[] = [{header: 'Годовое ТО', color: '#22356F', key: 1}, {header: 'Выравнивание колес', color: '#0052C1', key: 2}, {header: 'Настройка переключателей', color: '#76B58B', key: 3}]

function App() {
  return (
    <div>
      <Header/>
      <Info/>
      <About/>
      <Services Data={Data}/>
      <Rent/>
    </div>
  );
}

export default App;
