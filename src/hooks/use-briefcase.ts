import { BRIEFCASE_LOCAL_STORAGE_KEY } from 'src/constants/local-storage-keys'
import { IBriefcase } from 'src/types'
import { useLocalStorage } from './use-local-storage'

/**
 * Следит за обновлением данных в localStorage по определенному ключу.
 */
export const useBriefcase = () => {
  // Получаем данные их localStorage и подписываемся на изменения
  const data = useLocalStorage(BRIEFCASE_LOCAL_STORAGE_KEY)

  // Проверяем наличие данных
  if (!data) {
    return {
      briefcase: undefined,
    }
  }

  // Конвертируем строку в объект
  const briefcase = JSON.parse(data) as IBriefcase

  return {
    briefcase,
  }
}
