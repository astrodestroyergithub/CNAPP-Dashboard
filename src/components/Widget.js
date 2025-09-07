import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../store/dashboardSlice';

export default function Widget({widget, categoryId}){
  const dispatch = useDispatch();
  return (
    <div className="card">
      <button className="x" title="Remove" onClick={()=>dispatch(removeWidget({categoryId, widgetId: widget.id}))}>×</button>
      <h4>{widget.name}</h4>
      {widget.type === 'donut-chart' ? (
        <div style={{display:'flex', alignItems:'center', gap:16}}>
          <div className="donut" data-label={(widget.data?.total ?? widget.data?.critical ?? 0).toString()} />
          <div className="small">
            <div>• Connected: {widget?.data?.connected ?? '-'}</div>
            <div>• Disconnected: {widget?.data?.disconnected ?? '-'}</div>
          </div>
        </div>
      ) : (
        <div className="small">{
          typeof widget.data === 'string' ? widget.data : 'Random value: ' + Math.floor(Math.random()*1000)
        }</div>
      )}
    </div>
  );
}
