import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import RootLayout from './assets/components/Root.Layout';
import Routing from './assets/components/Router';
import Products from './assets/components/Products';
import Difining from './assets/components/Products,Difining';
import Error from './assets/components/Error';


const router =  createBrowserRouter ([
  {path : '', element : <RootLayout/> ,errorElement : <Error/>, children :[
    {path : '', element : <Routing/>},
    {path : '/products', element : <Products/>},
    {path : '/products/:productid', element : <Difining/>},
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
