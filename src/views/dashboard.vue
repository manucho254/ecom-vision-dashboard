<script>
    import SideBar from "@/components/sideBar.vue"
    import TopNav from "@/components/topNav.vue";

    export default {
        name: "dashboard",
        components: { SideBar, TopNav }
    }
</script>

<template>
    <div class="d-flex">
        <SideBar/>
        <div class="w-100">
            <TopNav title="test"/>
            <div class="p-5"><router-view/></div>
        </div>
    </div>
</template>