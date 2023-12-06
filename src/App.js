import './App.css';
import Header from './Header';
import Body from './Body';
import { BrowserRouter, Outlet, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import ToDo from './ToDo';

// 3️⃣ Router singleton created
const router = createBrowserRouter([
  { path: "*", Component: Root },
]);

// 4️⃣ RouterProvider added
export default function App() {
  return(
    // <div>
    //   <Header/>
    //   <Body text="a body."/>
    //   <RouterProvider router={router} />
    // </div>
    // <RouterProvider router={router} />
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route exact path="/" element={<Body/>} />
          <Route path="/home" element={<Body/>} />
          <Route path="/to-do" element={<ToDo/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Root() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route exact path="/" element={<App/>} />
        <Route path="/home" element={<Body/>} />
        <Route path="/to-do" element={<ToDo/>} />
      </Route>
    </Routes>
    
  );
}

function Layout() {
  return (
    <>
      <Header/>
      <main>
        <Outlet />
      </main>
    </>
    
  );
}