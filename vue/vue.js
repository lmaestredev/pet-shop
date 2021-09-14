const app = Vue.createApp({
    data(){
        return{
            articulos:[],
            juguetes:[],
            medicamentos:[],
            cantidad_producto_pedido: 0
        }

    },
    created(){
        fetch("https://apipetshop.herokuapp.com/api/articulos")
        .then(res => res.json())
        .then(data =>{
            this.articulos = data.response

            this.juguetes = this.articulos.filter(articulo => articulo.tipo === "Juguete")
            this.medicamentos = this.articulos.filter(articulo => articulo.tipo === "Medicamento")
        })
    },
    methods:{
        aumentarCantidadProducto(){
            this.cantidad_producto_pedido++
        },
        reducirCantidadProducto(){
            this.cantidad_producto_pedido--
        },
        enviado(){
            alert("El formulario se ha enviado correctamente, gracias por su tiempo!")
        }
    }
})

consola = app.mount("#app")