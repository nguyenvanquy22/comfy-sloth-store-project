import React from 'react'
import { useUserContext } from '../contexts/user_context'
import Loading from '../components/Loading/Loading'

function AuthWrapper({ children }) {
  const { auth_load } = useUserContext()

  if (auth_load) {
    return <Loading />
  }

  return <>{children}</>
}

export default AuthWrapper
