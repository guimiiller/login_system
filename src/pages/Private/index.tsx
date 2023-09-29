import { AuthContext } from "../../contexts/Auth/AuthContext"
import { useContext } from 'react'
import * as X from './styles'

export const Private = () =>{
    const auth = useContext(AuthContext)

    return(
        <X.PrivateContainer>
            <h2>Página Privada</h2>

            Olá {auth.user?.name}, tudo bem?
        </X.PrivateContainer>
    )
}