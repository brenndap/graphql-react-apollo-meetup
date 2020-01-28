import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Page from './Page'
import NavBar from './Components/NavBar'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

//css da lib que usei para pegar componentes pronto, não me julguem kkk
import 'antd/dist/antd.css'

// primeiro passo para consumir um api com graphql + react + apollo é definir um client, entenda ele como o responsável
// pela comunicação da sua aplicação (client-side) com o servidor que irá fornecer os dados (server-side)

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    // como o nosso servidor é local, basta colocar a uri que criamos aqui. Se fosse de um serviço "externo", a url fornecida vem aqui tbm ;)
})

const App = () => (
    //aqui temos o ApolloProvider que ser para fazer a conexão entre sua app em react e seu client
    //até aqui tudo bem simples, certo?
    <ApolloProvider client={client}>
        <div>
            <NavBar backgroundColor="#750420"/>
            <Page />
        </div>
    </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'))


