import { HashRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Routes from './Routes';
import GlobalStyle from './styles/global';
import {Container} from './styles/appStyle';
import GeneralProvider from './hooks/generalHook';


function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <GeneralProvider>
        <Container>
          <Sidebar />
          <Routes />
        </Container>
      </GeneralProvider>
    </HashRouter>
  );
}

export default App;
