<script>
    export default {
        props: {
            title: {
                required: true
            }
        }
    }
</script>

<template>
    <div class="top-nav mt-4 px-5">
        <div class="d-flex align-items-center gap-4 flex-wrap">
            <span class="section-name text-capitalize">{{ title }}</span>
            <div>
                <i class="fa-solid fa-chevron-left"></i>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div class="d-flex gap-2 align-items-center">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" 
                    class="border-0 rounded form-control shadow-none" 
                    placeholder="Find something">
            </div>
        </div>
        <div>
            <img class="profile-avatar" src="@/assets/logo.png" alt="profile avatar">
        </div>
    </div>
</template>