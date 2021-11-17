<template>
    <form>
    <div class="error"> 
        <span v-show="showError"> {{ errorMsg }} </span>
    </div>
    <div>
        <label for="firstName">First Name</label>
        <input type="text" name="firstName" v-model="formData.firstName" required>
    </div>
    <div>
        <label for="lastName">Last Name</label>
        <input type="text" name="lastName" v-model="formData.lastName" required>
    </div>
    <div>
        <label for="email">Email</label>
        <input type="text" name="email" v-model="formData.email" required>
    </div>
    <div>
        <label for="password">Password</label>
        <input type="password" name="password" v-model="formData.password" required>
    </div>
    <button type="submit" @click="signup">Sign Up</button>
    <p>Already have account? <router-link to="/login">Login here!</router-link> </p>
    </form>
</template>
<script>
export default {
    name: 'Signup',
    data() {
        return {
            formData: {
                firstName: null,
                lastName: null,
                email: null,
                password: null,
            },
            showError: false,
            errorMsg: null
        }
    },
    methods: {
        signup(e) {
            e.preventDefault();
            if (this.formData.firstName && this.formData.lastName && this.formData.email && this.formData.password) {
                
                let users = localStorage.users ? JSON.parse(localStorage.users) : [];

                if ( !(users.find( u => u.email === this.formData.email )) ) {
                    users = [...users, this.formData];
                    localStorage.users = JSON.stringify(users);

                    this.$router.push({ name: 'Login' });
                }
                else {
                    this.showError = true;
                    this.errorMsg = 'Email already used!';
                }
            }
            else {
                this.showError = true;
                this.errorMsg = 'All the fields are required!';
            }
        }
    }
    
}
</script>
<style scoped>
    .error {
        color: red;
        margin: 50px;
    }
</style>