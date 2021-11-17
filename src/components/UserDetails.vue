<template>
    <div @click="selectUser">
        <h3> {{ fullName(user.firstName, user.lastName) }} </h3>
        <p> {{user.email}} </p>
        <p> Roll # {{user.rollNum}} </p>
    </div>
</template>
<script>
import upperCase from '../shared/filters/upperCase'

export default {
    name: 'UserDetails',
    props: {
        user: Object
    },
    emits: ['selectUser'],
    methods: {
        fullName (firstName, lastName) {
            return `${upperCase(firstName)} ${upperCase(lastName)}`;
        },
        selectUser () {
            this.$emit('selectUser', this.user);
        }
    }
    
}
</script>
<style scoped>
    
</style>