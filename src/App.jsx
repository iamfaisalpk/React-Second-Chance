import Routing from './assets/components/Router';
import {BrowserRouter as  Router , Route} from 'react-router-dom';

const App = () => {
  return (
    <>
      {/* <UseState/> */}
      {/* <UseReducer/> */}
      {/* <Namec/> */}
      {/* <Another/> */}
      {/* <UseContext/> */}
      {/* <UseCallback/> */}
      {/* <MyComponent/> */}
      {/* <UseMemo/> */}
      <BrowserRouter>
        <Router>
          < Route path='/'Component={Routing} />
        </Router>
      </BrowserRouter>
    </>
  )
}

export default App;
