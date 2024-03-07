import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Dashboard from './page/dashboard/Dashboard';
import Team from "./page/team/Team";
import Task from './page/task/Task';
import Calendar from './page/calendar/Calendar';
import FAQ from './page/faq/FAQ';
import Statistics from './page/statistics/Statistics';
import Piechart from './page/piechart/Piechart';
import Network from './page/responsiveNetwork/Network';






const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="task" element={<Task />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="statistics" element={<Statistics />} />
      <Route path="piechart" element={<Piechart />} />
      <Route path="Network" element={<Network />} />




    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
