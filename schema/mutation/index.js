import { GraphQLObjectType } from 'graphql'
import posts from './posts'

export default new GraphQLObjectType({
  name: 'MutationRoot',
  fields: Object.assign({}, posts),
})
