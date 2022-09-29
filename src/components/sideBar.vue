<script>
    export default {
        name: "sidebar",
        data: () => {
            return {
                resizeSidebar: false,
                activeItem: "",
                width: "70px",
            }
        },
        methods: {
            toggleItem (item) {
                this.activeItem = item
            },
            toggleSidebar () {
                if (this.resizeSidebar === true){
                    this.resizeSidebar = false
                }else{
                    this.resizeSidebar = true
                }
                console.log(this.resizeSidebar)
            }
        }
    }
</script>

<template>
    <div>
        <aside v-if="!resizeSidebar" class="sidebar pt-3">
            <div class="text-start sidebar-header">
                <b-icon @click="toggleSidebar" icon="three-dots"></b-icon>
            </div>
            <div class="d-flex flex-column text-light">
                <span class="sidebar-item" 
                    @click="toggleItem('Overview')"
                   :class="{'sidebar-item-active': activeItem == 'Overview'}">
                   <i class="fa fa-solid fa-building"></i>
                   <router-link class="router-link" to="/overview">Overview</router-link>
                </span>
                <span class="sidebar-item"
                    @click="toggleItem('Reports')"
                    :class="{'sidebar-item-active': activeItem == 'Reports'}">
                    <i class="fa fa-duotone fa-square-poll-vertical"></i>
                    <router-link class="router-link" to="/reports">Reports</router-link>
                </span>
                <span class="sidebar-item"
                    @click="toggleItem('Products')"
                    :class="{'sidebar-item-active': activeItem == 'Products'}">
                   <b-icon icon="briefcase-fill"></b-icon>
                   <router-link class="router-link" to="/products">Products</router-link>
                </span>
                <span class="sidebar-item"
                    @click="toggleItem('Members')"
                    :class="{'sidebar-item-active': activeItem == 'Members'}" >
                    <b-icon icon="people-fill"></b-icon>
                    <router-link class="router-link" to="/members">Members</router-link>
                </span>
                <span class="sidebar-item"
                    @click="toggleItem('Teams')"
                    :class="{'sidebar-item-active': activeItem == 'Teams'}">
                    <i class="fa fa-solid fa-users"></i>
                    <router-link class="router-link" to="/teams">Teams</router-link>
                </span>
                <span class="sidebar-item"
                    @click="toggleItem('Message')"
                    :class="{'sidebar-item-active': activeItem == 'Message'}">
                   <b-icon icon="chat-right-fill"></b-icon>
                    <router-link class="router-link" to="/messages">Messages</router-link>
                </span>
                <span class="sidebar-item"
                    @click="toggleItem('Account')"
                    :class="{'sidebar-item-active': activeItem == 'Account'}">
                   <b-icon icon="gear-fill"></b-icon>
                    <router-link class="router-link" to="/account">Account</router-link>
                </span>
            </div>
        </aside>

        <aside :style="{'width': width}" style="tarnsition: 2s;" v-if="resizeSidebar" class="sidebar">
            <div class="text-start sidebar-header pt-3">
                <b-icon @click="toggleSidebar" icon="three-dots"></b-icon>
            </div>
            <div class="d-flex flex-column text-light">
                <span class="sidebar-item" 
                    @click="toggleItem('Overview')"
                   :class="{'sidebar-item-active': activeItem == 'Overview'}">
                   <i class="fa fa-solid fa-building"></i>
                </span>
                <span class="sidebar-item mt-3"
                    @click="toggleItem('Reports')"
                    :class="{'sidebar-item-active': activeItem == 'Reports'}">
                    <i class="fa fa-duotone fa-square-poll-vertical"></i>
                </span>
                <span class="sidebar-item mt-3"
                    @click="toggleItem('Products')"
                    :class="{'sidebar-item-active': activeItem == 'Products'}">
                   <b-icon icon="briefcase-fill"></b-icon>
                </span>
                <span class="sidebar-item mt-3"
                    @click="toggleItem('Members')"
                    :class="{'sidebar-item-active': activeItem == 'Members'}" >
                    <b-icon icon="people-fill"></b-icon>
                </span>
                <span class="sidebar-item mt-3"
                    @click="toggleItem('Teams')"
                    :class="{'sidebar-item-active': activeItem == 'Teams'}">
                    <i class="fa fa-solid fa-users"></i>
                </span>
                <span class="sidebar-item mt-3"
                    @click="toggleItem('Message')"
                    :class="{'sidebar-item-active': activeItem == 'Message'}">
                   <b-icon icon="chat-right-fill"></b-icon>
                </span>
                <span class="sidebar-item mt-3"
                    @click="toggleItem('Account')"
                    :class="{'sidebar-item-active': activeItem == 'Account'}">
                   <b-icon icon="gear-fill"></b-icon>
                </span>
            </div>
        </aside>
    </div>
</template>