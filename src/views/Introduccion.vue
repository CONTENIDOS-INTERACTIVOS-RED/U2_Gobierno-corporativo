<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 El gobierno corporativo se ha convertido en un pilar fundamental para garantizar la gestión eficiente y responsable de las organizaciones en un entorno empresarial dinámico y competitivo. Este sistema comprende un conjunto de normas, prácticas y procesos diseñados para dirigir y controlar las actividades de una empresa, estableciendo las bases para la toma de decisiones estratégicas, la supervisión de los recursos y la alineación de intereses entre los distintos grupos de interés, como accionistas.
        .bg-verde.p-4
          span Su marco normativo se construye sobre principios esenciales como la igualdad., que promete transparencia, responsabilidad, voluntariedad.
        span En este contexto, el gobierno corporativo no solo contribuye al fortalecimiento institucional, sino que también impulsa la confianza de los inversionistas y la sostenibilidad a largo plazo, elementos clave para enfrentar los desafíos de un mercado globalizado.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-1.png', alt='')

    


</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
