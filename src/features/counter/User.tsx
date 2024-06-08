import { IUser } from '@api/usersApi'

export const User = ({ id, name, username }: IUser) => {
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{username}</p>
    </div>
  )
}
