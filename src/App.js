import './App.css';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import { Routes, Route } from 'react-router-dom';
import Authentication from './routes/authentication/authentication.component';
import { UserProvider } from './contexts/user.context';


function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />}/>
          <Route path='auth' element={<Authentication />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App; 