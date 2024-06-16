import { BRIEFCASE_LOCAL_STORAGE_KEY } from 'src/constants/local-storage-keys'
import { IBriefcase } from 'src/types'
import { useLocalStorage } from './use-local-storage'

/**
 * Monitors data updates in localStorage by a specific key.
 */
export const useBriefcase = () => {
  // Get data from `localStorage` and subscribe to changes
  const data = useLocalStorage(BRIEFCASE_LOCAL_STORAGE_KEY)

  // Checking the availability of data
  if (!data) {
    return {
      briefcase: undefined,
    }
  }

  // Converting a string to an object
  const briefcase = JSON.parse(data) as IBriefcase

  return {
    briefcase,
  }
}
