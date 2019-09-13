import { createStackNavigator, createAppContainer } from "react-navigation"
import Login from "../screens/login";
import Registration from "../screens/registration";
import List from "../screens/home";
import Form from "../screens/jobForm";
import splash from "../screens/splash";

const Navigation = createStackNavigator(
  {
    Splash: {
      screen: splash
    },
    Login: {
      screen: Login,
    },
    Registration: {
      screen: Registration,
    },
    List: {
      screen: List
    },
    Form: {
      screen: Form
    }
  },
  {
    initialRouteName: "Splash",
    headerMode: "none",
  }
)

const App = createAppContainer(Navigation);
export default App;
