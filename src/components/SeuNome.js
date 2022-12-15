function SeuNome (props) {
    return (
        <div>
            <h3>Nome: {props.nome}</h3>
            <p>Idade: {props.idade} anos</p>
            <p>Profissão: {props.profissao}</p>
        </div>
    )
}

export default SeuNome