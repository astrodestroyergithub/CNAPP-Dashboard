import { useDispatch } from 'react-redux'
import { removeWidget } from '../store/dashboardSlice'
import BarChart from './BarChart'
import StackedBarChart from './StackedBarChart'
import CloudAccountsDonutGraph from './CloudAccountsDonutGraph'
import RiskAssessmentDonutGraph from './RiskAssessmentDonutGraph'
import SegmentedCircle from './SegmentedCircle'
import TicketCard from '../components/widgets/ticket/TicketCard'
import './Widget.scss'

export default function Widget({widget, categoryId}){
  const dispatch = useDispatch();
  return (
    <div className="card">
      <button className="x" title="Remove" onClick={()=>dispatch(removeWidget({categoryId, widgetId: widget.id}))}>×</button>
      <div className='widget-name'>{widget.name}</div>
      {widget.type === 'donut-chart' ? (
        <>{typeof widget.data === 'string' ? /* Checking for data availability */ (
          <>
            <div className='no-segmented-circle-container'>
              <div className="no-segmented-circle">
                <SegmentedCircle />
              </div>
              <div className="small">{
                typeof widget.data === 'string' ? widget.data : 'Random value: ' + Math.floor(Math.random()*1000)
              }</div>
            </div>
          </>
        ) : 
          <>
            <>{widget.name === 'Cloud Accounts' ? (<>
              <CloudAccountsDonutGraph data={widget.data} />
              </>) : (<>
                <RiskAssessmentDonutGraph data={widget.data} />
              </>)
            }</>
          </>
        }</>
      ) : <>{
        widget.type === 'bar-chart' ? (
          <>{typeof widget.data === 'string' ? /* Checking for data availability */
            <div className='no-bar-chart-container'>
                <div className="no-bar-chart">
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
                  </svg>
                </div>
                <div className="small">{
                  typeof widget.data === 'string' ? widget.data : 'Random value: ' + Math.floor(Math.random()*1000)
                }</div>
            </div> : <>
                <BarChart data={widget?.data}/>
            </>} 
          </>
        ) : (<>{
            widget.type === 'stacked-bar-chart' ? (
              <>
                {typeof widget.data === 'string' ? /* Checking for data availability */
                <>
                  <div className='no-stacked-bar-chart-container'>
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
                  </div>
                </> : <div>
                    <StackedBarChart data={widget.data} registry={widget.name} />
                </div>}
              </>
              ) : (
                <>{(typeof widget.data === 'string' && widget.data === 'No graph data available!') ? /* Checking for data availability */ (
                  <> 
                    <div className='no-ticket-container'>
                      <div className='no-ticket'>
                        <SegmentedCircle/>
                      </div>
                      <div className="small">
                        {widget.data}
                      </div>
                    </div>
                  </>) : (<>
                    <div className='ticket'>
                      <TicketCard ticket={widget.data}/>
                    </div>
                  </>)
                }</>
              )
          }</>)
        }</> }
    </div>
  );
}
