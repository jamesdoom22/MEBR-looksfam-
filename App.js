import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';
import Subject from './screens/subject';
import Topic from './screens/topic';
import Review from './screens/review';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen options={({ route }) => ({
          headerStyle: { backgroundColor: '#252C4A' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold', fontcolor: 'white'
          }, title: route.params.name
        })} name="Subject" component={Subject} />
        <Stack.Screen options={({ route }) => ({
          headerStyle: { backgroundColor: '#252C4A' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontcolor: 'white'
          }, title: route.params.name
        })} name="Topic" component={Topic} />
        <Stack.Screen options={{ headerShown: false }} name="Quiz" component={Quiz} />
        <Stack.Screen options={{ headerShown: false }} name="Result" component={Result} />
        <Stack.Screen options={{
          headerStyle: { backgroundColor: '#252C4A' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold', fontcolor: 'white'
          }, title: 'Review Questions'
        }} name="Review" component={Review} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}