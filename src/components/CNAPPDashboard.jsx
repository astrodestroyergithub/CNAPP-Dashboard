import Header from './Header'
import Footer from './Footer'
import '../index.css'
import HeaderToolbarSection from './HeaderToolbarSection'
import Dashboard from './Dashboard'
import { useSelector, useDispatch } from 'react-redux'
import { setModalOpen } from '../store/dashboardSlice'
import AddWidgetModal from './AddWidgetModal'

const CNAPPDashboard = () => {
    const dispatch = useDispatch()
    const { isModalOpen } = useSelector((state) => state.dashboard)
    return (
        <>
            <Header pageName={'Dashboard V2'} />
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
            <Footer/>
        </>
    )
}

export default CNAPPDashboard
