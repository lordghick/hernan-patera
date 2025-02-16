<template>
    <v-app>
        <v-container fluid class="p-0 m-0">
            <v-main class="p-0 m-0">
                <v-fab :app="true" location="right bottom" @click="contact.dialog = true" extended
                    prepend-icon="mdi-account" text="Extended">¡Ùnete!</v-fab>
                <navbar></navbar>
                <RouterView @trigger="contact.dialog = true" />
                <v-footer class="bg-primary">
                    <v-row class="p-0 m-0 d-flex justify-space-evenly">
                        <v-col cols="3">Andrea Casales. Entrenador</v-col>
                        <v-col cols="3">ACsports @2025</v-col>
                        <v-col cols="3">Todos los derechos reservados</v-col>
                    </v-row>
                </v-footer>
                <v-dialog v-model="contact.dialog" width="800">
                    <v-card title="Haznos saber que estás interesado">
                        <v-card-subtitle>Nos pondremos en contacto contigo</v-card-subtitle>
                        <v-card-text>
                                <v-text-field label="Correo:" v-model="contact.email"></v-text-field>
                                <v-text-field label="Número de contacto:"
                                    v-model="contact.numero_telefono"></v-text-field>
                                <v-text-field label="¿Que quieres saber?" v-model="contact.asunto"></v-text-field>
                                <v-textarea label="¿Alguna duda adicional?" v-model="contact.cuerpo"></v-textarea>
                        </v-card-text>
                        <v-card-actions justify="center">
                            <v-btn class="bg-primary">Enviar</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-main>
        </v-container>
    </v-app>
</template>
<script>
import navbar from './views/layout/nav.vue'

export default {
    components: {
        navbar
    },
    data() {
        return {
            contact: {
                dialog: false,
                email: '',
                asunto: '',
                numero_telefono: '',
                cuerpo: ''
            }
        }
    },
}
</script>