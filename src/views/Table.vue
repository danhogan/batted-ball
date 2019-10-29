<template>
    <v-card>
        <v-card-title>
            All Data
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="data" :items-per-page="10" :search="search" class="elevation-1">
            <template v-slot:item.VIDEO_LINK="{ item }">
                <a class="videoLink" :href="item.VIDEO_LINK" target="_blank" rel="noopener noreferrer">
                    <v-icon>mdi-open-in-new</v-icon>
                </a>
            </template>
            <template v-slot:item.EXIT_SPEED="{ item }">
                <v-chip :color="getColor(item.EXIT_SPEED)" dark>{{ item.EXIT_SPEED }}</v-chip>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
import battedBallData from '../../battedBallData.json'

export default {
    data() {
        return {
            search: '',
            headers: [
                // {
                //     text: "Batter Id",
                //     value: "BATTER_ID"
                // },
                {
                    text: "Batter",
                    value: "BATTER"
                },
                // {
                //     text: "Pitcher Id",
                //     value: "PITCHER_ID"
                // },
                {
                    text: "Pitcher",
                    value: "PITCHER"
                },
                {
                    text: "Game Date",
                    value: "GAME_DATE"
                },
                {
                    text: "Launch Angle",
                    value: "LAUNCH_ANGLE"
                },
                {
                    text: "Exit Speed",
                    value: "EXIT_SPEED"
                },
                {
                    text: "Exit Direction",
                    value: "EXIT_DIRECTION"
                },
                {
                    text: "Hit Distance",
                    value: "HIT_DISTANCE"
                },
                {
                    text: "Hang Time",
                    value: "HANG_TIME"
                },
                {
                    text: "Hit Spin Rate",
                    value: "HIT_SPIN_RATE"
                },
                {
                    text: "Play Outcome",
                    value: "PLAY_OUTCOME"
                },
                {
                    text: "Video",
                    value: "VIDEO_LINK",
                    sortable: false
                }
            ],
            data: battedBallData
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
.videoLink {
    text-decoration: none;
}

.videoLink > i {
    margin-top: 0.1em;
}
</style>