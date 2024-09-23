import Button from './evento/Button'

function Evento() {
    
    function meuEvento() {
        alert(`Parabéns! Você ativou o primeiro evento.`)
        console.log(`Parabéns! Você ativou o primeiro evento.`)
    }

    function segundoEvento() {
        alert(`Parabéns! Você ativou o segundo evento.`)
        console.log('Parabéns! Você ativou o segundo evento.')
    }

    return (
        <>
        <p>Clique para disparar um evento:</p>
        <Button event={meuEvento} text="Primeiro Evento"/>
        <Button event={segundoEvento} text="Segundo Evento"/>
        </>
    )
}

export default Evento 