import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import data from './assets/data.json';
import Dashboard from './components/Dashboard';
import AddWidgetModal from './components/AddWidgetModal';
import Header from './components/Header';
import HeaderToolbarSection from './components/HeaderToolbarSection';
import { initialize, setGlobalSearch, setModalOpen } from './store/dashboardSlice';

export default function App(){
  const dispatch = useDispatch();
  const { isModalOpen, globalSearch } = useSelector((state) => state.dashboard);
  useEffect(()=>{ dispatch(initialize(data)); },[dispatch]);
  return (
    <>
      <Header />
      <div className="container">
        <div style={{display: "flex"}} className="header">
          <h1>CNAPP Dashboard</h1>
          <div style={{marginLeft: "auto"}}>
            <HeaderToolbarSection />
          </div>
        </div>
        <Dashboard />
        {isModalOpen && <AddWidgetModal />}
        {!isModalOpen && <button className="btn primary add-floating" onClick={()=>dispatch(setModalOpen({open:true}))}>＋</button>}
      </div>
    </>
  );
}
