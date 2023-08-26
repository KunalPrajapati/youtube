import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

function App() {
  const appRouter = createBrowserRouter([

      {
        path: '/',
        element: <Body/>,
        children: [
          {
            path: '/',
            element: <MainContainer/>
          },
          {
            path: 'watch',
            element: <WatchPage />
          }
        ]
      }
    ]);

  return (
    <Provider store={store}>
      <div className="App relative">
        <div className='sticky top-0 z-20'><Head/></div>
        {/* <Body /> */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
