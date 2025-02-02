<template>
    <v-row class="home-banner">
        <v-col cols="12" sm="8" md="6" class="d-flex align-center p-5">
            <p class="bebas-font text-center">DESCUBRE TU VERDADERO POTENCIAL</p>
        </v-col>
        <v-col sm="4" md="6"></v-col>
    </v-row>
</template>
<script>
export default {
    data() {
        return {
            check: 'chequeado'
        }
    }
}
</script>
<style scoped>
.bebas-font {
    font-family: "Bebas Neue", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 4rem;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.home-banner {
    display: flex;
    height: 70vh;
    align-items: stretch;
    /* Estira las columnas para llenar toda la altura */
    background-image: url('/storage/app/public/2151891713.jpg');
    background-size: cover;
    background-position-y: 90%;
}
</style>