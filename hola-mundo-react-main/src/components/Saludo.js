export default function Saludo(props){
    let {name} = props.naming;
    return(<h1>
       hola {name}
    </h1>);
}

export function Bye(){
    return(<h1>
        bye
    </h1>);
}

