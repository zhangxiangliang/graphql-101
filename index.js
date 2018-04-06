import express from 'express'
import ghttp from 'express-graphql'
import schema from './schema'

const graphiql = true;
const app = express()

app.use('/graphql', ghttp({ schema, graphiql }))
app.listen(8080)
