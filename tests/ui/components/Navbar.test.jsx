import React from "react-dom";
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({ // mockejar navegació (llibreria ja existent)
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en <NavBar />', () => {
    
    const logout = jest.fn();
    const contextValue = {
        logged: true,
        user: {
            id: 'ABC',
            name: 'Arnau'
        },
        logout
    };

    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el nombre del usuario', () => {
        
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText(contextValue.user.name)).toBeTruthy();

    });

    test('debe de llamar el logout y navigate cuando se hace click en el boton', () => {
        
        

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        fireEvent.click(screen.getByLabelText('logOut'));
        expect(logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', {'replace': true});

    });
});