import { types } from "../../../src/auth/types/types";

describe('Pruebas en "Types.js"', () => {
    test('debe de regresar estos types', () => {
        const fixedTypes = {
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        };
        expect(types).toEqual(fixedTypes);
    });
});