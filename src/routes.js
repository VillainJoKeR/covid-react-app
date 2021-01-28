import React, { Suspense, lazy } from 'react'
import { Route, Switch } from "react-router-dom";

/* 
* Define all Lazy loaded components
*/
const Home = lazy(() => import('./components/home'))
const Resources = lazy(() => import('./components/resources'))

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
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					{routes.map((route, i) => {
						return <RouteWithSubRoutes key={route.key} {...route} />
					})}
					<Route component={() => <h1>Not Found!</h1>} />
				</Switch>
			</Suspense>
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
		path: "/resources",
		key: "APP_ROOT",
		exact: true,
		component: Resources,
	},
]

export default ROUTES
