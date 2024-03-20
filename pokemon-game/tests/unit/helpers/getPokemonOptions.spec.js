import { getPokemons } from '@/helpers/getPokemonOptions'

describe('getPokemonOptions helper', () => {
    test('method getPokemons() must return an array of numbers', () => {
        const pokemons = getPokemons()

        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[500]).toBe(501)
        expect(pokemons[649]).toBe(650)
    })

    test('getPokemonNames should return an array with four elements with pokemon names', () => {

    })

    test('getPokemonOptions should return a mixed array of Pokémon', () => {

    })
})