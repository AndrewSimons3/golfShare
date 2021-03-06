import { Fragment, useCallback, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import { AuthContext } from './shared/context/auth-context';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userId, setUserId] = useState(false);

	const login = useCallback((uid) => {
		setIsLoggedIn(true);
		setUserId(uid);
	}, []);

	const logout = useCallback(() => {
		setIsLoggedIn(false);
		setUserId(null);
	}, []);

	let routes;

	if (isLoggedIn) {
		routes = (
			<Fragment>
				<Route path='/' element={<Users />} />
				<Route path='/:userId/places' element={<UserPlaces />} />
				<Route path='/places/new' element={<NewPlace />} />
				<Route path='/places/:placeId' element={<UpdatePlace />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Fragment>
		);
	} else {
		routes = (
			<Fragment>
				<Route path='/' element={<Users /> } />
				<Route path='/:userId/places' element={<UserPlaces />} />
				<Route path='/auth' element={<Auth />} />
				<Route path='*' element={<Navigate to='/auth' replace />} />
			</Fragment>
		);
	}

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				userId: userId,
				login: login,
				logout: logout,
			}}
		>
			<BrowserRouter>
				<MainNavigation />
				<main>
					<Routes>{routes}</Routes>
				</main>
			</BrowserRouter>
		</AuthContext.Provider>
	);
}

export default App;
