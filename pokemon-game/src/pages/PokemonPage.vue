<template>
    <h1>Who is that Pokemon?</h1>
    <PokemonPicture :pokemonId="4" :showPokemon="false" />
    <PokemonOptions :pokemons='pokemonArray'/>
</template>
<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'
import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    data() {
        return {
            pokemonArray: []
        }
    },
    components: {
        PokemonPicture,
        PokemonOptions
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArray = await getPokemonOptions()
        }
    },
    mounted() {
        this.mixPokemonArray()
    }
}
</script>
<style>
    
</style>