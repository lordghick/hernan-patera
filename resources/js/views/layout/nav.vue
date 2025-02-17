<template>
    <div>
        <v-app-bar flat :color="navbarColor" app>

            <v-app-bar-nav-icon v-if="$vuetify.display.mobile" style="color: white;" @click="toggleDrawer"></v-app-bar-nav-icon>
            <v-app-bar-title style="color: white;">ACsports</v-app-bar-title>
            <div class="d-none d-md-flex justify-space-evenly">
                <v-btn text to="/">INICIO</v-btn>
                <v-btn text to="/calendar">ACTIVIDADES</v-btn>
                <v-btn text to="/about">SOBRE LA ACADEMIA</v-btn>
            </div>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app>
            <v-list dense>
                <v-list-item link to="/">
                    <v-list-item-title>Inicio</v-list-item-title>
                </v-list-item>
                <v-list-item link to="/calendar">
                    <v-list-item-title>Actividades</v-list-item-title>
                </v-list-item>
                <v-list-item link to="/about">
                    <v-list-item-title>Sobre la academia</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <!-- <strong>Current route path:</strong> {{ $route.fullPath }} -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: {
                username: '',
            },
            drawer: false,
            scrollPosition: 0,
        }
    },
    computed: {
        navbarColor() {
            const threshold = 200; // Umbral de scroll para cambiar el color
            const startColor = 'rgba(0, 0, 0, 0.0)'; // Color inicial de la navbar

            if (this.scrollPosition > threshold) {
                const opacity = Math.min(1, (this.scrollPosition - threshold) / 100); // Opacidad gradual

                let endRGB = {
                    r: 66,
                    g: 185,
                    b: 131
                }

                return `rgb(${endRGB.r}, ${endRGB.g}, ${endRGB.b}, ${opacity})`;
            } else {
                return startColor;
            }
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.scrollPosition = window.scrollY;
        },
        toggleDrawer() {
            this.drawer = !this.drawer;
        }
    },
}
</script>
<style scoped>
.white {
    color: white;
}

a {
    color: white;
}

@media (max-width: 767px) {
    /* Media query para dispositivos móviles (ajusta el valor si es necesario) */

    a {
        color: black;
    }
}
</style>