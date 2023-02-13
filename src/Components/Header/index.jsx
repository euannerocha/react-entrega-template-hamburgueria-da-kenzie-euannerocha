import './header.css'
import imageLogo from '../../assets/images/logoBurger.png'

function Header() {
    return(
    <div className='containerHeader'>
        <div className='imgLogoHeader'>
            <img src={imageLogo} />
        </div>
        <div className='inputButton'>
            <input className='inputSearch' type="text" placeholder="Digitar Pesquisa" />
            <button className='buttonSearch'>Pesquisar</button>
        </div>
    </div>
    )
}

export default Header