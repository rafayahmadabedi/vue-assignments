<template>
    <div class="">
        <input v-model="valueOne" placeholder="Enter Value" type="number">
        <input v-model="valueTwo" placeholder="Enter Value" type="number">
        <div v-if="result !== null">Result: {{result}}</div>

        <button @click="clear">C</button>
        <button @click="add">+</button>
        <button @click="subtract">-</button>
        <button @click="multiply">x</button>
        <button @click="divide">÷</button>
  </div>
</template>

<script>
export default {
    name: 'Calculator',
    data() {
        return {
            valueOne: null,
            valueTwo: null,
            result: null,
        }
    },
    methods: {
        clear() {
            this.valueOne = null;
            this.valueTwo = null;
            this.result = null;
        },
        add() {
          this.result = Number(this.valueOne) + Number(this.valueTwo);
        },
        subtract() {
          this.result = Number(this.valueOne) - Number(this.valueTwo);
        },
        multiply() {
          this.result = Number(this.valueOne) * Number(this.valueTwo);
        },
        divide() {
          this.result = Number(this.valueOne) / Number(this.valueTwo);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>