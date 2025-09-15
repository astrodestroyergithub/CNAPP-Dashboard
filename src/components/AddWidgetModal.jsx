import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalOpen, addWidgets, removeWidget, setActiveCategory, setLatestWidgetId, setCategories } from '../store/dashboardSlice';
import SearchBar from './SearchBar';
import AddWidgetBar from './AddWidgetBar';

export default function AddWidgetModal(){
  const dispatch = useDispatch();
  const { categories, activeCategoryId, globalSearch, latestWidgetId } = useSelector(s=>s.dashboard);
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

  // Function to add a new widget to the correct category
  function addNewWidget(tab, newWidgetObj, categories) {
    if (typeof categories === 'string') {
      categories = JSON.parse(categories);
    }
    // Find the category based on the tab value
    const categoryIndex = categories.findIndex(cat => cat.id === tab);
    // If the category is found, add the new widget to the widgets array
    if (categoryIndex !== -1) {
      // Create a copy of the widgets array and add the new widget
      const updatedWidgets = [...categories[categoryIndex].widgets, newWidgetObj];
      // Create a new category object with the updated widgets array
      const updatedCategory = {
        ...categories[categoryIndex],
        widgets: updatedWidgets
      };
      // Create a new categories array with the updated category
      const updatedCategories = [
        ...categories.slice(0, categoryIndex),
        updatedCategory,
        ...categories.slice(categoryIndex + 1)
      ];
      // Dispatch the updated categories 
      dispatch(setCategories(updatedCategories)); 
    }
  }

  const onClose = ()=>dispatch(setModalOpen({open:false}));

  const onConfirm = ()=>{
    const selectedIds = (filtered[tab] || []).filter(w=>w._selected || w.active).map(w=>w.id);
    const newWidgetId = "w" + (parseInt(latestWidgetId.slice(1), 10) + 1);
    dispatch(setLatestWidgetId(newWidgetId));
    selectedIds.push(newWidgetId);
    dispatch(addWidgets({categoryId: tab, widgetIds: selectedIds}));
    dispatch(setActiveCategory(null));
    // Creating the object for the new widget
    const newWidgetObj = {
      "id": newWidgetId,
      "name": addWidgetName,
      "type": tab === 'c1' ? "donut-chart" : tab === 'c2' ? "bar-chart" : tab === 'c3' ? "stacked-bar-chart" : "random-text",
      "data": "No Graph data available!",
      "active": true
    };
    // Category list containing all the widgets including the recently added one
    addNewWidget(tab, newWidgetObj, categories);
    onClose();
  };

  const handleRemoveWidget = (w,c) => {
    if(!c) {
      removeWidget(w.id, categories);
    }
  };

  // Function to remove a widget from the correct category by id
  function removeWidget(removeWidgetId, categories) {
    if (typeof categories === 'string') {
      categories = JSON.parse(categories); 
    }
    // Find the category index containing the widget to be removed
    const categoryIndex = categories.findIndex(cat => 
      cat.widgets.some(widget => widget.id === removeWidgetId)
    );
    // If the category is found, remove the widget from the widgets array
    if (categoryIndex !== -1) {
      // Filter out the widget with the specified id from the widgets array
      const updatedWidgets = categories[categoryIndex].widgets.filter(widget => widget.id !== removeWidgetId);
      // Create a new category object with the updated widgets array
      const updatedCategory = {
        ...categories[categoryIndex],
        widgets: updatedWidgets
      };
      // Create a new categories array with the updated category
      const updatedCategories = [
        ...categories.slice(0, categoryIndex),
        updatedCategory,
        ...categories.slice(categoryIndex + 1)
      ];
      dispatch(setCategories(updatedCategories)); 
    }
  }

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
                checked={!!w.active}
                onChange={e=>{handleRemoveWidget(w, e.target.checked)}}
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
          <button className="btn primary" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
}
