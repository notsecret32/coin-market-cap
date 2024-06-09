import { useGetUsersQuery } from 'src/api/usersApi'
import { User } from './User'

export const UserList = () => {
  const { data, isLoading } = useGetUsersQuery()

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div>
      {data !== null
        ? data?.map(({ id, name, username }, i) => (
            <User key={i} id={id} name={name} username={username} />
          ))
        : 'No data'}
    </div>
  )
}
