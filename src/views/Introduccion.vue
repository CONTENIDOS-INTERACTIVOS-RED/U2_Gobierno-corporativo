<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .bg-fondo-1.bg-full-width
      .px-5.pb-md-3.py-4

        .row
          .col-12.col-xl-7(data-aos="fade-right")
            p.mb-4 El Gobierno Corporativo es un conjunto de prácticas esenciales para garantizar el funcionamiento transparente y responsable de las empresas. Su propósito principal radica en establecer conexiones sólidas entre los diferentes actores organizacionales, como accionistas, juntas directivas, gerentes y otros interesados, promoviendo la colaboración y la toma de decisiones éticas que beneficien tanto a la empresa como a la sociedad.
            .bg-verde.p-4
              span A lo largo del tiempo, su relevancia ha crecido debido a la necesidad de prevenir riesgos corporativos y fortalecer la confianza de los inversionistas. Modelos internacionales, como los de Estados Unidos, Japón y Colombia, han adaptado el concepto a sus contextos específicos, incorporando regulaciones que promueven la rendición de cuentas, la equidad y la sostenibilidad empresarial. Estos modelos destacan por integrar criterios como la transparencia y la diversidad, factores clave para el éxito organizacional.
          .col-5.d-none.d-xl-block(data-aos="fade-left")
            img.mb-4(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')
    .row.mb-4
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.d-flex.flex-column
        .d-flex.align-items-start.bg-amarillo.p-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-3.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") En el caso colombiano, el Gobierno Corporativo se estructura en torno a principios fundamentales como la responsabilidad y la autorregulación, buscando alinear los intereses de todos los grupos involucrados. Además, enfatiza la importancia de la diversidad y la sostenibilidad como ejes para una gestión empresarial que no solo se enfoque en resultados económicos, sino también en impactos positivos para el entorno social y ambiental.


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
