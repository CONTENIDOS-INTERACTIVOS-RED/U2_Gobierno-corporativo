<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Pilares del Gobierno Corporativo en Colombia'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    


    .bg-full-width.border-top.actividad(style="background-color: #ebf1f5; border-top: 5px solid #f5c145 !important")
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Gobierno Corporativo',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el objetivo principal del Gobierno Corporativo?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Regular únicamente los aspectos financieros de una empresa',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Establecer conexiones efectivas entre las áreas de una empresa',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar el control individual de los accionistas',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la carga administrativa para los directivos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué áreas se conectan a través del Gobierno Corporativo?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Administración, gerencia, marketing y tecnología',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Administración, gerencia, accionistas, junta directiva, dueños y socios',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Gerencia, accionistas, recursos humanos y logística',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Junta directiva, socios, clientes y proveedores',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué característica fundamental define al Gobierno Corporativo?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La ausencia de regulaciones formales',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La delegación exclusiva de responsabilidades a los accionistas',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un conjunto de prácticas que promueven transparencia y organización',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La eliminación de controles financieros en la empresa',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué órganos básicos componen el Gobierno Corporativo?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Recursos humanos, clientes y comités',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Junta directiva, gerencia y contabilidad',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Accionistas, comités y junta directiva',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Administración, marketing y accionistas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué busca garantizar la Ley SOX?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La creación de nuevos accionistas',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La prevención de riesgos empresariales mediante transparencia y ética',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La reducción de regulaciones contables',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La eliminación de conflictos entre socios',
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

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
