import { createBrowserRouter } from 'react-router-dom';
import Home from "./components/pages/Home";
import Requests from "./components/pages/Requests";

const router = createBrowserRouter([
  { path: '/', element: <Home />, },
  { path: '/requests', element: <Requests />, },
]);
export default router;
