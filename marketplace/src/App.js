import { HashRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Routes from './Routes';
import GlobalStyle from './styles/global';
import {Container} from './styles/appStyle';


function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <Routes />
      </Container>
    </HashRouter>
  );
}

export default App;
