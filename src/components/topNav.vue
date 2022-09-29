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
        <div>
            <span class="section-name text-capitalize">{{ title }}</span>
        </div>
        <div>
            <img class="profile-avatar" src="@/assets/logo.png" alt="profile avatar">
        </div>
    </div>
</template>