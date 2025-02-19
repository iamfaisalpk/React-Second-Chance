import Products from './assets/components/Products';
import RootLayout from './assets/components/Root.Layout';
import Routing from './assets/components/Router';
import {createBrowserRouter , RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {path : '', element :<RootLayout/>, children:[
    {path: '',element : <Routing/>},
    {path: 'products',element : <Products/>},
  ]}
  
])

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
      <RouterProvider  router={router}/>
      
    </>
  )
}

export default App;
