<template>
    <div>
        <v-row class="position-relative">
            <v-carousel :height="$vuetify.display.mobile ? '927' : '750'" :show-arrows="false" cycle
                hide-delimiter-background>
                <v-carousel-item src="/storage/pov.jpg" cover></v-carousel-item>
                <v-carousel-item src="/storage/center-field.jpg" cover></v-carousel-item>
                <v-carousel-item src="/storage/stretch.jpg" cover></v-carousel-item>
                <v-carousel-item src="/storage/front-gym.jpg" cover></v-carousel-item>
                <v-carousel-item src="/storage/group.jpg" cover></v-carousel-item>
            </v-carousel>
            <h3 class="banner-title">Deportes para la <strong>formación</strong></h3>
            <h3 class="banner-subtitle"><strong>Fútbol</strong> para la <strong>vida</strong></h3>
        </v-row>
        <v-row class="carrousell-background d-flex align-center justify-space-evenly mx-0">
            <v-col cols="12" md="4">
                <v-btn class="bg-primary" block @click="$emit('trigger')">¡Quiero saber más!</v-btn>
            </v-col>
            <v-col cols="12" md="6">
                <v-row class="p-0 m-0">
                    <v-col class=" info-father" cols="12"
                        style="background-image: url('/storage/2149708032.jpg');"></v-col>
                    <v-col cols="12" class="mt-3">
                        <p class="text-center">Tenemos el método adecuado
                            para cualquier necesidad, sea rendimiento, potencia o estrategia. Con nosotros
                            <strong>tu progreso en el deporte está asegurado</strong>
                        </p>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row class="grass d-flex justify-center p-5 mx-0">
            <v-col cols="12" class="d-flex justify-center align-end">
                <h3 class="title-low">Nuestro compromiso</h3>
            </v-col>
            <v-col cols="12" class="d-flex justify-center aling-start">
                <p class="text-center">Nuestra academia está comprometida con la excelencia. No se puede ser un atleta
                    íntegro sin comenzar por
                    ser una persona integra. En ese orden de ideas, los valores son la piedra angular de nuestra
                    metodología
                    para que
                    nuestros futuros atletas alcancen con seguridad y dignidad las posiciones por las que hoy trabajan
                </p>
            </v-col>

            <v-col cols="10" sm="6" md="3">
                <v-btn class="no-deco" to="/about" block text="Ver nuestras actividades"></v-btn>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    emits: ['trigger'],
}
</script>
<style scoped>
.banner-title {
    position: absolute;
    top: 35vh;
    left: 10vw;
    color: white;
    font-size: 2.3rem;

}

.banner-subtitle {
    position: absolute;
    top: 40vh;
    left: 20vw;
    color: white;
    font-size: 2.3rem;

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

.home-banner {
    display: flex;
    height: 100vh;
    align-items: stretch;
    /* Estira las columnas para llenar toda la altura */


}

.info-father {
    height: 50vh;
    background-size: cover;
    border-radius: 20px;
    box-shadow: 3px 3px 9px 3px #000000;
}

.carrousell-background {
    height: 90vh;
    padding: 3rem;
}

.carrousell {
    border-radius: 20px;
    box-shadow: 5px 5px 15px 5px #000000;
}

.stadium {
    background-image: url('/storage/app/public/2151891713.jpg');
    background-size: cover;
    background-position-y: 90%;
}

.stadium::after {
    content: "";
    position: absolute;
    width: 100vw;
    top: 92vh;
    left: 0;
    right: 0;
    height: 3rem;
    /* Ajusta la altura del degradado */
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
    /* Ajusta los colores */
}

.grass {
    background-image: url('/storage/app/public/5281.jpg');
    background-size: cover;
    height: 80vh;
    color: white;
    font-size: 1.2rem;
    text-shadow: 2px 2px 2px #000000;
    overflow: hidden;
}

.title-low {
    font-size: 2rem;
}

.no-deco {
    /* Estilos para el texto del botón */
    text-shadow: none;
    /* Elimina la sombra del texto */
    color: #221717;
    /* Cambia el color del texto */
}

@media (max-width: 767px) {
    .banner-subtitle {
        top: 50vh;
        left: 10vw;
    }
}
</style>