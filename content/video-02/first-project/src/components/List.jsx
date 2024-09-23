import Item from './Item'

function List () {
    return (
        <> { /* Fragments */ }
        <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari"/>
                <Item marca="Ford"/>
            </ul>
        </>
    )
}

export default List