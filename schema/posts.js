import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql'
import { API_BASE } from '../config'
import axios from 'axios'

const name = 'PostType'

const fields = {
  id: { type: GraphQLString },
  title: { type: GraphQLString },
  content: { type: GraphQLString },
}

const type = new GraphQLObjectType({ name, fields });

export default {
  type: new GraphQLList(type),
  resolve: () => axios
    .get(`${ API_BASE }/posts`)
    .then(response => response.data),
}
