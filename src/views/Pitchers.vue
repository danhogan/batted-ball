
<template>
    <v-card>
        <v-card-title>
            Pitcher Averages
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="data" :items-per-page="10" :search="search" class="elevation-1">
            <template v-slot:item.EXIT_SPEED="{ item }">
                <v-chip :color="getColor(item.EXIT_SPEED)" dark>{{ item.EXIT_SPEED }}</v-chip>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
import pitchersGrouped from '../../pitchersGrouped.json'

export default {
    data() {
        return {
            search: '',
            headers: [
                // {
                //     text: "Pitcher Id",
                //     value: "PITCHER_ID"
                // },
                {
                    text: "Pitcher",
                    value: "PITCHER"
                },
                {
                    text: "Avg. Launch Angle",
                    value: "LAUNCH_ANGLE"
                },
                {
                    text: "Avg. Exit Speed",
                    value: "EXIT_SPEED"
                },
                {
                    text: "Avg. Exit Direction",
                    value: "EXIT_DIRECTION"
                },
                {
                    text: "Avg. Hit Distance",
                    value: "HIT_DISTANCE"
                },
                {
                    text: "Avg. Hang Time",
                    value: "HANG_TIME"
                },
                {
                    text: "Avg. Hit Spin Rate",
                    value: "HIT_SPIN_RATE"
                },
            ],
            data: pitchersGrouped
        };
    },
    methods: {
        getColor(speed){
            if (speed > 110) return 'red darken-4'
            else if (speed > 100) return 'red'
            else if (speed > 90) return 'orange'
            else if (speed > 75) return 'green'
            else return 'green lighten-2'
        },
    },
};
</script>

<style>
</style>