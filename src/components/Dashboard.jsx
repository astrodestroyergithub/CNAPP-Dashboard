import { useDispatch, useSelector } from 'react-redux'
import Widget from './Widget'
import { setModalOpen, setActiveCategory } from '../store/dashboardSlice'
import './DashboardStyle.scss'

export default function Dashboard() {
  const dispatch = useDispatch();
  const { categories } = useSelector(s => s.dashboard);
  return (
    <div>
      {categories.map(cat=>{
        const active = cat.widgets.filter(w=>w.active);
        return (
          <section className="section" key={cat.id}>
            <div className="section-title">{cat.name}</div>
            <div className="grid">
              {active.map(w => <Widget key={w.id} widget={w} categoryId={cat.id} />)}
              {active.length < 6 && (
                <div className="placeholder card">
                  <div className="badge">Add Widget</div>
                  <div className="small">No. of widgets: {active.length}</div>
                  <button
                    className="btn"
                    onClick={()=>{ dispatch(setActiveCategory(cat.id)); dispatch(setModalOpen({open:true})); }}
                  >＋ Add Widget</button>
                </div>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
