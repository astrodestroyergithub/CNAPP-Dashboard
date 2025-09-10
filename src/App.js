import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import data from './assets/data.json';
import Dashboard from './components/Dashboard';
import AddWidgetModal from './components/AddWidgetModal';
import SearchBar from './components/SearchBar';
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
          {/* <div className="spacer" />
          <div className="search">
            <SearchBar value={globalSearch} onChange={(v)=>dispatch(setGlobalSearch(v))} />
          </div>
          <button className="btn primary" onClick={()=>dispatch(setModalOpen({open:true}))}>Add Widget</button> */}
        </div>
        <Dashboard />
        {isModalOpen && <AddWidgetModal />}
        <button className="btn primary add-floating" onClick={()=>dispatch(setModalOpen({open:true}))}>＋</button>
      </div>
    </>
  );
}
