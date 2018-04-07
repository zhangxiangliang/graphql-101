import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql'
import config from '../config'
import axios from 'axios'

const { API_BASE } = config
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
