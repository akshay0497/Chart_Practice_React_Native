import {View, Text} from 'react-native';
import MainScreen from './src/Task2/MainScreen';
import BottomNavigation from './src/Task2/BottomNavigation';
import {NavigationContainer} from '@react-navigation/native';
import FigmaUi from './src/Task/FigmaUi';

const App = () => {
  return (
    <NavigationContainer>
      <BottomNavigation />
      {/* <FigmaUi /> */}
    </NavigationContainer>
  );
};
export default App;
