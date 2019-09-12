import { createStackNavigator, createAppContainer } from "react-navigation"
import Login from "../screens/login";
import Registration from "../screens/registration";
import List from "../screens/home";
import Form from "../screens/jobForm";

const Navigation = createStackNavigator(
  {
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
    initialRouteName: "List",
    headerMode: "none",
  }
)

const App = createAppContainer(Navigation);
export default App;
