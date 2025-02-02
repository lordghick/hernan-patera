<template>
    <v-app>
        <v-container fluid class="p-0 m-0">
            <v-app-bar>
                <template v-slot:prepend>
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
                </template>
                <!-- <v-app-bar-title>Application Bar</v-app-bar-title> -->
                <v-row justify="space-evenly">
                    <RouterLink to="/">Go to Home</RouterLink>
                    <RouterLink to="/about">Go to About</RouterLink>
                </v-row>
            </v-app-bar>
            <!-- <strong>Current route path:</strong> {{ $route.fullPath }} -->
            <v-main>
                <RouterView />
            </v-main>
        </v-container>
    </v-app>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>