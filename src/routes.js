import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* 
* Define all Lazy loaded components
*/
const Home = lazy(() => import('./components/home'))

/*
* Render a route with potential sub routes
* https://reacttraining.com/react-router/web/example/route-config
*/
const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  )
}

export const RenderRoutes = ({ routes }) => {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					{routes.map((route, i) => {
						return <RouteWithSubRoutes key={route.key} {...route} />
					})}
					<Route component={() => <h1>Not Found!</h1>} />
				</Switch>
			</Suspense>
		</Router>
		)
}

const ROUTES = [
	{ 
		path: "/", 
		key: "HOME", 
		exact: true, 
		component: Home
	},
	{
		path: "/app",
		key: "APP",
		component: RenderRoutes,
		routes: [
			{
				path: "/app",
				key: "APP_ROOT",
				exact: true,
				component: () => <h1>App Index</h1>,
			},
			{
				path: "/app/page",
				key: "APP_PAGE",
				exact: true,
				component: () => <h1>App Page</h1>,
			},
		],
	},
]

export default ROUTES