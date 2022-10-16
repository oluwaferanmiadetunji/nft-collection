import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomicfoundation/hardhat-chai-matchers'
import '@nomiclabs/hardhat-ethers'

import dotenv from 'dotenv'
dotenv.config()

import { GOERLI_PRIVATE_KEY, GOERLI_RPC_URL } from './scripts/constants'

const config: HardhatUserConfig = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [GOERLI_PRIVATE_KEY], // TODO: fill the private key
    },
  },
}

export default config
