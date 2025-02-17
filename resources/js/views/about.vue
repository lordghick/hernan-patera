<template>
    <div>
        <v-row class="home-banner about-self mx-0 px-5">
            <v-col cols="12" sm="8" md="6" class="d-flex justify-center align-center p-5">
                <p class="raleway-font text-center">Andrea Casale es un deportista íntegro, con una visión clara:
                    La disciplina para lograr las metas es la clave del éxito, y sabe que la mejor formula para
                    obtenerla
                    es a través del deporte. Desde temprana edad se ha especializado en esta materia, y acompañado de su
                    pasión
                    formativa, ha iniciado una exitosa academia multitudinaria para todas las edades</p>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            check: 'about'
        }
    }
}
</script>
<style>
.about-self {
    background-image: url('/storage/app/public/instagram.jpg');
    background-size: cover;
    background-position-y: 90%;
}

.home-banner {
    padding: 1rem;
    display: flex;
    height: 100vh;
    align-items: stretch;
    /* Estira las columnas para llenar toda la altura */


}

.raleway-font {
    font-family: "Raleway", serif;
    font-optical-sizing: auto;
    font-weight: 700;
    color: white;
    font-size: 1.7rem;
    font-style: italic;
    text-shadow: 5px 5px 5px #00000069, 5px 4px 0px rgba(0, 0, 0, 0.15);
}

@media (max-width: 767px) {
    /* Media query para dispositivos móviles (ajusta el valor si es necesario) */

    .raleway-font {
        font-size: 1.5rem;

    }

    .about-self {
        background-position-x: 6%;
    }
}

</style>