<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Impacto del gobierno corporativo en la competitividad y sostenibilidad '")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    
    p.mb-4 El gobierno corporativo es un conjunto de prácticas, principios y normas que regulan la dirección y el control de las empresas. Este concepto es crucial para el éxito a largo plazo de las organizaciones, ya que fomenta la transparencia, la confianza de los accionistas y el desarrollo sostenible en un entorno empresarial dinámico.
    .bg-fondo-1.bg-full-width
      .px-5.pb-md-3.py-4

        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        

    p.mb-4 El gobierno corporativo y la RSE son pilares fundamentales para la sostenibilidad empresarial. Ambos promueven el bienestar de la sociedad y el medio ambiente, alineando los objetivos empresariales con los valores sociales y éticos.
    h2 Modelo de competencias de Richard E. Boyatzis
    p.mb-4 En el ámbito de la gestión organizacional, el modelo de Boyatzis, conocido como "La División Básica", aporta una herramienta valiosa para desarrollar competencias humanas y liderazgo efectivo. Este modelo clasifica las competencias en tres categorías principales:

    .row.mb-4
      .col-6.col-xl-3.mx-auto.d-flex.flex-column(data-aos="fade-right")
        .bg-amarillo.p-4.mb-0.text-center
          p.text-bold.mb-0 Conocimientos
        .bg-amarillo-claro.p-4.text-center.h-100
          span.text-center Información técnica y teórica relevante para el desempeño laboral.
      .col-6.col-xl-3.mx-auto.d-flex.flex-column(data-aos="fade-up")
        .bg-verde.p-4.mb-0.text-center
          p.text-bold.mb-0 Habilidades
        .bg-verde-claro.p-4.text-center.h-100
          span.text-center Capacidades prácticas para ejecutar tareas de manera efectiva.
      .col-6.col-xl-3.mx-auto.d-flex.flex-column(data-aos="fade-left")
        .bg-amarillo.p-4.mb-0.text-center
          p.text-bold.mb-0 Atributos personales
        .bg-amarillo-claro.p-4.text-center.h-100
          span.text-center Rasgos de carácter y actitudes que influyen en el comportamiento laboral.

    p.mb-4 El enfoque de Boyatzis es ampliamente utilizado para identificar y fortalecer las capacidades necesarias en líderes y equipos, asegurando un desempeño sobresaliente en entornos laborales complejos y cambiantes.
    .row.mb-4.mx-0
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-gris.p-4(data-aos="fade-left")
        p.mb-0(data-aos="fade-up") El gobierno corporativo eficaz es un pilar esencial para la sostenibilidad y competitividad empresarial. Además de mejorar la confianza de los inversionistas y la gestión interna, permite a las organizaciones adaptarse a los desafíos actuales, como los cambios regulatorios y ambientales. Complementado con enfoques como el modelo de Boyatzis, las empresas pueden desarrollar competencias clave para lograr un éxito sostenible a largo plazo.

    h2 División Básica de Boyatzis
    p.mb-4 El modelo de competencias de Richard Boyatzis es un marco conceptual que facilita la comprensión del desempeño humano en contextos laborales, educativos y personales. Este modelo clasifica las competencias en tres categorías principales, destacando su relación con el éxito profesional y organizacional.
    p.text-bold.mb-4 Categorías principales del modelo

    p.mb-4 El modelo clasifica las competencias laborales en tres categorías fundamentales: conocimientos, habilidades y atributos personales. Estas dimensiones son clave para un desempeño eficaz y alineado con las demandas del entorno profesional.

    .row.mb-4
      .col-12.col-lg-8(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Conocimientos")
            p Información teórica y práctica adquirida a lo largo del tiempo, específica de una industria o profesión.<br><b>Importancia:</b> esencial para cumplir con los requerimientos técnicos del trabajo.<br><b>Ejemplos:</b><br>Conocimiento en programación y desarrollo de software para un ingeniero de sistemas.<br>Comprensión de normas contables internacionales para un contador.

          .div(titulo="Habilidades")
            p Capacidades para realizar tareas específicas de manera efectiva, adquiridas a través de la práctica y la experiencia. Pueden ser técnicas o interpersonales.<br><b>Importancia:</b> facilitan la ejecución de actividades y mejoran el desempeño en el trabajo.<br><b>Ejemplos:</b><br>Habilidades de comunicación y negociación para un vendedor.<br>Análisis de datos y resolución de problemas para un analista de negocios.
 

          .div(titulo="Atributos personales")
            p Características intrínsecas de una persona, como personalidad, motivación y valores, que influyen en su comportamiento y desempeño.<br><b>Importancia:</b> aunque más difíciles de modificar, son fundamentales para el éxito en cualquier ámbito.<br><b>Ejemplos:</b><br>Resiliencia y capacidad de adaptación al cambio.<br>Empatía y orientación hacia el trabajo en equipo.

      .col-12.col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')

    h2 Pilares clave del modelo
    p.mb-4 El modelo se sustenta en tres pilares fundamentales que explican cómo las competencias individuales se traducen en un desempeño superior y resultados positivos en un entorno laboral.

    ImagenInfografica.color-secundario.mb-4
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')

      .tarjeta.bg-white.p-4(x="24%" y="15%" numero="+")
        .h5.mb-2 Competencias
        p Conjuntos de comportamientos observables que están directamente relacionados con un desempeño superior en un rol específico. Incluyen competencias emocionales, sociales, cognitivas y técnicas.
      .tarjeta.bg-white.p-4(x="51%" y="15%" numero="+")
        .h5.mb-2 Adaptación al contexto
        p La efectividad del desempeño depende de la alineación entre las competencias individuales y las demandas específicas del entorno o rol desempeñado.
      .tarjeta.bg-white.p-4(x="79%" y="15%" numero="+")
        .h5.mb-2 Modelo de causalidad
        p Postula que las competencias adecuadas generan comportamientos específicos que, a su vez, producen resultados positivos en el desempeño laboral.

    h2 Aplicaciones del modelo
    p.mb-4 El modelo de competencias encuentra diversas aplicaciones prácticas en el ámbito laboral, facilitando procesos clave para la gestión del talento y el desarrollo organizacional.

    .row.position-relative.mb-5.py-4.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Selección de personal
              p Facilita la evaluación de candidatos con perfiles equilibrados, integrando conocimientos, habilidades y atributos personales.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Capacitación y desarrollo
              p Permite diseñar programas formativos específicos para fortalecer las competencias necesarias para un desempeño superior en el rol.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Evaluación del desempeño
              p Ofrece un marco estructurado para identificar fortalezas y áreas de mejora en los empleados, promoviendo el crecimiento profesional.

    p.mb-4 Estas aplicaciones contribuyen a construir equipos más competentes, mejorar el desempeño individual y colectivo, y alinear las capacidades del talento humano con los objetivos organizacionales.
    h2 Perspectiva integral del modelo
    p.mb-4 La División Básica de Boyatzis ofrece una visión integral del desempeño humano, destacando cómo las competencias interactúan con el contexto y los objetivos organizacionales. Este modelo reconoce que el éxito no depende únicamente de lo que una persona sabe, sino también de cómo aplica ese conocimiento y se adapta a circunstancias cambiantes. Por ello, se considera una herramienta esencial para:

    .row.mb-4
      .col-8.col-md-6.col-lg-3.ms-auto(data-aos="fade-right")
        .bg-amarillo.p-4.mb-4.h-100
          p.text-center.mb-0 Gestionar el talento humano.
      .col-8.col-md-6.col-lg-4(data-aos="fade-up")
        .bg-amarillo.p-4.mb-4.h-100
          p.text-center.mb-0 Diseñar estrategias de desarrollo profesional.
      .col-8.col-md-6.col-lg-3.me-auto(data-aos="fade-left")
        .bg-amarillo.p-4.mb-4.h-100
          p.text-center.mb-0 Fortalecer el liderazgo organizacional.

    .row.mb-5
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-verde-claro.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-33.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 El modelo de Boyatzis no solo identifica competencias clave, sino que también explora cómo estas se relacionan con el entorno y contribuyen al logro de metas organizacionales y personales, maximizando el potencial humano en diversos contextos.

    .bg-full-width.border-top-9-azul.mb-4
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.icgc.com.co/wp-content/uploads/2024/02/Guia-de-buenas-practicas-de-Gobierno-Corporativo-para-empresas-sostenibles-productivas-y-perdurables.-3ra-Edicion.pdf") ICGC. (2023). Guía de Buenas Prácticas de Gobierno Corporativo para empresas competitivas, productivas y perdurables.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://dialnet.unirioja.es/descarga/articulo/7024387.pdf") Gaitán Riaño, S. C. (2010). Gobierno corporativo en Colombia. Tendencias actuales.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=HUW5uUO_7Mk") Rodrigo torres Villamil (2024). Oportunidad de negocio en Colombia: Gobierno Corporativo [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')


    .bg-full-width.border-top.actividad(style="background-color: #ebf1f5; border-top: 5px solid #f5c145 !important")
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>




</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Gobierno Corporativo y Regulación Financiera',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el principal objetivo del gobierno corporativo en una organización?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar las ganancias a corto plazo',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Garantizar transparencia, responsabilidad y sostenibilidad',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el número de accionistas en la empresa',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Promover exclusivamente la competitividad',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué entidad regula y supervisa el sistema financiero en Colombia desde 2005?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Superintendencia de Sociedades',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Banco de la República', esCorrecta: false },
            {
              id: 'c',
              texto: 'Superintendencia Financiera de Colombia',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Comisión Nacional de Valores',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué normativa creó la Superintendencia Bancaria de Colombia?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ley 35 de 1993', esCorrecta: false },
            { id: 'b', texto: 'Decreto 2920 de 1982', esCorrecta: false },
            { id: 'c', texto: 'Ley 45 de 1923', esCorrecta: true },
            { id: 'd', texto: 'Ley 510 de 1999', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál fue el objetivo principal de la Ley 32 de 1979?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Promover la supervisión bancaria',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Regular y organizar el mercado público de valores',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar los riesgos operativos en el sistema financiero',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Unificar las funciones de supervisión financiera',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué práctica prohibió la Ley 45 de 1923 a los bancos comerciales?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Supervisar sus propias operaciones',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ser propietarios de empresas no relacionadas con su actividad bancaria',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Participar en el mercado bursátil',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Captar recursos del público',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
