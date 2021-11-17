<template>
    <div>
        <h1>Dashboard</h1>
        <p v-show="selectedUser"> <b>Selected User</b>: {{selectedUserName}} </p>
        <h3>Users List</h3>
        <UserDetails v-for="user in users" :key="user.email" :user="user" @select-user="selectUser($event)" />
    </div>
</template>

<script>
import UserDetails from "../components/UserDetails.vue";

export default {
    name: 'Dashboard',
    components: {
        UserDetails
    },
    data() {
        return {
            users: localStorage.users ? JSON.parse(localStorage.users) : [],
            selectedUser: null
        }
    },
    mounted() {
        this.addPhoneNumber();
    },
    methods: {
        // Since using Vue 3, filters are replaced computed and methods
        async addPhoneNumber() {

            for (const user of this.users) {
                let rollNum = await fetch("https://www.random.org/integers/?num=1&min=0&max=1000&col=1&base=10&format=plain&rnd=new")
                .then(res => res.json());

                user.rollNum = rollNum;
            }
        },
        selectUser(user) {
            this.selectedUser = user;
        }
    },
    computed: {
        selectedUserName() {
            return this.selectedUser ? `${this.selectedUser.firstName} ${this.selectedUser.lastName}` : null;
        }
    }
}
</script>
<style>
    
</style>