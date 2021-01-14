<template>
  <div>
    <div class="titulo" align="center" style="font-size: 45px; color: #004037; margin-top: 0px;">
      <h1 align="center" style="font-size: 45px; color: #004037; "> Casos de exito</h1>
    </div>


    <div class="d-flex">

      <div class="container1" style="width: 600px; max-width: 50% ">

        <h2>CAR DOC</h2>
        <img class="caso1" src="../../public/img/Caso1.png" alt="Caso de éxito" />

        <label class="parrafo">Necesitabamos capacitacion en nuestra empresa, 
          teniamos deficiencia en la planificacion. Nos ayudaron a formar un 
          excelente grupo de trabajo y ahora obtenemos mejores resultados. </label>
      </div>

      <div class="container2" style="width: 600px; max-width: 50% ">
        <h2>Premium Express</h2>
        <img class="caso2" src="../../public/img/Caso2.png" alt="Caso de éxito"/>

        <label class="parrafo">Buscabamos escalabilidad y algo que no teniamos 
          para desarrollarnos de forma interna. Los miembros del equipo de coaching 
          nos ayudaron a mejorar los procesos de produccion y su plataforma nos permite 
          realizar el seguimiento deseado. </label>
      </div>

    </div>
    <div class="d-flex">

      <div class="container1" style="width: 600px; max-width: 50% ">

        <h2>Paraiso Babel</h2>
        <img class="caso3" src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_960_720.png" alt="Caso de éxito" />

        <label class="parrafo"> Esta empresa ha otorgado un servicio de calidad en el que ha cumplido
          con las expectativas y objetivos previstos con compromiso y profesionalismo. </label>
      </div>

      <div class="container2" style="width: 600px; max-width: 50% ">
        <h2>Modas Tex</h2>
        <img class="caso4" src="https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_960_720.png" alt="Caso de éxito"/>

        <label class="parrafo"> Este equipo de coaching es comprometido con los resultados,
          buscando siempre la innovación y demostrando buenas prácticas de comunicación
          y trabajo de forma independiente, les debemos mucho. </label>
      </div>

    </div>




    <footer class="page-footer bg-secondary text-white pt-4" style="margin-top: 100px;" >
      <h5
        align="center"
        class="text-uppercase font-weight-bold"
        style="font-size: 25px"
      >
        Contáctenos
      </h5>
      <a name="Contacto"></a>
      <div class="container-fluid text-center text-md-left">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <img
                width="120px"
                src="../../public/img/email.png"
                alt="correo"
                class="rounded mx-auto d-block"
              />
              <br />
              <br />
              <a target="_blank" href="mailto:contacto@gestiondinámica.com.co"
                ><button
                  class="btn btn-outline-dark"
                  style="margin-left: 50%; transform: translateX(-50%); background-color: #004037; color: white;"
                >
                  Enviar Correo
                </button></a
              >
            </div>
            <div class="col-sm">
                <img
                width="120px"
                src="../../public/img/phone.png"
                alt="llamada"
                class="rounded mx-auto d-block"
              />
              <br />
              <br />
              <p style="text-align: center;">
                  +57 (1) 675-6074 Ext. 5047 - 5827 - 5106
              </p>
            </div>
            <div class="col-sm">
                <img
                width="120px"
                src="../../public/img/github.png"
                alt="github"
                class="rounded mx-auto d-block"
              />
              <br />
              <br />
              <a target="_blank" href="https://github.com/luiscarlos0218/Semana-4-5"
                ><button
                  class="btn btn-outline-dark "
                  style="margin-left: 50%; transform: translateX(-50%); background-color: #004037; color: white;"
                >
                  Visítenos en Github
                </button></a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright text-center py-1" style="background-color: #343A40;" >
        (c) 2020 Copyright: DAD
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "CasosFooter",
};
</script>

<style scoped>
.d-flex{
  width: 80%;
  height: 480px;
  margin-left: 120px;
  background-color: #ffffff;
}

.caso1{
  width: 250px;
  height: 200px;
  margin:20px;
  margin-left: 100px;

  }

  .caso2{
  width: 400px;
  height: 200px;
  margin:20px;
  margin-left: 70px;
  }
.caso3{
  width: 250px;
  height: 200px;
  margin:20px;
  margin-left: 100px;

  }
  .caso4{
  width: 200px;
  height: 200px;
  margin:30px;
  margin-left: 130px;

  }

  .titulo{
  margin-bottom: 50px;
  color: #004037;
}


  .parrafo{
  margin: 50px;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 60px;
  color: black;
  }

  h2{
    margin-left: 110px;
    margin-top: 20px;
    font-size: 35px;
    color: #004037;
  }
.container1{

  border: #004037 5px dotted;
  margin: 10px;
  margin-right: 20px;
}
.container2{

  border: #004037 5px dotted;
  margin: 10px;
  margin-left: 20px;
}
</style>