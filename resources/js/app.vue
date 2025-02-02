<template>
    <h1>Hello App!</h1>
    <v-card>
        <v-card-text>
            <p>
                <strong>Current route path:</strong> {{ $route.fullPath }}
            </p>
        </v-card-text>
    </v-card>
    <nav>
        <RouterLink to="/">Go to Home</RouterLink>
        <RouterLink to="/about">Go to About</RouterLink>
    </nav>
    <main>
        <RouterView />
    </main>
</template>
<script>
export default {
    data(){
        return {
            
        }
    }
}
</script>