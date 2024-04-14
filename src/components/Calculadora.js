
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
