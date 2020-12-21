export function Header(){
    return(
    <header>
        <p>olá</p>
    </header>
    );
}


export function Footer(){
    return(
    <footer>
          <p>&copy; Recode Pro</p>
    </footer>
    );
}

//função que recebe json encapsulado em dados
export function Exemplo(props){
    return(
    <footer>
          <p>&copy; Recode Pro {props.dados.ano}-{props.dados.mes}</p>
    </footer>
    );
}

//chamada do Componente funcional acima
export function ExemploComponent(props){
    return(
    <Exemplo dados={ {ano:2021,mes:1}} />
    );
}