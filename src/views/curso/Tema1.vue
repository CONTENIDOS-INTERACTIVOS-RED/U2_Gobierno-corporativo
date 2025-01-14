<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Fundamentos del gobierno corporativo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-12.col-xl-8(data-aos="fade-right")
        .bg-gris.p-4
          span El Gobierno Corporativo es un sistema de normas, prácticas y procesos que busca garantizar un funcionamiento transparente, ordenado y eficiente de las empresas. Su objetivo principal es establecer relaciones efectivas entre las áreas clave de la organización, incluyendo administración, gerencia, accionistas, junta directiva, dueños y socios, promoviendo la colaboración y previniendo conflictos.

      .col-4.d-none.d-xl-block(data-aos="fade-left")
        img.mb-4(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')

    p.mb-4 El Gobierno Corporativo, también conocido como Gobernanza Corporativa en algunas regiones de Latinoamérica, es un conjunto de prácticas reguladas que facilitan la organización de una empresa. Estas prácticas se enfocan en:
    .row.mb-4
      .col-6.col-md-4.mx-auto(data-aos="fade-up")
        .bg-amarillo.p-4.h-100
          h2.mb-2 0.1
          span Mejorar la participación y comunicación interna.
      .col-6.col-md-4.mx-auto(data-aos="fade-up")
        .bg-rojo.p-4.h-100
          h2.mb-2 0.2
          span Fomentar la transparencia en la gestión.
      .col-6.col-md-4.mx-auto(data-aos="fade-up")
        .bg-gris.p-4.h-100
          h2.mb-2 0.3
          span Garantizar la estabilidad financiera y la atracción de inversiones.
    p.mb-4 Su implementación varía según el modelo de negocio, tamaño y objetivos de cada empresa, pero su estructura básica incluye tres órganos principales: accionistas, comités y la junta directiva.
    h2 Evolución histórica del Gobierno Corporativo
    p.mb-4 El Gobierno Corporativo ha experimentado una evolución significativa a lo largo de las últimas décadas, consolidándose como un pilar clave para la transparencia y la sostenibilidad empresarial.

    .row.position-relative.mb-5.py-4.bg-verde.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Década de 1990 
              p - Escándalos corporativos expusieron deudas y desvíos de recursos, destacando la importancia de la transparencia y la ética empresarial. <br>- En 1992, el "Informe Cadbury" en Inglaterra sentó las bases del Gobierno Corporativo para prevenir riesgos y garantizar la rentabilidad mediante procesos internos.

            .d-none.d-lg-block.col-md-6.col-lg-4.col-xl-5(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
          
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Año 1999
              p - La OCDE adoptó el concepto de Gobierno Corporativo y estableció procedimientos y normativas que influyeron en las empresas de América Latina.
            .d-none.d-lg-block.col-md-6.col-lg-4.col-xl-5(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
          
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Caso Enron (2001) y Ley SOX (2002)
              p - El escándalo de Enron impulsó la Ley Sarbanes-Oxley (SOX) en los Estados Unidos, reforzando la transparencia, la prevención de riesgos y el cumplimiento ético. <br>- Incluye acciones como control de información, registros operativos y supervisión de decisiones empresariales.

            .d-none.d-lg-block.col-md-6.col-lg-4.col-xl-5(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
          
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Actualidad
              p - El Gobierno Corporativo se integra en los criterios ASG (Ambientales, Sociales y de Gobernanza), promoviendo la rentabilidad a través de la sostenibilidad y el impacto social.
            .d-none.d-lg-block.col-md-6.col-lg-4.col-xl-5(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
          
    h2 Relación del Gobierno Corporativo con los criterios ASG
    p.mb-4 El Gobierno Corporativo es la base de los criterios ASG, ya que establece las estructuras necesarias para implementar estrategias sociales y ambientales. Aunque puede operar de manera independiente, su integración con los aspectos Ambientales y Sociales potencia el desarrollo sostenible de las empresas.
    .row.mb-4
      .col-10.mx-auto(data-aos="fade-up")
        .bg-verde.p-4.mb-3
          .row
            .col-auto.d-flex.mx-auto.mb-3.mb-md-0
              img(style="width:90px" src='@/assets/curso/unidad/img-10.svg', alt='Texto que describa la imagen')
            .col-12.col-md-5.d-flex.mb-3.mb-md-0
              h2.my-auto Criterio G (Gobernanza)
            .col-12.col-md-5
              span Funciona como el pilar estructural que garantiza el cumplimiento de los criterios A (Ambientales) y S (Sociales).
        .bg-verde.p-4.mb-3
          .row
            .col-auto.d-flex.mx-auto.mb-3.mb-md-0
              img(style="width:90px" src='@/assets/curso/unidad/img-11.svg', alt='Texto que describa la imagen')
            .col-12.col-md-5.d-flex.mb-3.mb-md-0
              h2.my-auto Criterio A y S
            .col-12.col-md-5
              span Dependen de la gobernanza para asegurar su implementación eficaz dentro de la organización.

    p.mb-4.text-bold Importancia actual
    .row.mb-4
      .col-12.col-xl-8(data-aos="fade-right")
        p.mb-4 El Gobierno Corporativo es una herramienta clave para la sostenibilidad y el éxito a largo plazo de las empresas. Su adecuada aplicación no solo fomenta la transparencia y la ética, sino que también contribuye al fortalecimiento de la confianza entre inversores, colaboradores y la sociedad en general.
        .bg-rojo.p-4
          span El Gobierno Corporativo actúa como el núcleo estratégico que conecta y organiza los objetivos económicos, sociales y ambientales, asegurando que las empresas operen con responsabilidad y visión a largo plazo.
      .col-4.d-none.d-xl-block(data-aos="fade-left")
        img.mb-4(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')

    p.text-bold.mb-4 Principios básicos del gobierno corporativo
    p.mb-4 El gobierno corporativo se fundamenta en principios básicos que promueven una gestión ética, eficiente y transparente en las organizaciones.
    .row.mb-5.mx-0
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-gris-oscuro.p-4(data-aos="fade-left")
        h2.mb-4(data-aos="fade-up") Responsabilidad
        span El gobierno corporativo establece reglas claras y transparentes que definen las responsabilidades de accionistas, directores, gerentes y otros stakeholders. Esto fomenta la rendición de cuentas, promueve una gestión ética y eficiente, y fortalece la confianza en la organización. También ayuda a reducir conflictos de intereses y asegura que las decisiones se alineen con los objetivos de la empresa.
    .row.mb-5.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-verde-claro.p-4(data-aos="fade-right")
        h2.mb-4(data-aos="fade-up") Igualdad
        span Uno de los principios fundamentales del gobierno corporativo es garantizar la igualdad de derechos entre los accionistas. Establece mecanismos para que todos los inversores, independientemente de su tamaño o influencia, tengan acceso equitativo a la información y participen en decisiones clave. Este enfoque genera confianza y promueve la transparencia en las operaciones empresariales.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')

    h2 Transparencia
    p.mb-4 La transparencia en el gobierno corporativo asegura una gestión responsable mediante informes precisos y oportunos. Los directivos deben demostrar que los recursos de la empresa se utilizan de manera eficiente y ética, alineados con sus objetivos estratégicos.
    
    .row.mb-4
      .col-6.mx-auto.d-flex.flex-column(data-aos="fade-right")
        .bg-verde-2.px-4.py-3.px-xl-5.mb-0.border-verde.rounded-top-16
          p.text-bold.mb-0.text-white Información financiera
        .bg-verde-2-claro.p-4.px-xl-5.h-100.border-verde.rounded-bottom-16
          span Es crucial para tomar decisiones informadas y fortalecer la confianza de los accionistas.
      .col-6.mx-auto.d-flex.flex-column(data-aos="fade-left")
        .bg-morado.px-4.py-3.px-xl-5.mb-0.border-morado.rounded-top-16
          p.text-bold.mb-0.text-white Cumplimiento normativo
        .bg-morado-2-claro.p-4.px-xl-5.h-100.border-morado.rounded-bottom-16
          span Adherirse a estándares contables y regulatorios evita sanciones legales y protege la reputación empresarial.

    h2 Independencia
    p.mb-4 El gobierno corporativo promueve decisiones imparciales y objetivas, libres de influencias indebidas. Esto minimiza riesgos de corrupción y conflictos de interés, asegurando que las acciones sean alineadas con los intereses de la empresa y sus grupos de interés.
    .row.mb-4
      .col-12.col-lg-10.mx-auto
        .row
          .col-6.mx-auto.d-flex.flex-column(data-aos="fade-right")
            .bg-verde-2.px-4.py-3.px-xl-5.mb-0.border-verde.rounded-top-16
              p.text-bold.mb-0.text-white Confianza
            .bg-verde-2-claro.p-4.px-xl-5.h-100.border-verde.rounded-bottom-16
              span Fortalece la relación con accionistas y demás partes interesadas.
          .col-6.mx-auto.d-flex.flex-column(data-aos="fade-left")
            .bg-morado.px-4.py-3.px-xl-5.mb-0.border-morado.rounded-top-16
              p.text-bold.mb-0.text-white Sostenibilidad
            .bg-morado-2-claro.p-4.px-xl-5.h-100.border-morado.rounded-bottom-16
              span Contribuye al éxito y la reputación a largo plazo de la organización.

    .row.mb-5
      .d-flex.align-items-center
        .col-12.d-flex.align-items-center.bg-rojo.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-15.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 Estos principios —responsabilidad, igualdad, transparencia e independencia— son pilares fundamentales que guían el gobierno corporativo hacia una gestión ética y sostenible, garantizando la confianza y el crecimiento continuo de las organizaciones.

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/131478") Rosso, J. (2018). El gobierno corporativo: teoría y evidencia empírica. Editorial UPTC.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/live/HUW5uUO_7Mk") Garcia, J. (2024). Oportunidad de negocio en Colombia: Gobierno Corporativo y sostenibilidad [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
