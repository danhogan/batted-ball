<template>
    <v-app>
        <v-toolbar max-height=64>
            <v-toolbar-title class="headline text-uppercase">
                <span>Batted Ball Data</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-toolbar-items>
                <v-btn text to="/table">Table</v-btn>
                <v-btn text to="/batters">Batters</v-btn>
                <v-btn text to="/pitchers">Pitchers</v-btn>
                <v-btn text to="/plot">Plot</v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: 'App',
    };
</script>

<style>
.v-content {
    margin: 2em;
}
</style>