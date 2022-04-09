const express = require('express')
const grapqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

const schema = buildSchema(`
  type Cliente {
    id: Int
    nombre: String
    telefono: String
  }

  type Query {
    clientes: [Cliente]
    cliente(id: Int): Cliente
  }

  type Mutation {
    addCliente(nombre: String, telefono: String): Cliente
  }
`)

