<template>
    <form>
    <div v-show="showError"> {{ errorMsg }} </div>
    <div>
        <label for="email">Email</label>
        <input type="text" name="email" v-model="formData.email">
    </div>
    <div>
        <label for="password">Password</label>
        <input type="text" name="password" v-model="formData.password">
    </div>
    <button type="submit" @click="login">Sign Up</button>
    </form>
</template>
<script>

export default {
    data() {
        return {
            formData: {
                email: null,
                password: null
            },
            showError: false,
            errorMsg: null
        }
    },
    methods: {
        login(e) {
            e.preventDefault();

            if ( this.formData.email && this.formData.password ) {
                let users = localStorage.users ? JSON.parse(localStorage.users) : [];
                let loggedInUser = users.find(u => (u.email===this.formData.email && u.password===this.formData.password));

                if (loggedInUser) {
                    sessionStorage.authenticatedUser = JSON.stringify(loggedInUser);

                    this.$router.push({ name: 'Dashboard' });
                }
                else {
                    this.showError = true;
                    this.errorMsg = 'Invalid email or password!';
                }
            } else {
                this.showError = true;
                this.errorMsg = 'All fields are required!'
            }
        }
    }
    
}
</script>
<style scoped>
    
</style>