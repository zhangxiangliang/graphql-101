import { GraphQLObjectType, GraphQLString } from 'graphql'
import { UserType } from './users'
import { API_BASE } from '../../config'
import axios from 'axios'

const name = 'CommentType'

const fields = {
  id: { type: GraphQLString },
  content: { type: GraphQLString },
  author: {
    type: UserType,
    resolve: (obj) => axios
      .get(`${API_BASE}/users/${obj.author}`)
      .then(response => response.data)
  }
}

export const CommentType = new GraphQLObjectType({ fields, name })
