import React from 'react';

class Relogio extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }
    //O método construtor foi utilizado para criar o component no momento de execução. Ou seja é o construtor que é executado
    //O super(props); carrega as propriedades(props) dos componentes pais.
    //this.state é o estado da aplicação, um dos estados a ser monitorado é a data

    
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );    
    }
    //A função acima é executada no momento em que o component aparece na tela do navegador(é montado)e é uma função nativa do React
    //O setInterval está crianda uma função anônima usando funções de seta. A função anònima executa o this.tick que será criada abaixo, e executa a cada 1 segundo
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    //A função acima é para quando o componente for desmontado. ela limpa a função timerID criada no componentDidMount.


    tick() {
        this.setState(
            {date: new Date()}
        );
    }
    //A função tick é chamada na montagem do componente.
    //Ela serve para atualizar a cada montagem com uma nova data.

    render(){
        return (
            <div>
                <h2>Agora são {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Relogio;

