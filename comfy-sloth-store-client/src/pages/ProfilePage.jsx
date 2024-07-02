import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PageHero from '../components/PageHero/PageHero'
import { useUserContext } from '../contexts/user_context'

function ProfilePage() {
    const { user, updateInfo } = useUserContext()

    const username = user.username
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    useEffect(() => {
        if (user) {
            setFirstname(user.firstname ? user.firstname : '');
            setLastname(user.lastname ? user.lastname : '');
            setEmail(user.email ? user.email : '');
            setPhone(user.phone ? user.phone : '');
            setAddress(user.address ? user.address : '');
        }
    }, [user]);

    const handleSave = async (e) => {
        e.preventDefault();
        const infoUserReq = { username, firstname, lastname, email, phone, address }
        await updateInfo(infoUserReq)
    }

    return (
        <main>
            <PageHero title="profile" />
            <Wrapper className='page section'>
                <form className='form'>
                    <div className="form__row">
                        <div className="form__label">Username:</div>
                        <input
                            type="text"
                            className='form__input'
                            value={username}
                            readOnly
                        />
                    </div>
                    <div className="form__row">
                        <div className="form__label">Firstname:</div>
                        <input
                            type="text"
                            className='form__input'
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </div>
                    <div className="form__row">
                        <div className="form__label">Lastname:</div>
                        <input
                            type="text"
                            className='form__input'
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </div>
                    <div className="form__row">
                        <div className="form__label">Email:</div>
                        <input
                            type="email"
                            className='form__input'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form__row">
                        <div className="form__label">Phone:</div>
                        <input
                            type="tel"
                            className='form__input'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form__row">
                        <div className="form__label">Address:</div>
                        <input
                            type="text"
                            className='form__input'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="form__row">
                        <button
                            className='btn btn-save'
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    </div>
                </form>
            </Wrapper>
        </main>
    )
}

const Wrapper = styled.main`
    .form {
        width: 600px;
        max-width: 70vw;
        margin: 0 auto;
    }
    .form__row {
        display: flex;
        margin: 1.5rem 0;
    }
    .form__label {
        font-size: 1rem;
        min-width: 7rem;
        font-weight: 500;
        margin: auto 0;
    }
    .form__input {
        flex: 1;
        font-size: 1rem;
        padding: 0.5rem 1rem;
        border: 1px solid var(--clr-black);
        border-radius: var(--radius);
    }
    .btn-save {
        text-transform: capitalize;
        margin: 1rem auto 0;
    }
`

export default ProfilePage