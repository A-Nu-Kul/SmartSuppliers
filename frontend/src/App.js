import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import ContactScreen from './screens/ContactScreen'
import ProductScreen from './screens/ProductScreen'
import WaterPumps from './pages/WaterPumps'
import CabelAndPannel from './pages/CabelAndPannel'
import Grinder from './pages/Grinder'
import SawMills from './pages/SawMills'
import RiceMillsAndCombineMills from './pages/RiceMillsAndCombineMills'
import CarWasher from './pages/CarWasher'
import BorewellSubmersible from './pages/BorewellSubmersible'
import WeldingMachine from './pages/WeldingMachine'
import InductionMotors from './pages/InductionMotors'
import GasGeyser from './pages/GasGeyser'
import VibratorAndNeedle from './pages/VibratorAndNeedle'
import Miscellaneous from './pages/Miscellaneous'
import Kirloskar from './pages/Kirloskar'
import Varuna from './pages/Varuna'
import Duke from './pages/Duke'
import Sharp from './pages/Sharp'
import Shiva from './pages/Shiva'
import Shimge from './pages/Shimge'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'



const App = () => {
  return (
  <Router>
    <Header />
    <main className='py-3'>
      <Container>
         <Route path='/order/:id' component={OrderScreen} />
         <Route path='/shipping' component={ShippingScreen} />
         <Route path='/payment' component={PaymentScreen} />
         <Route path='/placeorder' component={PlaceOrderScreen} />
         <Route path='/login/' component={LoginScreen} />
         <Route path='/register/' component={RegisterScreen} />
         <Route path='/profile/' component={ProfileScreen} />
         <Route path='/product/:id' component={ProductScreen} />
         <Route path='/cart/:id?' component={CartScreen} />
         <Route path='/admin/userlist' component={UserListScreen} />
         <Route path='/admin/user/:id/edit' component={UserEditScreen} />
         <Route path='/admin/productlist' component={ProductListScreen} exact />
         <Route path='/admin/productlist/:pageNumber' component={ProductListScreen} exact />
         <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
         <Route path='/admin/orderlist' component={OrderListScreen} />
         <Route path='/search/:keyword' component={HomeScreen} exact />
         <Route path='/page/:pageNumber' component={HomeScreen} exact />
         <Route path='/search/:keyword/page/:pageNumber' component={HomeScreen} exact />
         <Route path='/waterpumps' component={WaterPumps}/>
         <Route path='/CabelAndPannel' component={CabelAndPannel}/>
         <Route path='/Grinder' component={Grinder}/>
         <Route path='/SawMills' component={SawMills}/>
         <Route path='/RiceMillsAndCombineMills' component={RiceMillsAndCombineMills}/>
         <Route path='/CarWasher' component={CarWasher}/>
         <Route path='/BorewellSubmersible' component={BorewellSubmersible}/>
         <Route path='/WeldingMachine' component={WeldingMachine}/>
         <Route path='/InductionMotors' component={InductionMotors}/>
         <Route path='/GasGeyser' component={GasGeyser}/>
         <Route path='/VibratorAndNeedle' component={VibratorAndNeedle}/>
         <Route path='/Miscellaneous' component={Miscellaneous}/>
         <Route path='/Kirloskar' component={Kirloskar}/>
         <Route path='/Varuna' component={Varuna}/>
         <Route path='/Duke' component={Duke}/>
         <Route path='/Sharp' component={Sharp}/>
         <Route path='/Shiva' component={Shiva}/>
         <Route path='/Shimge' component={Shimge}/>
         <Route path='/contact' component={ContactScreen}/>
         <Route path='/about' component={AboutScreen}/>
         <Route path='/' component={HomeScreen} exact />
      </Container>
    </main>
    <Footer />
    </Router>
  );
}

export default App;
