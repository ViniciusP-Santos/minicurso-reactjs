import { TAREFA_STATUS } from "../Utils/Utils";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";

const Card = (props) => {
    const resolveBackground = 
        props.status === TAREFA_STATUS.AGUARDANDO ? '#F5F5F5'
        : props.status === TAREFA_STATUS.FINALIZADA ? '#e6faea' 
        : '#ffe6e6';

    const resolveTextColor = 
        props.status === TAREFA_STATUS.AGUARDANDO ? '#35383e'
        : props.status === TAREFA_STATUS.FINALIZADA ? '#176b29' 
        : '#800000';

    const resolveCheckBoxColor = 
        props.status === TAREFA_STATUS.AGUARDANDO ? '#e2e3e3'
        : props.status === TAREFA_STATUS.FINALIZADA ? '#176b29' 
        : '#800000';

    const resolveCheckBoxIcon = 
        props.status === TAREFA_STATUS.AGUARDANDO ? <IoClose size={32} color="#B6B7B9"/>
        : props.status === TAREFA_STATUS.FINALIZADA ? <FaCheck size={32} color="#fff"/>
        : <IoClose size={32} color="#fff"/>;

    return (
        <div 
            style={{
                width: '100%',
                backgroundColor: resolveBackground,
                padding: '16px',
                borderRadius: '22px',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '8px',
                boxShadow: '1px 2px 5px #eaeaea',
                 justifyContent: 'space-between'
            }}
        >
            <div
                style={{
                    display: 'flex'
                }}
            >
                <div 
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: resolveCheckBoxColor,
                        borderRadius: '8px',
                        width: '38px',
                        height: '38px',
                    }}
                >
                    {resolveCheckBoxIcon}
                </div>
                <p
                    style={{
                        marginBottom: 0,
                        marginTop: 0,
                        marginLeft: '16px',
                        color: resolveTextColor,
                        fontWeight: 'bold',
                        fontSize: '24px',
                    }}
                >{props.nome}</p>
            </div>
            <div
                style={{
                    display: 'flex'
                }}
            >
                {props.status === TAREFA_STATUS.AGUARDANDO && (
                    <div
                        style={{
                            display: 'flex'
                        }}
                    >   
                        <button
                            style={{
                                width: '38px',
                                height: '38px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#176b29',
                                borderRadius: '8px',
                                border: 0,
                                cursor: 'pointer'
                            }}
                            onClick={() => props.alterarStatus(TAREFA_STATUS.FINALIZADA)}
                        >
                            <FaCheck size={32} color="#fff"/>
                        </button>
                        <button
                            style={{
                                width: '38px',
                                height: '38px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#800000',
                                borderRadius: '8px',
                                border: 0,
                                cursor: 'pointer',
                                marginLeft: '8px'
                            }}
                            onClick={() => props.alterarStatus(TAREFA_STATUS.DESCARTADA)}
                        >
                            <IoClose size={32} color="#fff"/>
                        </button>
                    </div>
                )}

                <button
                    style={{
                        width: '38px',
                        height: '38px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#fd3e3e',
                        borderRadius: '8px',
                        border: 0,
                        cursor: 'pointer',
                        marginLeft: '8px'
                    }}
                    onClick={() => props.deletarTarefa()}
                >
                    <FaTrash size={16} color="#fff"/>
                </button>
            </div>
        </div>
    )
};

export default Card;