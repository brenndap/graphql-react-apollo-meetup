import React from 'react'
import { withApollo } from '@apollo/react-hoc'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Spin } from 'antd'
import CharacterCard from './Components/CharacterCard'


// nesse componente a gente vai criar toda a lógica que faz as requisições ao servidor e etc.

//aqui definimos um const que recebe a estrutura da query que vamos utilizar, precisamos de apenas 3 informações
// gql é um parser que transforma essa string em uma query real que bate lá so servidor, é importante usar ela

const charactersQuery = gql`
  {
    characters {
      name
      image
      house
    }
  }
`

// nossa func Page retorna um componente que recebe uma prop chamada client, que adivinha só, é o client que a gente estabeleceu
// lá em index.js

function Page({ client }) {

  // Let's get hooks!
  // aqui utilizamod o hook useQuery que retorna um objeto com data (nossas infor), loading e error

  const {
    data,
    loading,
    error
  } = useQuery(charactersQuery, { client })

  return (
    <div style={{
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-around",
      width: "80%",
      flexWrap: "wrap",
      margin: "140px auto",
    }}>
      {data ? data.characters.map((item, idx) =>
        <CharacterCard
          key={idx}
          name={item.name}
          image={item.image}
          house={item.house}
          loading={loading}
        />) : <Spin />}
    </div>
  )
}

export default withApollo(Page)
