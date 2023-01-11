<script>
    export default {
        name: "Users",
        data: () => {
            return {
                options: {
                    chart: {
                        toolbar: {
                            show: false
                        },
                        responsive: [
                            {
                                breakpoint: 1000,
                                options: {
                                    plotOptions: {
                                    bar: {
                                        horizontal: true
                                    }
                                    },
                                    legend: {
                                    position: "bottom"
                                    }
                                }
                            }
                        ],
                        zoom: {
                            enabled: true,
                            type: 'x',
                            resetIcon: {
                                offsetX: -10,
                                offsetY: 0,
                                fillColor: '#fff',
                                strokeColor: '#37474F'
                            },
                            selection: {
                                background: '#90CAF9',
                                border: '#0D47A1'
                            }    
                        },
                        stroke: {
                            width: 3
                        },
                        grid: {
                            borderColor: "#555",
                            clipMarkers: false,
                            yaxis: {
                            lines: {
                                show: false
                            }
                            }
                        },
                        dataLabels: {
                            enabled: false
                        },
                        fill: {
                            gradient: {
                            enabled: true,
                            opacityFrom: 0.55,
                            opacityTo: 0
                            }
                        },
                        markers: {
                            size: 5,
                            colors: ["#000524"],
                            strokeColor: "#00BAEC",
                            strokeWidth: 3
                        },
                    },
                    xaxis: {
                        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,
                        1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,
                        1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,
                        1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                    },
                },
                series: [{
                    name: 'series-1',
                    data: [30, 40, 45, 50, 49, 60, 70, 91,
                    30, 40, 45, 50, 49, 60, 70, 91,
                    30, 40, 45, 50, 49, 60, 70, 91,
                    30, 40, 45, 50, 49, 60, 70, 91]
                }],
            }
        },
        methods: {

        }
    }
</script>

<template>
    <div class="pt-4">
        <div class="d-flex flex-wrap gap-5 align-items-center justify-content-between">
            <div class="d-flex">
                <div class="d-flex flex-column align-items-center gap-1">
                    <span class="yellowish-circle"></span>
                    <div class="d-flex gap-1">
                        <span class="orangish-circle"></span>
                        <span class="green-circle"></span>
                    </div>
                </div>
                <div class="d-flex flex-column gap-1">
                    <span class="text-bold-dark">3,594</span>
                    <span class="text-small-gray">Active users</span>
                </div>
            </div>
            <div class="d-flex">
                <div class="d-flex flex-column">
                    <span class="yellowish-square"></span>
                    <span class="set-margin green-square"></span>
                </div>
                <div class="d-flex flex-column gap-1">
                    <span class="text-bold-dark">30%</span>
                    <span class="text-small-gray">Retention rate</span>
                </div>
            </div>
            <div class="d-flex">
                <span class="points-drop-icon">
                    <span class="green-circle"></span>
                </span>
                <div class="d-flex flex-column gap-1">
                    <span class="text-bold-dark">234</span>
                    <span class="text-small-gray">Points drop</span>
                </div>
            </div>
            <div class="d-flex">
                <i class="fa-sharp fa-solid fa-chart-area"></i>
                <div class="d-flex flex-column gap-1">
                    <span class="text-bold-dark">21  
                        <span class="text-small-gray">per day</span>
                    </span>
                    <span class="text-small-gray">Use frequency</span>
                </div>
            </div>
            <div class="d-flex">
                <i class="fa fa-thin fa-clock pt-2"></i>
                <div class="d-flex flex-column gap-1">
                    <span class="text-bold-dark">15 
                        <span class="text-small-gray">min</span>
                    </span>
                    <span class="text-small-gray">Session length</span>
                </div>
            </div>
        </div>
        <div class="row pt-5">
            <div class="col-md-8">
                <div class="row">
                    <div class="col-md-6">
                        <h5>Products registered</h5>
                    </div> 
                    <div class="col-md-6">
                        <h5>Most active groups</h5>
                    </div>  
                    <div class="col-md-12">
                        <h5>Login ctivity</h5>
                    </div>    
                </div> 
            </div>
            <div class="col-md-4 d-flex">
                <hr class="vertical-hr">
                <div class="px-3">
                    <div class="card shadow">
                        <p class="text-start px-4 pt-2">cool</p>
                        <apexchart 
                            width="430" height="300" type="bar" 
                            :options="options" :series="series">
                        </apexchart>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>