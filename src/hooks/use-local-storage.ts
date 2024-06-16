import { useCallback, useEffect, useState } from 'react'
import { LOCAL_STORAGE_CHANGE_EVENT } from 'src/constants/local-storage-keys'

/**
 * A hook for working with `localStorage`.
 */
export const useLocalStorage = (key: string) => {
  const [value, setValue] = useState(localStorage.getItem(key))

  // A function for updating the state
  const onLocalStorageChange = useCallback(() => {
    setValue(localStorage.getItem(key))
  }, [key])

  useEffect(() => {
    // Storage event handler for external changes
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        onLocalStorageChange()
      }
    }

    // Custom event handler for internal changes
    const handleCustomStorageChange = () => {
      onLocalStorageChange()
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener(
      LOCAL_STORAGE_CHANGE_EVENT,
      handleCustomStorageChange,
    )

    // Unsubscribe from events when unmounting a component
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener(
        LOCAL_STORAGE_CHANGE_EVENT,
        handleCustomStorageChange,
      )
    }
  }, [key, onLocalStorageChange])

  return value
}

/**
 * A function for calling a custom event after changing the `localStorage`.
 */
export const emitLocalStorageChangeEvent = () => {
  window.dispatchEvent(new Event(LOCAL_STORAGE_CHANGE_EVENT))
}
