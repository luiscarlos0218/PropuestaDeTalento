<template>
  <div>
    <a name="Acerca"></a>
    <div class="d-flex">
      <div class="izquierda">
        <label class="titulo"> Optimiza la productividad en tu organización. </label>
        <br>
        <label class="parrafo1">Adquiere conocimientos y herramientas que te ayudarán a gestionar y
          resolver situaciones en el ámbito laboral.</label>
      </div>
      <div class= "derecha">
        <label class="titulo1">Ejercite la fuerza de voluntad, cree mejores hábitos y aproveche al
          máximo el tiempo cuando se trabaje en equipo.</label>
        <p class="parrafo2">Nuestro Equipo de Coaching los guiara a definir las metas en común,
          identificar que limita su desarrollo y poner en marcha una transformación que les permita maximizar su potencial y optimizar su
          rendimiento.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Acerca",
};
</script>

<style scoped>
.d-flex{
  width: 100%;
  height: auto;
}
.izquierda{
  width: 50%;
  height: auto;
  background-color: #004037;
  color: white;
  padding: 40px;
}
.derecha{
  width: 50%;
  height: auto;
  background-color: #e9e9e9;
  color: black;
  padding: 40px;
}
.titulo{
  font-size: 42px;
}
.titulo1{
  font-size: 25px;
}
.parrafo1{
  font-size: 20px;
  margin-top: 20px;

}
.parrafo2{
  font-size: 18px;
  margin: 20px;
  margin-bottom: 5px;
}
</style>