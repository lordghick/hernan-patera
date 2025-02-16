<template>
    <v-row class="home-banner stadium mx-0" justify="center">
        <v-col cols="12" sm="8" md="6" class="d-flex justify-center align-end p-5">
            <p class="raleway-font text-center">Andrea Casale Sport</p>
        </v-col>        <v-col cols="12" class="d-flex justify-center align-start">
            <p class="bebas-font text-center">DESCUBRE TU VERDADERO POTENCIAL</p>
        </v-col>
    </v-row>
</template>
<script>
export default {
    data(){
        return {
            check: 'about'
        }
    }
}
</script>
<style>
.stadium {
    background-image: url('/storage/app/public/2151891713.jpg');
    background-size: cover;
    background-position-y: 90%;
}

.home-banner {
    display: flex;
    height: 100vh;
    align-items: stretch;
    /* Estira las columnas para llenar toda la altura */


}

.bebas-font {
    font-family: "Bebas Neue", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 2rem;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.raleway-font {
    font-family: "Raleway", serif;
    font-optical-sizing: auto;
    font-weight: 700;
    color: white;
    font-size: 4rem;
    font-style: italic;
    text-shadow: 5px 5px 5px #00000069, 5px 4px 0px rgba(0, 0, 0, 0.15);
}
</style>