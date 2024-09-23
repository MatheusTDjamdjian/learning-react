function Evento({numero}) {
    
    function meuEvento() {
        alert(`Parabéns! Você ativou o evento. ${numero}`)
    console.log(`Parabéns! Você ativou o evento. ${numero}`)
    }

    return (
        <>
        <p>Clique para disparar um evento:</p>
        <button onClick={meuEvento}>Ativar!</button>
        </>
    )
}

export default Evento 