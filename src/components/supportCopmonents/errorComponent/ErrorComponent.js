import {wrapper, msg} from './styles.module.css';

const ErrorComponent = ({message}) =>{
    return (
        <div className={wrapper}>
            <p className={msg}>
                {message}
            </p>
        </div>
    )
}

export default ErrorComponent;