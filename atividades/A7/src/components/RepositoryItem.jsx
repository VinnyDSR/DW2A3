export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'Repositório Padrão'}</strong>
            <p>{props.repository?.description}</p>
            <a href={props.repository?.link}>Acesso ao repositório</a>
        </li>
    )
}