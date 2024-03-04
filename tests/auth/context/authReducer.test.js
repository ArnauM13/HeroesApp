import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en authReducer', () => {
    test('debe de retornar el estado inicial', () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    test('debe de (login) llamar el login autenticar y establecer el usuario', () => {

        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: 'Arnau'
            }
        };
        const state = authReducer({ logged: false }, action);

        expect(state).toEqual({
            logged: true,
            user: action.payload
        });

    });

    test('debe de (logout) borrar el name del usuario y logged en false', () => {
        
        const action = { type: types.logout };
        const state = authReducer({logged: true, user: { id: 'ABC', name: 'Arnau' }}, action);
        
        expect(state).toEqual({
            logged: false
        });

    });
})