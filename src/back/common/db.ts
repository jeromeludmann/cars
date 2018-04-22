import { MongoClient, Collection } from 'mongodb'
import { config } from '@common/config'

const { host: dbHost, port: dbPort, name: dbName } = config.db
const dbUrl = `mongodb://${dbHost}:${dbPort}/${dbName}`

console.log(`Connecting to ${dbUrl}...`)

export let carsCollection: Collection

export const dbClient = MongoClient.connect(dbUrl).then(mongoClient => {
  carsCollection = mongoClient.db(dbName).collection('cars')
})
