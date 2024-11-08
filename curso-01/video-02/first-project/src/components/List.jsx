import Item from './Item'

function List () {
    return (
        <> { /* Fragments */ }
        <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Ford" ano_lancamento={1964}/>
                <Item marca="Dodge" ano_lancamento={1947}/>
                <Item marca="Nissan" ano_lancamento={1992}/>
            </ul>
        </>
    )
}

export default List