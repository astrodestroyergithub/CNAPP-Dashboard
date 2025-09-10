import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../store/dashboardSlice';
// import BarGraphWithLegend from './BarGraphWithLegend';
import BarChart from './BarChart';
import StackedBarChart from './StackedBarChart';
import CloudAccountsDonutGraph from './CloudAccountsDonutGraph';
import RiskAssessmentDonutGraph from './RiskAssessmentDonutGraph';
import './Widget.scss';

export default function Widget({widget, categoryId}){
  const dispatch = useDispatch();
  return (
    <div className="card">
      <button className="x" title="Remove" onClick={()=>dispatch(removeWidget({categoryId, widgetId: widget.id}))}>×</button>
      <h4>{widget.name}</h4>
      {widget.type === 'donut-chart' ? (
        <>{widget.name === 'Cloud Accounts' ? (<>
            <CloudAccountsDonutGraph data={widget.data} />
            {/* <div style={{display:'flex', alignItems:'center', gap:16}}>
              <div className="donut" data-label={(widget.data?.total ?? widget.data?.critical ?? 0).toString()} />
              <div className="small">
                <div>• Connected: {widget?.data?.connected ?? '-'}</div>
                <div>• Disconnected: {widget?.data?.disconnected ?? '-'}</div>
              </div>
            </div> */}
          </>) : (<>
            <RiskAssessmentDonutGraph data={widget.data} />
          </>)
        }</>
      ) : <>{
        widget.type === 'bar-chart' ? (
          <>{typeof widget.data === 'string' ? 
            <>
                <span style={{marginTop: "2em"}} className="no-bar-chart">
                  <svg
                    className="stocks-icon"
                    viewBox="0 0 64 64"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="8" y="40" width="6" height="16" className="stocks-bar" />
                    <rect x="20" y="32" width="6" height="24" className="stocks-bar" />
                    <rect x="32" y="22" width="6" height="34" className="stocks-bar" />
                    <rect x="44" y="10" width="6" height="46" className="stocks-bar" />
                    {/* <polyline
                      points="4,52 16,34 28,36 40,18 52,10"
                      className="zigzag-line"
                    />
                    <circle cx="52" cy="10" r="2" className="arrow-tip" /> */}
                  </svg>
                </span>
                <div style={{marginTop: "1.8em"}} className="small">{
                  typeof widget.data === 'string' ? widget.data : 'Random value: ' + Math.floor(Math.random()*1000)
                }</div>
            </> : <>
                {/* <BarGraphWithLegend data={widget?.data} /> */}
                <BarChart data={widget?.data}/>
            </>} 
          </>
        ) : (<>
              {typeof widget.data === 'string' ? 
              <>
                <span>
                  <div className="no-stacked-bar-chart">
                    <svg
                      className="stacked-horizontal-bar-icon"
                      viewBox="0 0 64 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g className="bar-segment">
                        <rect x="2" y="4" width="12" height="8" />
                      </g>
                      <g className="bar-segment">
                        <rect x="14" y="4" width="16" height="8" />
                      </g>
                      <g className="bar-segment">
                        <rect x="30" y="4" width="10" height="8" />
                      </g>
                      <g className="bar-segment">
                        <rect x="40" y="4" width="18" height="8" />
                      </g>
                    </svg>
                  </div>
                  <div className="small">{
                    typeof widget.data === 'string' ? widget.data : 'Random value: ' + Math.floor(Math.random()*1000)
                  }</div>
              </span>
              </> : <div>
                  <StackedBarChart data={widget.data} />
              </div>}
            </>)
        }</> }
    </div>
  );
}
