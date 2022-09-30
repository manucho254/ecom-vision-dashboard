<script>
    export default {
        name: "Users",
    }
</script>

<template>
    <div class="pt-4">
        <div class="d-flex gap-5 align-items-center justify-content-between">
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
                    test
                </div>
            </div>
        </div>
    </div>
</template>