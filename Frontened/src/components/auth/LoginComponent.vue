<template>
<div class='containerP'> 
<div class='container' mt-5>
        <form>
  <div class="form-group">
    <div>
    <label class="titulo">Login</label>
    </div>
    <div>
    <label class="usuario"><img src="https://cdn.pixabay.com/photo/2013/07/13/13/42/tux-161406_960_720.png"></label>
    </div>
    <label class="email" for="exampleInputEmail1">Correo</label>
    <input v-model="login.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted"></small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Contraseña</label>
    <input v-model="login.password" type="password" class="form-control" id="exampleInputPassword1">
  </div>
  
  <button @click.prevent ="loginUser" type="submit" class="btn btn-primary">Entrar</button>
  </form>

  </div>
  </div>
</template>
<script>
import swal from 'sweetalert'
import axios from 'axios'
export default {
    name:"TheLogin",
    data(){
        return{
          login:{
            email:"",
            password:""
          }

        }
    },
    beforecreated(){
       this.$store.dispatch('autologin')? this.$router.push({name:'Privada'}):false;
    },
    methods:{
      loginUser(){
        axios.post('http://localhost:3000/api/usuario/login', this.login)
        .then(response=>{
          let data = response.data;
          this.$store.dispatch('guardarToken',data.tokenReturn)
          this.$router.push({name:'Privada'})
          swal("Acceso concedido", "Bienvenido!", "success")
          console.log(data);
        })
        .catch(error=>{
          swal("Acceso Denegado!", "Datos Erroneos!", "error")
          console.log(error);
          return error;
        })
        
        
      }
        
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.form-control{

  position: relative;
  margin: auto;
  width: 100%;
  max-width: 280px;
  border-radius: 10px;
  background-color: transparent;
  border-bottom: 3px solid white;
  border-top: none;
  border-right: none;
  border-left: none;
  overflow: hidden;
  
  text-decoration: none;
  color: white;
  font-size: 15px;
  font-weight: bold;
}


.titulo{

  margin-bottom: 30px;
  color: cornsilk; 
  width: 100%;
  height: 80px;
  font-size: 60px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  float: none;
  font-weight: bold;
}
.usuario img{
  width: 130px;
  height: 130px;
}
.email{
  margin-top: 30px;
}
.containerP{
  padding: 30px;
  height: 100%;
  width: 100%;
  background-image: url("https://cdn.pixabay.com/photo/2020/12/10/23/42/frankfurt-5821664_960_720.jpg");
  background-size: cover;
}
.container{

  height: 550px;
  width: 500px;
  background: rgba(57, 59, 59, 0.9);
  margin-top:100px ;
  background-image: url("/./././assets/fondo.jpg");
  padding: 20px;
  padding-right: 100px;
  padding-left: 100px;

}
label{
  font-weight: bold;
  color: white;
}

.btn-primary{
  margin-top: 30px;
  color: white;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  background-color: #005E52;
  width: 150px;
  height: 40px;
  font-size: 18px;
}

</style>