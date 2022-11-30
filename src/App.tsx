import NavBar from "./components/navbar/NavBar";
import Home from '@material-ui/icons/Home'
import Money from '@material-ui/icons/Money'
import Launch from '@material-ui/icons/Launch' 
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-mantle">
        <NavBar onSelect={()=>{}} options={[
          {
            selected: false,
            text: 'Главная',
            icon() {
              return <Home/>
            }
          },
          {
            selected: true,
            text: 'Лаунчер',
            icon() {
              return <Launch/>
            }
          },
          {
            selected: false,
            text: 'Проходка',
            icon() {
              return <Money/>
            }
          },
        ]}/>
      </div>
    </BrowserRouter>
  )
}
