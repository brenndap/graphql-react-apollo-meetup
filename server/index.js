const graphql = require('graphql')
const axios = require('axios').default
const users = require('./users.json')
const { ApolloServer, gql } = require('apollo-server')

const baseURL = "http://hp-api.herokuapp.com/api/characters"


const typeDefs = gql`

    type Character {
        name: String,
        initials: String,
        house: String,
        species: String,
        image: String,
        gender: String,
        yearOfBirth: Int,
        ancestry: String,
        eyeColour: String,
        hairColour: String,
        patronus: String,
        hogwartsStudent: Boolean,
        hogwartsStaff: Boolean,
    }

    type Query {
        characters: [Character]
    }
    
`

const resolvers = {
    Query: {
        characters: () => axios.get(baseURL).then(res => res.data)
    },
    Character: {
        initials: (parent, _) => {
            return parent.name.split(" ").map((n)=>n[0]).join("")
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log("It works!")
    console.log(`Running at ${url}`)
})