import logo from '../../imagens/logo.svg'
import './estilo.css'
export default function Logo(){
    return(
    <div className='logo'>
        <img className='logoImg' src={logo} alt='logo'></img>
        <p><strong>Alura </strong> Books</p>
    </div>
    )
}