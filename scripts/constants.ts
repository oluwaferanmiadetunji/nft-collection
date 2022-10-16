import * as env from 'env-var'

export const GOERLI_RPC_URL: string = env
  .get('GOERLI_RPC_URL')
  .required()
  .asString()

export const GOERLI_PRIVATE_KEY: string = env
  .get('GOERLI_PRIVATE_KEY')
  .required()
  .asString()

export const WHITELIST_CONTRACT_ADDRESS: string = env
  .get('WHITELIST_CONTRACT_ADDRESS')
  .required()
  .asString()

export const METADATA_URL: string = env
  .get('METADATA_URL')
  .required()
  .asString()
