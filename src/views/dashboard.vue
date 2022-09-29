<script>
    import SideBar from "@/components/sideBar.vue"
    export default {
        name: "dashboard",
        components: {SideBar}
    }
</script>

<template>
    <div class="d-flex">
        <SideBar/>
        <div>
            <div class="topnav mt-3">test</div>
            <div class="p-5"><router-view/></div>
        </div>
    </div>
</template>