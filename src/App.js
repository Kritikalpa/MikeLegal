import './App.css';
import AppBar from './containers/AppBar';
import DashboardContainer from './containers/DashboardContainer';
import NavigationContainer from './containers/NavigationContainer';

function App() {
  return (
    <div className="App">
      <AppBar />
      <NavigationContainer />
      <DashboardContainer />
    </div>
  );
}

export default App;
