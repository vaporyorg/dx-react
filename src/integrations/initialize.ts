// import { promisify } from 'api/utils'
import { ETHEREUM_NETWORKS } from './constants'
import { WalletProvider, ConnectedInterface } from './types'
// import { Account, Balance } from 'types'

import MetamaskProvider from './metamask'
// import ParityProvider from './parity'
// import RemoteProvider from './remote'

export const WATCHER_INTERVAL = 5000

export const networkById = {
  1: ETHEREUM_NETWORKS.MAIN,
  2: ETHEREUM_NETWORKS.MORDEN,
  3: ETHEREUM_NETWORKS.ROPSTEN,
  4: ETHEREUM_NETWORKS.RINKEBY,
  42: ETHEREUM_NETWORKS.KOVAN,
}

export const providers: WalletProvider[] = [
  MetamaskProvider,
  // ParityProvider,
  // RemoteProvider,
]

// Fired from WalletIntegrations as part of the React mounting CB in src/index.ts
export default async ({ /* registerProvider */ }: ConnectedInterface | any) => {
  /* // Fired on setInterval every 10 seconds
  const watcher = async (provider: WalletProvider, init?: string | boolean) => {

    // set block timestamp to provider state and compare
    try {
      if (!provider.checkAvailability() || (window.navigator && !window.navigator.onLine)) throw new Error('Provider and/or internet issues')
      provider.state.timestamp = prevTime

      const [account, network, timestamp] = await Promise.all<Account, ETHEREUM_NETWORKS, number>([
          getAccount(provider),
          getNetwork(provider),
          getTime(),
        ]),
        balance = account && await getBalance(provider, account),
        available = provider.walletAvailable,
        unlocked = !!(available && account),
        newState = { account, network, balance, available, unlocked, timestamp }

      // if data changed
      if (shallowDifferent(provider.state, newState)) {
        console.log('app state is different')
        console.log('was: ', newState)
        console.log('now: ', provider.state)

        // reset module timestamp with updated timestamp
        prevTime = timestamp
        // dispatch action with updated provider state
        updateProvider(provider.providerName, provider.state = newState)
        // check if initial load or wallet locked

        if (init && unlocked) {
          watcherLogger({
            logType: 'warn',
            status: 'INITIALISING',
            info: 'Setting up Web3 provider',
            updateState: false,
          })
          await initDutchX()
          await updateMainAppState()
        }
        else if (!unlocked) {
          watcherLogger({
            logType: 'warn',
            status: 'WALLET LOCKED',
            info: 'Please unlock your wallet provider',
            updateState: false,
          })
          // if error
          // connection lost or provider no longer returns data (locked/logged out)
          // reset all data associated with account
          throw 'Wallet locked during polling'
        }
        else {
          watcherLogger({
            logType: 'warn',
            status: 'CONNECTED + WALLET UNLOCKED',
            info: 'Web3 provider connected + wallet unlocked',
            updateState: true,
          })
          await updateMainAppState()
        }
      }
    } catch (err) {
      console.warn(err)
      // if error
      // connection lost or provider no longer returns data (locked/logged out)
      // reset all data associated with account
      resetMainAppState()

      if (provider.walletAvailable) {
        // disable internal provider
        provider.state.unlocked = false
        // and dispatch action with { available: false }
        updateProvider(provider.providerName, provider.state)
      }
    }
  } */

  providers.forEach((/* provider */) => {
    // each provider intializes by creating its own web3 instance if there is a corresponding currentProvider injected
    // provider.initialize()
    // if (!provider.walletAvailable) return
    // dispatch action to save provider name and priority
    // registerProvider(provider.providerName, { priority: provider.priority })
    // // get account, balance, etc. PROVIDER state - do not update main app state yet
    // watcher(provider, 'INIT')
    // // regularly refetch state
    // setInterval(() => watcher(provider), WATCHER_INTERVAL)
    return
  })
}
