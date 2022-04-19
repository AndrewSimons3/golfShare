import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

function App() {
  return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Users />} />
				<Route path='*' element={<Navigate to='/' replace />} />
				<Route path='/places/new' element={<NewPlace />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
