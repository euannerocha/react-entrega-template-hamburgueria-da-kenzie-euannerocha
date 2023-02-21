import imageLogo from '../../assets/images/logoBurger.png'
import { ContainerHeader } from './header'

function Header() {
    return (
        <ContainerHeader>
            <div className='imgLogoHeader'>
                <img src={imageLogo} />
            </div>
            <div className='inputButton'>
                <input className='inputSearch' type="text" placeholder="Digitar Pesquisa" />
                <button className='buttonSearch'>Pesquisar</button>
            </div>
        </ContainerHeader>
    )
}

export default Header 