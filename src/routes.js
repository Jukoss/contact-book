import HomePage from './containers/HomePage';

const routes = [
  {
    component: HomePage,
    path: '/',
    exact: true,
    loadData: () => {},
  }
]

export default routes;
