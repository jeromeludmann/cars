import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString
} from 'graphql'

const GraphQLCar = new GraphQLObjectType({
  name: 'Car',
  description: 'Describe a car',
  fields: {
    name: { type: GraphQLString },
    color: { type: GraphQLString }
  }
})

const GraphQLCarInput = new GraphQLInputObjectType({
  name: 'CarInput',
  description: 'Describe a user input',
  fields: {
    name: { type: GraphQLString },
    color: { type: GraphQLString }
  }
})

const GraphQLFiltersInput = new GraphQLInputObjectType({
  name: 'FiltersInput',
  description: 'Describe search filters',
  fields: {
    name: { type: GraphQLString, description: 'Filter by car name' },
    color: { type: GraphQLString, description: 'Filter by car color' }
  }
})

const GraphQLPagingInput = new GraphQLInputObjectType({
  name: 'PagingInput',
  description: 'Describe paging parameters',
  fields: {
    page: {
      type: GraphQLInt,
      description: 'Number of the page',
      defaultValue: 1
    },
    perPage: {
      type: GraphQLInt,
      description: 'Number of items per page',
      defaultValue: 10
    }
  }
})

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'CarQuery',
    description: 'Getting cars',
    fields: {
      cars: {
        type: new GraphQLList(GraphQLCar),
        description: 'Get cars',
        args: {
          filters: {
            type: GraphQLFiltersInput,
            description: 'Filter by search criteria'
          },
          paging: {
            type: GraphQLPagingInput,
            description: 'Paginate the results',
            defaultValue: {
              page: 1,
              perPage: 10
            }
          }
        }
      }
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'CarMutation',
    description: 'Creating, updating and deleting cars',
    fields: {
      createCar: {
        type: GraphQLCar,
        description: 'Create a car and return the created car name',
        args: {
          car: {
            type: GraphQLCarInput,
            description: 'The car object to create'
          }
        }
      },
      createCars: {
        type: new GraphQLList(GraphQLCar),
        description: 'Create cars and return the created car names',
        args: {
          cars: {
            type: new GraphQLList(GraphQLCarInput),
            description: 'The car object list to create'
          }
        }
      },
      updateCar: {
        type: GraphQLInt,
        description: 'Update a car',
        args: {
          name: { type: GraphQLString },
          car: { type: GraphQLCarInput }
        }
      },
      deleteCars: {
        type: GraphQLInt,
        description:
          'Delete cars by filter query and return number of cars deleted',
        args: {
          filters: {
            type: GraphQLFiltersInput,
            description: 'The filter query of the cars to delete'
          }
        }
      }
    }
  })
})
