<template>
    <v-card>
        <v-card-title>
            Data Plot
            <v-spacer></v-spacer>
            <v-select v-model="xAxis" :items="dropdownOptions" label="X-Axis"></v-select>
            <v-spacer></v-spacer>
            <v-select v-model="yAxis" :items="dropdownOptions" label="Y-Axis"></v-select>
        </v-card-title>
        <div id="chart">
            <apexchart ref="chartPlot" type=scatter height=600 :options="chartOptions" :series="series" />
        </div>
    </v-card>
</template>

<script>
import apexchart from 'vue-apexcharts'

import battedBallData from '../../battedBallData.json'

export default {
    components: {
        apexchart
    },
    data() {
        return {
            series: [{
                name: "Hit Distance",
                data: []
            }],
            chartOptions: {
                chart: {
                    id: 'chartPlot',
                    zoom: {
                    enabled: true,
                    type: 'xy'
                    }
                },
                xaxis: {
                    title: {
                        text: 'Exit Speed'
                    },
                    tickAmount: 10,
                    labels: {
                        formatter: function(val) {
                            return parseFloat(val).toFixed(1)
                        }
                    }
                },
                yaxis: {
                    title: {
                        text: 'Hit Distance'
                    },
                    tickAmount: 7,
                    labels: {
                        formatter: function(val) {
                            return parseFloat(val).toFixed(1)
                        }
                    }
                },
            },
            xAxis: 'Exit Speed',
            yAxis: 'Hit Distance',
            dropdownOptions: ['Exit Speed', 'Hit Distance', 'Launch Angle', 'Hang Time', 'Hit Spin Rate']
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
        setAxis(xAxis, yAxis){
            let filteredData = battedBallData.map(x => [parseFloat(x[xAxis.toUpperCase().replace(/\s/g , "_")]),
                parseFloat(x[yAxis.toUpperCase().replace(/\s/g , "_")]), x.BATTER]).slice(0,100)
            this.$refs.chartPlot.updateSeries([{ data: filteredData, name: yAxis }])
            this.$refs.chartPlot.updateOptions({ 
                xaxis: { 
                    title: { 
                        text: xAxis
                    }
                },
                yaxis: {
                    title: {
                        text: yAxis
                    }
                }
            })
        }
    },
    watch: {
        xAxis: function(){
            this.setAxis(this.xAxis, this.yAxis)
        },
        yAxis: function(){
            this.setAxis(this.xAxis, this.yAxis)
        }
    },
    created(){
        this.series[0].data = battedBallData.map(x => [parseFloat(x[this.xAxis.toUpperCase().replace(/\s/g , "_")]),
            parseFloat(x[this.yAxis.toUpperCase().replace(/\s/g , "_")]), x.BATTER]).slice(0,100)
    }
};
</script>

<style>
</style>