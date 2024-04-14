<template>
  <div class="calculadora">
      <div class="display">{{valorActual || '0'}}</div>
      <div @click="limpiar" class="button">C</div>
      <div @click="signo" class="button">+/-</div>
      <div @click="porcentaje" class="button">%</div>
      <div @click="dividir" class="button operator">÷</div>
      <div @click="juntarNumeros('7')" class="button">7</div>
      <div @click="juntarNumeros('8')" class="button">8</div>
      <div @click="juntarNumeros('9')" class="button">9</div>
      <div @click="multiplicar" class="button operator">x</div>
      <div @click="juntarNumeros('4')" class="button">4</div>
      <div @click="juntarNumeros('5')" class="button">5</div>
      <div @click="juntarNumeros('6')" class="button">6</div>
      <div @click="disminuir" class="button operator">-</div>
      <div @click="juntarNumeros('1')" class="button">1</div>
      <div @click="juntarNumeros('2')" class="button">2</div>
      <div @click="juntarNumeros('3')" class="button">3</div>
      <div @click="sumar" class="button operator">+</div>
      <div @click="juntarNumeros('0')" class="button zero">0</div>
      <div @click="punto" class="button">.</div>
      <div @click="resultado" class="button">=</div>
    </div>
  </template>

<script>
export default {
  data () {
    return {
      valorActual: '123',
      numeroAnterior: null,
      operador: null,
      operadorPulsado: false
    }
  },
  methods: {
    limpiar () {
      this.valorActual = '0'
    },
    n () {
      this.operadorPulsado = true
    },
    signo () {
      this.valorActual = this.valorActual.charAt(0) === '-' ? this.valorActual.slice(1) : `-${this.valorActual}`
    },
    porcentaje () {
      this.valorActual = `${parseFloat(this.valorActual) / 100}`
    },
    juntarNumeros (numero) {
      if (this.operadorPulsado) {
        this.valorActual = ''
        this.operadorPulsado = false
      }

      this.valorActual = `${this.valorActual}${numero}`
    },
    punto () {
      if (this.valorActual.indexOf('.') === -1) {
        this.juntarNumeros('.')
      }
    },
    establecerValor() {
      this.numeroAnterior = this.valorActual;
      this.operadorPulsado = true;
    },
    
    dividir () {
      this.operador = (num1, num2) => num1 / num2
      this.establecerValor()
    },
    multiplicar () {
      this.operador = (num1, num2) => num1 * num2
      this.establecerValor()
    },
    disminuir () {
      this.operador = (num1, num2) => num1 - num2
      this.establecerValor()
    },
    sumar () {
      this.operador = (num1, num2) => num1 + num2
      this.establecerValor()
    },
    resultado () {
      this.valorActual = `${this.operador(
        parseFloat(this.numeroAnterior),
        parseFloat(this.valorActual)
      )}`
      this.numeroAnterior = null
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculadora {
  margin: 0 auto;
  width: 350px;
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
.display {
  grid-column: 1 / 5;
  background-color: #333;
  color: white;
}
.zero {
  grid-column: 1 / 3;
}
.button {
  background-color: #f2f2f2;
  border: 1px solid #999;
}
.operator {
  background-color: orange;
  color: white;
}
</style>