import { NetworkConfig } from './ann'

export interface ConfigNetworksCategory {
  [k: string]: ConfigNetworksType
}

export interface ConfigNetworksType {
  [k: string]: NetworkConfig
}

export interface Config {
  networks: ConfigNetworksCategory
}
