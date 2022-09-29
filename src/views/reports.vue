<script>
    export default {
        "name": "Reports",
        data: () => {
            return {
                activeTab: 1,
            }
        },
        methods: {
            changeTab(tab){
                this.activeTab = tab
            }
        }
    }
</script>

<template>
    <div>
        <div class="tabs">
            <div class="tab">
                <span @click="changeTab(1)">Business</span>
                <hr class="tab-active-hr" v-if="activeTab === 1">
            </div>
            <div class="tab">
                <span @click="changeTab(2)">Users</span>
                <hr class="tab-active-hr" v-if="activeTab === 2">
            </div>
            <div class="tab">
                <span @click="changeTab(3)">Perfomance</span>
                <hr class="tab-active-hr" v-if="activeTab === 3">
            </div>
            <div class="tab">
                <span @click="changeTab(4)">Conversion</span>
                <hr class="tab-active-hr" v-if="activeTab === 4">
            </div>
            <div class="tab">
                <span @click="changeTab(5)">Content</span>
                <hr class="tab-active-hr" v-if="activeTab === 5">
            </div>
        </div>
            <section v-if="activeTab == 1">
                <div>test1</div>
            </section>
            <section v-if="activeTab == 2">
                <div>test2</div>
            </section>
            <section v-if="activeTab === 3">
                <div>test3</div>
            </section>
            <section v-if="activeTab === 4">
                <div>test4</div>
            </section>
            <section class="tab" v-if="activeTab == 5">
                <div>test5</div>
            </section>
    </div>
</template>