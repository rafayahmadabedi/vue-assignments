<template>
    <div class="calculator">
    <div class="display">{{current || '0'}}</div>
    <div @click="clear" class="btn cancel">C</div>
    
    <div @click="percent" class="btn">%</div>
    <div @click="divide" class="btn operator">÷</div>
    <div @click="append('7')" class="btn">7</div>
    <div @click="append('8')" class="btn">8</div>
    <div @click="append('9')" class="btn">9</div>
    <div @click="multiplication" class="btn operator">x</div>
    <div @click="append('4')" class="btn">4</div>
    <div @click="append('5')" class="btn">5</div>
    <div @click="append('6')" class="btn">6</div>
    <div @click="minus" class="btn operator">-</div>
    <div @click="append('1')" class="btn">1</div>
    <div @click="append('2')" class="btn">2</div>
    <div @click="append('3')" class="btn">3</div>
    <div @click="add" class="btn operator">+</div>
    <div @click="append('3')" class="btn zero">0</div>
    <div @click="dot" class="btn">.</div>
    <div @click="equal" class="btn operator">=</div>
  </div>
</template>

<script>
export default {
    name: 'Calculator',
    data() {
        return {
            total: 0,
            inputNum: 0
        }
    },
    methods: {
        clear() {
            this.total = 0;
            this.inputNum = 0;
        },
        add() {
            this.total = this.total + this.inputNum;
        },
        subtract() {
            this.total = this.total - this.inputNum;
        },
        multiply() {
            this.total = this.total * this.inputNum;
        },
        divide() {
            this.total = this.total / this.inputNum;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator{
  width: 350px;
  margin: 0 auto;
  display: grid;
  font-size: 40px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
.display{
  grid-column: 1/5;
  background-color: #2db34a;
  color: white;
}
.zero{
  grid-column: 1 / 3;
}

.btn{
  cursor: pointer;
  background-color: #eee;
  border: 1px solid lightgray;
}
.btn:hover{
  cursor: pointer;
  background-color:#333;
  color: white;
}
.operator{
  background-color: blanchedalmond;
  color: black;
}
.cancel{
  grid-column: 1/3;
}
</style>