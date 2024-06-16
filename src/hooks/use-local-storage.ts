import { useCallback, useEffect, useState } from 'react'
import { LOCAL_STORAGE_CHANGE_EVENT } from 'src/constants/local-storage-keys'

export const useLocalStorage = (key: string) => {
  const [value, setValue] = useState(localStorage.getItem(key))

  // Функция для обновления состояния
  const onLocalStorageChange = useCallback(() => {
    setValue(localStorage.getItem(key))
  }, [key])

  useEffect(() => {
    // Обработчик события storage для внешних изменений
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        onLocalStorageChange()
      }
    }

    // Обработчик кастомного события для внутренних изменений
    const handleCustomStorageChange = () => {
      onLocalStorageChange()
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener(
      LOCAL_STORAGE_CHANGE_EVENT,
      handleCustomStorageChange,
    )

    // Отписываемся от событий при размонтировании компонента
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

// Функция для вызова кастомного события после изменения localStorage
export const emitLocalStorageChangeEvent = () => {
  window.dispatchEvent(new Event(LOCAL_STORAGE_CHANGE_EVENT))
}
