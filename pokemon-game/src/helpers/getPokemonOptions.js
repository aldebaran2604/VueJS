import pokemonApi from '@/api/pokemonApi'

export const getPokemons = () => {
    const pokemonsArray = Array.from(Array(650));
    
    return pokemonsArray.map((_, index) => index++);
}

export const getPokemonNames = async ([pokemonA, pokemonB, pokemonC, pokemonD] = []) => {
    const promisesArray = [
        pokemonApi.get(`/${pokemonA}`),
        pokemonApi.get(`/${pokemonB}`),
        pokemonApi.get(`/${pokemonC}`),
        pokemonApi.get(`/${pokemonD}`)
    ]

    const [
        responsePokemonA,
        responsePokemonB,
        responsePokemonC,
        responsePokemonD
    ] = await Promise.all(promisesArray);

    return [
        { id: responsePokemonA.data.id, name: responsePokemonA.data.name},
        { id: responsePokemonB.data.id, name: responsePokemonB.data.name},
        { id: responsePokemonC.data.id, name: responsePokemonC.data.name},
        { id: responsePokemonD.data.id, name: responsePokemonD.data.name}
    ]
}

const getPokemonOptions = () => {
    const mixPokemons = getPokemons().sort(() => Math.random() - 0.5)

    const listPokemons = getPokemonNames(mixPokemons.splice(0, 4))
    return listPokemons
}

export default getPokemonOptions