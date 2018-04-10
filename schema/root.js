import { GraphQLObjectType } from 'graphql'
import { posts, post } from './posts'
import greeting from './greeting'

export default new GraphQLObjectType({
  name: 'QueryRoot',
  fields: {
    post,
    posts,
    greeting,
  },
})
