import { StackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';

const App = StackNavigator({
   HomeScreen: { screen: HomeScreen },
  },
  {
   headerMode: 'screen',
   cardStyle: {
     backgroundColor: '#fff'
   },
});

export default App;
