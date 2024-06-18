import React from 'react'
import { useUserContext } from '../contexts/user_context'
import Loading from '../components/Loading/Loading'
import styled from 'styled-components'

function AuthWrapper({ children }) {
    const { auth_load, auth_error } = useUserContext()

    if (auth_load) {
        return <Loading />
    }
    if (auth_error) {
        return (
            <Wrapper>
                <h1>{error.message}</h1>
            </Wrapper>
        )
    }
    return <>{children}</>
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`

export default AuthWrapper
