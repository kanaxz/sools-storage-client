require('storage/setup')
const { collectionsTypesMap } = require('sools-modeling-client')
const StorageCollection = require('./StorageCollection')
const StorageObject = require('storage/StorageObject')

collectionsTypesMap.unshift([StorageObject, StorageCollection])