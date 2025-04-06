<template>
    <v-app>
        <v-container fluid class="p-0 m-0">
            <v-main class="p-0 m-0">
                <v-fab class="fab-btn" :layout="true" :app="true" size="large" :width="$vuetify.display.mobile ? '30vw' : '15vw'" @click="contact.dialog = true" extended
                    prepend-icon="mdi-hand-wave" text="Extended">¡Contáctanos!</v-fab>
                <navbar></navbar>
                <RouterView :user="user" @trigger="contact.dialog = true">
                </RouterView>
                <v-footer class="bg-primary">
                    <v-row class="p-0 m-0 d-flex justify-space-evenly">
                        <v-col cols="3"><v-row>
                            <v-col class="p-0" cols="12">Representante: </v-col>
                            <v-col class="p-0" cols="12">Hernán Navarro</v-col>
                        </v-row></v-col>
                        <v-col cols="3">LA PATERA @2025</v-col>
                        <v-col cols="3">Banda tributo. Todos los derechos reservados</v-col>
                    </v-row>
                </v-footer>
                <v-dialog v-model="contact.dialog" width="800">
                    <v-card title="Dudas y contrataciones">
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
            user: {
                name: 'leonardo',
                last_name: 'lopez',
                role_id: 2
            },
            contact: {
                dialog: false,
                email: '',
                asunto: '',
                numero_telefono: '',
                cuerpo: ''
            }
        }
    }
}
</script>