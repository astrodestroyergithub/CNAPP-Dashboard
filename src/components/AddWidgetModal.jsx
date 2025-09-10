import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalOpen, addWidgets, setActiveCategory } from '../store/dashboardSlice';
import SearchBar from './SearchBar';
import AddWidgetBar from './AddWidgetBar';

export default function AddWidgetModal(){
  const dispatch = useDispatch();
  const { categories, activeCategoryId, globalSearch } = useSelector(s=>s.dashboard);
  const [localSearch, setLocalSearch] = useState(globalSearch || '');
  const [tab, setTab] = useState(activeCategoryId || categories[0]?.id);
  const [addWidgetName, setAddWidgetName] = useState(null);

  const tabs = categories.map(c=>({id:c.id, name:c.name}));

  const filtered = useMemo(()=>{
    const q = (localSearch || '').toLowerCase();
    const byCat = {};
    categories.forEach(c=>{
      byCat[c.id] = c.widgets.filter(w=>w.name.toLowerCase().includes(q));
    });
    return byCat;
  }, [categories, localSearch]);

  const onClose = ()=>dispatch(setModalOpen({open:false}));
  const onConfirm = ()=>{
    const selectedIds = (filtered[tab] || []).filter(w=>w._selected || w.active).map(w=>w.id);
    dispatch(addWidgets({categoryId: tab, widgetIds: selectedIds}));
    dispatch(setActiveCategory(null));
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e=>e.stopPropagation()}>
        <header>
          <h3>Add Widgets</h3>
          <button className="x" onClick={onClose}>×</button>
        </header>

        <SearchBar value={localSearch} onChange={setLocalSearch} />

        <div className="tabs">
          {tabs.map(t=>(
            <button
              key={t.id}
              className={'tab ' + (tab === t.id ? 'active' : '')}
              onClick={()=>setTab(t.id)}
            >{t.name.split(' ')[0]}</button>
          ))}
        </div>

        <div className="list" style={{flex:1}}>
          {(filtered[tab] || []).map(w=>(
            <div className="item" key={w.id}>
              <label>{w.name}</label>
              <input
                type="checkbox"
                checked={!!w.active || !!w._selected}
                onChange={e=>{ w._selected = e.target.checked; }}
              />
            </div>
          ))}
          {(filtered[tab] || []).length === 0 && (
            <div className="small">No widgets match your search.</div>
          )}
        </div>

        {/* This is for entering the name of the new widget to be added */}
        <AddWidgetBar value={addWidgetName} onChange={setAddWidgetName} />

        <div className="modal-footer">
          <button className="link-like" onClick={onClose}>Cancel</button>
          <button style={{width: "7.8rem"}} className="btn primary" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
}
