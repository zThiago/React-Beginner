import './Menu.css';
import '../styles/default.css';

function Menu(){
    return (
        <div className="topbar-div">
            <a className="topbar-content" href="/">Home</a>
            <a className="topbar-content" href="/todo">To do</a>
            <a className="topbar-content" href="/counter">Counter</a>
        </div>
    )
}

export default Menu