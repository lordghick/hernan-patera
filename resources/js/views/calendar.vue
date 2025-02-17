<template>
    <v-row class="stadium">
        <v-col class="first-element" cols="12">
            <h4 class="first-element-title bebas-font">Próximos eventos:</h4>
            <v-btn class="first-element-btn" v-if="user.role_id == 1">Cargar nuevo evento</v-btn>
        </v-col>
        <v-col cols="12" md="8" class="bg-primary activities" v-for="item in items">
            <v-card :title="item.titulo">
                <v-card-subtitle>Planificado para: {{ item.fecha }}</v-card-subtitle>
                <v-card-text>{{ item.cuerpo }}</v-card-text>
                <v-card-actions>
                    <v-btn elevation="1">¡Solicitar cupo!</v-btn>
                    <v-btn class="bg-warning" v-if="user.role_id == 1">Eliminar</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
export default {
    props: ['user'],
    emits: ['trigger'],
    data() {
        return {
            items: [
                {
                    fecha: '12/12/2025',
                    titulo: 'Navidad ACsports',
                    cuerpo: 'Nuestro grupo se complace de anunciar el evento de navidad para nuestros alumnos. Reserva tu cupo desde ahora para disfrutar de un compartir con nuestra academia en celebración y familia'
                },
                {
                    fecha: '12/12/2025',
                    titulo: 'Navidad ACsports',
                    cuerpo: 'Nuestro grupo se complace de anunciar el evento de navidad para nuestros alumnos. Reserva tu cupo desde ahora para disfrutar de un compartir con nuestra academia en celebración y familia'
                },
                {
                    fecha: '12/12/2025',
                    titulo: 'Navidad ACsports',
                    cuerpo: 'Nuestro grupo se complace de anunciar el evento de navidad para nuestros alumnos. Reserva tu cupo desde ahora para disfrutar de un compartir con nuestra academia en celebración y familia'
                },
                {
                    fecha: '12/12/2025',
                    titulo: 'Navidad ACsports',
                    cuerpo: 'Nuestro grupo se complace de anunciar el evento de navidad para nuestros alumnos. Reserva tu cupo desde ahora para disfrutar de un compartir con nuestra academia en celebración y familia'
                },
                {
                    fecha: '12/12/2025',
                    titulo: 'Navidad ACsports',
                    cuerpo: 'Nuestro grupo se complace de anunciar el evento de navidad para nuestros alumnos. Reserva tu cupo desde ahora para disfrutar de un compartir con nuestra academia en celebración y familia'
                },
            ]
        }
    }
}

</script>
<style>
.stadium {
    background-image: url('/storage/app/public/2151891713.jpg');
    background-size: cover;
    background-position-y: 90%;
    display: flex;
    height: 100vh;
    align-items: stretch;
    padding: 5rem;
    overflow-y: auto;
}

.activities {
    margin-top: 3rem;
}

.bebas-font {
    font-family: "Bebas Neue", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 4rem;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.first-element {
    margin-top: 5rem;
    position: relative;
}

.first-element-title {
    position: absolute;
    top: -2vh;
    margin-bottom: 3rem;
}
.first-element-btn {
    position: absolute;
    left: 40vw;
}

@media (max-width: 767px) {
    /* Media query para dispositivos móviles (ajusta el valor si es necesario) */

    .stadium {
        padding: 2rem;
    }

    .bebas-font {
        font-size: 3rem;
    }

    .first-element-btn {
        top: -7vh;
        left: 35vw;
    }

    .first-element-title {
        top: 1vh;
    }
}
</style>