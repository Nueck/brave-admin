import { decrypto, encrypto } from '@/utils'

interface StorageData {
  value: unknown
}

export function setLocal(key: string, value: unknown) {
  const storageData: StorageData = { value }
  const json = encrypto(storageData)
  window.localStorage.setItem(key, json)
}

export function getLocal<T>(key: string) {
  const json = window.localStorage.getItem(key)
  if (json) {
    let storageData: StorageData | null = null
    try {
      storageData = decrypto(json)
    }
    catch {}
    if (storageData) {
      const { value } = storageData
      return value as T
    }
    removeLocal(key)
    return null
  }
  return null
}

export function removeLocal(key: string) {
  window.localStorage.removeItem(key)
}

export function clearLocal() {
  window.localStorage.clear()
}
