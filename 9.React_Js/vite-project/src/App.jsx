
// import ClassCom from './2.components/ClassCom'
// import FunCom from './2.components/FunCom'

import { Button } from "reactstrap"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert2'
import ProductYable from "./4.ProductData/ProductYable"
import ConditionalRander from "./5.ConditionalRandering/ConditionalRander"
import StatePro1 from "./6.UseState/StatePro1"
import UseStateClass from "./6.UseState/UseStateClass"
import UseStateMethode from "./6.UseState/UseStateMethode"
import LifecycleTask from "./7.Lifecycle/LifecycleTask"
import StateClass from "./6.UseState/StateClass"
import UseEffectPro from "./8.Useeffect/UseEffectPro"
import UseEffectPro1 from "./8.Useeffect/useEffectPro1"
import PropsChange from "./3.Props/PropsChange"
import MultipleInputFun from "./9.Form/MultipleInputFun"
import Router from "./11.RouterFun/Router"
import MultipleInput from "./9.Form/MultipleInput"
import UseReducer from "./13.UseReducer/UseReducer"
import PasswordTask from "./13.UseReducer/PasswordTask"
import RouterPro from "./12.ProtectedRouter/Router/RouterPro"
import ToDolist from "./14.toDolistProject/Pages/ToDolist"
import ApiRouter from "./15.API/Router/ApiRouter"
import Product from "./15.API/ui/Pages/Product/Product";
import AppRedux from "./16.Redux/AppRedux";
import AppReduxAsmnt from "./17.Redux Asmnt/AppReduxAsmnt";
// import FormValidation from "./9.Form/FormValidation"
// import FormValidationTask from "./9.Form/FormValidationTask"



// import Homepage from "./2.components/Project/homepage"
// import PropsClassCom from "./3.Props/PropsClassCom"
// import PropsCom from "./3.Props/PropsCom"

function App() {
  return (
    <div>
      {/* <ClassCom /> */}
      {/* <FunCom /> */}
      {/* <h1>app</h1> */}

  
     {/* <PropsCom name = {"Pavan"}/>/ */}
     {/* <PropsClassCom data = {{name : "Pavan" , age : 23}}/> */}
     {/* <ProductYable/> */}
     {/* <ConditionalRander/> */}
     {/* <UseStateMethode /> */}
    {/* <UseStateClass/> */}
    {/* <StatePro1/> */}
    {/* <StateClass/>  */}
    {/* <LifecycleTask/> */}
    {/* <UseEffectPro/> */}
    {/* <UseEffectPro1/> */}
    {/* <PropsChange name={"Name1"}/> */}
    {/* <FormValidation/> */}
    {/* <FormValidationTask/> */}
    {/* <MultipleInput/> */}
    {/* <MultipleInputFun/> */}
    {/* <Homepage/> */}
    {/* <Router/> */}
    {/* <UseReducer/> */}
    {/* <PasswordTask/> */}
    {/* <RouterPro/> */}
    {/* <ToastContainer/> */}
    {/* <ToDolist/> */}
    <AppRedux/>
    {/* <ApiRouter/> */}
    {/* <Product/> */}
    {/* <AppReduxAsmnt/> */}
    </div>

  )
}

export default App
