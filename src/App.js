import logo from './logo.svg';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./blockMain/Main";
import {Skills} from "./Skills/Skills";
import {Works} from "./Works/Works";
import {Contacts} from "./Сontacts/Contacts";
import {Footer} from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
