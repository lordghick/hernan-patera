<template>
    <div>
        <v-row class="position-relative">
            <v-carousel :height="$vuetify.display.mobile ? '927' : '750'" :show-arrows="false" cycle
                hide-delimiter-background>
                <v-carousel-item src="/storage/IMG_1237.jpg" cover></v-carousel-item>
                <v-carousel-item src="/storage/IMG_1239.jpg" cover></v-carousel-item>
                <v-carousel-item src="/storage/IMG_1233.jpg" cover></v-carousel-item>
                <!-- <v-carousel-item src="/storage/front-gym.jpg" cover></v-carousel-item>
                <v-carousel-item src="/storage/group.jpg" cover></v-carousel-item> -->
            </v-carousel>
            <h3 class="banner-title"><strong>LA PATERA</strong></h3>
            <h3 class="banner-subtitle"><strong>Banda Tributo</strong></h3>
        </v-row>
        <v-row class="carrousell-background d-flex align-center justify-space-evenly mx-0">
            <v-col cols="4" class="gallery-1">
            </v-col>
            <v-col cols="4" class="gallery-2">
            </v-col>
            <v-col cols="4" class="gallery-3">
            </v-col>
                <v-btn class="bg-primary flying-btn" block @click="$emit('trigger')">¡Quiero verlos!</v-btn>
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
                <v-btn class="no-deco" to="/calendar" block text="Ver nuestras actividades"></v-btn>
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
    font-size: 6rem;
    font-family: "New Rocker", system-ui;
  font-weight: 400;
  font-style: normal;
  text-shadow: 5px 5px 2px black;

}

.banner-subtitle {
    display: none;
    position: absolute;
    top: 40vh;
    left: 10vw;
    color: white;
    font-size: 2.3rem;

}

.flying-btn {
    position: absolute;
}

.gallery-1 {
    background-image: url('/storage/app/public/IMG_1235.jpg');
    background-position-y: 0%;
    background-position-x: 30%;
    height: 100%;
}
.gallery-2 {
    background-image: url('/storage/app/public/IMG_1236.jpg');
    background-position-y: 0%;
    background-position-x: 30%;
    height: 100%;
}
.gallery-3 {
    background-image: url('/storage/app/public/IMG_1234.jpg');
    background-position-y: 25%;
    background-position-x: 30%;
    height: 100%;
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