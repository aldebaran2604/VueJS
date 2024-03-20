<template>
    <h1>Who is that Pokemon?</h1>
    <PokemonPicture :pokemonId="4" :showPokemon="false" />
    <PokemonOptions />
</template>
<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'
import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    components: {
        PokemonPicture,
        PokemonOptions
    }
}
</script>
<style>
    
</style>