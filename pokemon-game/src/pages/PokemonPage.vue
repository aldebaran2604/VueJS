<template>
    <h1 v-if='!pokemon'>Please wait...</h1>
    <div v-else>
        <h1>Who is that Pokemon?</h1>
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
        <PokemonOptions :pokemons='pokemonArray' @selection='checkAnswer' v-if='!showPokemon'/>
    </div>
    <div v-if='showPokemon'>
        <p class='fade-in'>
            {{ message }}
        </p>
        <button @click='newGame'>
            New Game
        </button>
    </div>
</template>
<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'
import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    data() {
        return {
            pokemonArray: [],
            pokemon: null,
            showPokemon: false,
            message: ""
        }
    },
    components: {
        PokemonPicture,
        PokemonOptions
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArray = await getPokemonOptions()

            const indexPokemon = Math.floor(Math.random() * 4)

            this.pokemon = this.pokemonArray[indexPokemon]
        },
        checkAnswer(pokemonId) {
            this.showPokemon = true
            if (pokemonId === this.pokemon.id) {
                this.message = `congratulations it's ${this.pokemon.name}!`
            } else {
                this.message = `sorry it's ${this.pokemon.name}!`
            }
        },
        newGame() {
            this.pokemonArray = []
            this.pokemon = null
            this.showPokemon = false
            this.message = ""
            this.mixPokemonArray()
        }
    },
    mounted() {
        this.mixPokemonArray()
    }
}
</script>
<style>
    
</style>