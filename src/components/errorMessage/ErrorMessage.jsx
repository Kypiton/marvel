import error from './error.gif';
import './ErrorMessage.scss';

const ErrorMessage = () => {
    return (
        <img src={error} alt="Error message" className='error' style={{display:'block', width: 250, height: 250, objectFit: 'contain', margin: '0 auto'}} />
    )
}

export default ErrorMessage;