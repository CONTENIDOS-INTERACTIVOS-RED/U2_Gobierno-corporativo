<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Estructura del Gobierno Corporativo '")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-4 La estructura de gobierno corporativo define la distribución de derechos y responsabilidades entre los diferentes participantes en una corporación, como la junta directiva, los gerentes, los directores, los accionistas y otras partes interesadas. Además, establece las reglas y procedimientos para la toma de decisiones en asuntos corporativos. Desde otra perspectiva, se puede afirmar que el gobierno corporativo es un sistema diseñado para proporcionar control y dirección a las organizaciones.
    p.mb-3 <b>Figura 1. </b> El sistema de creación de valor y el gobierno corporativo.
    .row.mb-4
      .col-12.col-lg-10.mx-auto(data-aos="fade-up")
        figure.mb-4
          img.mb-3(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
        figcaption.w-fit <b>Nota. </b> Tomado de Fernández Izquierdo, M. Á. (2014).
    
    #t_2_1.titulo-segundo
      div.d-flex
        span.me-3 2.1  
        h2 Estructuras de gobierno corporativo en el mundo

    p.mb-4 Las estructuras de gobierno corporativo varían en el mundo según las regulaciones legales, los sistemas económicos y las prácticas culturales de cada región.
    h2.mb-3 Modelo norteamericano

    .row.mb-4
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.d-flex.flex-column
        p.mb-4 En Estados Unidos, las estructuras de gobierno corporativo están diseñadas para garantizar el cumplimiento de la ley y la alineación con los períodos fiscales. Los estatutos de las empresas determinan la frecuencia de las reuniones de la Asamblea de Accionistas, que suelen coincidir con el cierre del año fiscal.
        .d-flex.align-items-start.bg-rojo.p-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-18.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Una característica distintiva de este modelo es la tendencia a unificar las funciones del Presidente de la Junta y del Presidente Ejecutivo en una sola persona. Las Juntas Directivas generalmente incluyen entre 8 y 16 miembros.

    p.mb-4 El modelo norteamericano se organiza en comités clave, según el análisis de Alexander Haro y otros autores:

    .row.position-relative.mb-4.py-4.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold Comité Gerencial
              p Responsable de gestionar y formular estrategias empresariales.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold Comité de Directores Externos
              p Compuesto por personas sin dependencia laboral con la empresa, se enfocan en evaluar el desempeño de la gerencia y tomar decisiones estratégicas.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold Comité de Compensación
              p Formado por individuos independientes, diseña y planifica la remuneración de los directivos, asegurando alineación con los objetivos corporativos.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold Comité de Auditoría
              p Integrado principalmente por miembros independientes, supervisa las actividades empresariales, evalúa la confiabilidad de los estados financieros, revisa el control interno y emite reportes.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold Comité de Nominación o Gobierno Corporativo (GC)
              p Encargado de reclutar nuevos miembros en caso de vacantes en la Junta Directiva y evaluar el desempeño de la Junta y sus integrantes.
    p.mb-4 Este modelo busca un equilibrio entre la supervisión interna y la independencia, promoviendo la eficiencia y la confianza en la gestión corporativa.
    p.mb-3 <b>Figura 2. </b> Estructura de Gobierno Corporativo en el Modelo Norteamericano 
    .row.mb-4
      .col-10.col-xl-8.mx-auto(data-aos="fade-up")
        figure.mb-4
          img.mb-3(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
        figcaption.w-fit <b>Nota. </b> Tomado de Gómez-Betancourt, G., & Zapata-Cuervo, N.  (2013).
    
    h2 Modelo anglosajón
    p.mb-4 En países como Estados Unidos y Reino Unido, el gobierno corporativo se caracteriza por:

    .row.mb-4
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7.col-xl-8(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Propiedad dispersa")
            p Los accionistas suelen tener participaciones pequeñas, evitando concentraciones de poder. Ejemplo: en la Bolsa de Londres, quienes controlan el 90% de las compañías poseen un máximo del 25% de las acciones.
          .div(titulo="Mercado de capitales activo")
            p La liquidez y eficiencia de los mercados facilitan la compra y venta de acciones, promoviendo que las empresas sean adquiridas si no están bien gestionadas.
          .div(titulo="Ofertas Públicas de Adquisición (OPA)")
            p Funcionan como un mecanismo para disciplinar a la gestión empresarial.
          .div(titulo="Protección legal")
            p Mejora la transparencia y minimiza los conflictos de interés entre directivos y accionistas.

    h2 Sistema japonés
    p.mb-4 El gobierno corporativo japonés se centra en:
    .row.mb-4
      .col-6.mx-auto.d-flex.flex-column(data-aos="fade-right")
        .bg-verde-2.px-4.py-3.px-xl-5.mb-0.border-verde.rounded-top-16
          p.text-bold.mb-0.text-white Asambleas de accionistas
        .bg-verde-2-claro.p-4.px-xl-5.h-100.border-verde.rounded-bottom-16
          span Compuestas por ejecutivos retirados y miembros de grandes grupos de accionistas.
      .col-6.mx-auto.d-flex.flex-column(data-aos="fade-right")
        .bg-morado.px-4.py-3.px-xl-5.mb-0.border-morado.rounded-top-16
          p.text-bold.mb-0.text-white Rentabilidad empresarial
        .bg-morado-2-claro.p-4.px-xl-5.h-100.border-morado.rounded-bottom-16
          span Compromiso con maximizar beneficios para los accionistas, garantizando la igualdad entre ellos.

    h2 Sistema chino
    p.mb-4 El sistema chino se enfoca en:
    .row.mb-4
      .col-12.col-lg-10.mx-auto
        .bg-gris-claro.p-4.mb-3(data-aos="fade-up")
          .row
            .col-auto.d-flex.mx-auto.mb-3.mb-md-0
              img(style="width:90px" src='@/assets/curso/unidad/img-26.svg', alt='Texto que describa la imagen')
            .col-12.col-md-5.d-flex.mb-3.mb-md-0
              h2.my-auto Estructura simple
            .col-12.col-md-5
              span Con énfasis en políticas de riesgo y auditoría.
        .bg-gris-claro.p-4.mb-3(data-aos="fade-up")
          .row
            .col-auto.d-flex.mx-auto.mb-3.mb-md-0
              img(style="width:90px" src='@/assets/curso/unidad/img-27.svg', alt='Texto que describa la imagen')
            .col-12.col-md-5.d-flex.mb-3.mb-md-0
              h2.my-auto Participación externa 
            .col-12.col-md-5
              span Mayor ponderación de independientes en la supervisión.
        .bg-gris-claro.p-4.mb-3(data-aos="fade-up")
          .row
            .col-auto.d-flex.mx-auto.mb-3.mb-md-0
              img(style="width:90px" src='@/assets/curso/unidad/img-28.svg', alt='Texto que describa la imagen')
            .col-12.col-md-5.d-flex.mb-3.mb-md-0
              h2.my-auto Transparencia
            .col-12.col-md-5
              span Divulgación abierta de información corporativa y derechos de los accionistas para participar en la toma de decisiones.

    h2 Sistema germano
    p.mb-4 El modelo alemán se destaca por:
    .row.mb-4
      .col-12.col-md-10.col-lg-8.mx-auto
        .row.mb-4
          .col-6.mx-auto.d-flex.flex-column(data-aos="fade-right")
            .bg-verde-2.px-4.py-3.mb-0.border-verde.rounded-top-16
              p.text-bold.mb-0.text-white Supervisión dual 
            .bg-verde-2-claro.p-4.h-100.border-verde.rounded-bottom-16
              span Una junta supervisa la administración de otros órganos reguladores.
          .col-6.mx-auto.d-flex.flex-column(data-aos="fade-right")
            .bg-morado.px-4.py-3.mb-0.border-morado.rounded-top-16
              p.text-bold.mb-0.text-white Separación de roles
            .bg-morado-2-claro.p-4.h-100.border-morado.rounded-bottom-16
              span Los miembros de la junta no pueden formar parte del consejo administrativo.

    h2 Sistema ecuatoriano
    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        .row.mb-4
          .col-12.col-xl-7
            p.mb-4 El gobierno corporativo ecuatoriano se conceptualiza como un medio de control y transparencia, promoviendo:
            .bg-verde.p-4.mb-4(data-aos="fade-up")
              .d-flex.mb-2
                p •
                p.mb-0 <b>Trato equitativo: </b>Protección de los derechos de socios o accionistas. 
              .d-flex.mb-2
                p •
                p.mb-0 <b>Transparencia: </b>Rendición de cuentas y comunicación eficiente.
              .d-flex.mb-2
                p •
                p.mb-0 <b>Responsabilidad corporativa:</b> Consideración de aspectos sociales y ambientales.
              .d-flex.mb-0
                p •
                p.mb-0 <b>Voluntariedad: </b>Autorregulación basada en la ética empresarial.
            span Este modelo busca fortalecer la sostenibilidad y minimizar la corrupción mediante la administración eficiente de recursos.
          .d-none.d-xl-block.col-xl-5
            img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')

        h2 Sistema Colombiano
        p.mb-4 En Colombia, el gobierno corporativo se basa en un conjunto de regulaciones y principios que tienen como objetivo garantizar la transparencia, la rendición de cuentas y la equidad en las empresas, fomentando la confianza de los inversores, empleados y otros grupos de interés. A continuación, se presenta un resumen de cada uno de los elementos clave mencionados:
        p.mb-3 <b>Figura 3. </b> Sistema Colombiano
        img.mb-5(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/103051") Centro de Excelencia en Gobierno Corporativo, A. C. (2007). El gobierno de las entidades de la sociedad civil organizada. Editorial Miguel Ángel Porrúa.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/Xzwu88SmG-A") Maestría administración de organizaciones (2022). Principios del gobierno corporativo [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')



</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
