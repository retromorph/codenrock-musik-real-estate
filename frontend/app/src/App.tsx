import React from 'react';
import './App.css';

import { Route, Routes } from "react-router-dom";

import { AuthPage } from "./pages/auth/auth-page";
import { UserProfilePage } from "./pages/user-profile/user-profile-page";
import { CatalogPage } from "./pages/catalog/catalog-page";
import { CalendarPage } from "./pages/calendar/calendar-page";
import { CreateWorkGroupPage } from "./pages/create-work-group/create-work-group-page";

import { useDispatch } from "react-redux";
import {ObjectPage} from "./pages/object-page/object-page";
import {CreateObjectPage} from "./pages/create-object/create-object-page";


function App() {

  const dispatch = useDispatch()

  React.useEffect(() => {
      dispatch({
          type: 'setUser',
          user: {
              id: 1,
              first_name: 'Иван',
              second_name: 'Иванович',
              last_name: 'Иванов',
              email: 'ivanov@mail.ru',
              phone: '+71234567890',
              role: 'Админ',
              image_src: 'https://amiel.club/uploads/posts/2022-03/1647762844_3-amiel-club-p-kartinki-litsa-cheloveka-3.png',
          }
      })
      dispatch({
          type: 'setWorkGroups',
          workGroups: [
              {info: {value: 1, name: 'Первая группа'}, plans: [{date: '2023-04-09', url: 'zoom213123231', time: '18:00'}, {date: '2023-04-15', url: 'zoom232', time: '18:00'}, {date: '2023-05-02', url: 'skype', time: '18:00'},]},
              {info: {value: 2, name: 'Вторая группа'}, plans: [{date: '2023-04-10', url: 'zoom213123231', time: '15:00'}, {date: '2023-04-17', url: 'zoom232', time: '18:00'}, {date: '2023-05-09', url: 'skype', time: '18:00'},]},
              {info: {value: 3, name: 'Третья группа'}, plans: [{date: '2023-04-11', url: 'zoom213123231', time: '12:00'}, {date: '2023-04-05', url: 'zoom232', time: '18:00'}, {date: '2023-05-22', url: 'skype', time: '18:00'},]},
            ]})
  }, [])

  return (
    <div className="App">
        <Routes>
            <Route path={'/auth'} element={<AuthPage/>}/>
            <Route path={'/profile'} element={<UserProfilePage/>}/>
            <Route path={'/catalog'} element={<CatalogPage/>}/>
            <Route path={'/catalog/:id'} element={<ObjectPage />}/>
            <Route path={'/create'} element={<CreateObjectPage />}/>
            <Route path={'/calendar'} element={<CalendarPage/>}/>
            <Route path={'/createWorkGroup'} element={<CreateWorkGroupPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
