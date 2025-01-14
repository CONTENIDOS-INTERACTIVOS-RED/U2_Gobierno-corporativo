<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Pilares del Gobierno Corporativo en Colombia'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-4 Los pilares del gobierno corporativo son principios esenciales que garantizan la dirección y control efectivos de las organizaciones. En Colombia, estos pilares promueven la transparencia, la equidad y la sostenibilidad empresarial. A continuación, se describen los principales pilares y sus características:

    ImagenInfografica.color-secundario.mb-4
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')

      .tarjeta.bg-white.p-4(x="49.5%" y="12%" numero="+")
        .h5.mb-2 Transparencia 
        p - Garantiza que la información financiera, operativa y estratégica esté disponible de manera oportuna y precisa. <br>- Fomenta la confianza de los accionistas, empleados, reguladores y otros grupos de interés. <br>- Incluye la rendición de cuentas y la presentación de informes claros sobre el desempeño corporativo.

      .tarjeta.bg-white.p-4(x="75.5%" y="42%" numero="+")
        .h5.mb-2 Responsabilidad
        p - Los órganos de gobierno, como la junta directiva y la alta gerencia, rinden cuentas por sus decisiones y acciones. <br>- Asegura que las decisiones estén alineadas con los objetivos de la organización y los intereses de los accionistas.

      .tarjeta.bg-white.p-4(x="66.5%" y="85.4%" numero="+")
        .h5.mb-2 Equidad
        p - Garantiza un trato justo a todos los accionistas e interesados, sin discriminación. <br>- Protege los derechos de los accionistas minoritarios, asegurando su participación equitativa en la toma de decisiones.

      .tarjeta.bg-white.p-4(x="33.5%" y="85.4%" numero="+")
        .h5.mb-2 Cumplimiento
        p - Asegura que las operaciones empresariales se realicen conforme a las leyes, regulaciones y normas aplicables. <br>- Promueve altos estándares éticos y el respeto a las políticas internas de la empresa.

      .tarjeta.bg-white.p-4(x="23.5%" y="44%" numero="+")
        .h5.mb-2 Sostenibilidad
        p - Integra principios sociales, ambientales y económicos en la estrategia empresarial. <br>- Asegura un enfoque de largo plazo para preservar el entorno y garantizar el bienestar de los grupos de interés.

    h2 Estructura del gobierno corporativo en Colombia
    p.mb-4 El gobierno corporativo en Colombia está estructurado en diversos componentes que buscan garantizar la transparencia, la equidad y la eficiencia en la gestión empresarial.

    .row.position-relative.mb-5.py-4.bg-fondo-3.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderF(columnas="col-12 col-lg-6 py-4 px-3")
          div.custom-image-card.rounded-8px
            img.mb-4(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
            div.mb-4
              p.text-bold.text-center Estructura de propiedad
              p.text-small.px-4.mb-2 Define cómo se distribuyen las acciones entre los accionistas. <br>Influye en la toma de decisiones y el control de la empresa.
          div.custom-image-card.rounded-8px
            img.mb-4(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')
            div.mb-4
              p.text-bold.text-center Asamblea general 
              p.text-small.px-4.mb-2 Órgano máximo de decisión donde los accionistas ejercen sus derechos, como la votación de decisiones clave y la elección de la junta directiva. <br>Garantiza un trato equitativo entre los accionistas, independientemente de su participación accionaria.
          div.custom-image-card.rounded-8px
            img.mb-4(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
            div.mb-4
              p.text-bold.text-center Junta directiva
              p.text-small.px-4.mb-2 Encargada de supervisar la gestión empresarial y definir la estrategia. <br>Debe ser independiente, equilibrada y estar compuesta por miembros calificados que representen los intereses de los accionistas.

          div.custom-image-card.rounded-8px
            img.mb-4(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')
            div.mb-4
              p.text-bold.text-center Alta gerencia
              p.text-small.px-4.mb-2 Responsable de la gestión operativa diaria y de implementar las políticas definidas por la junta directiva.
          div.custom-image-card.rounded-8px
            img.mb-4(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
            div.mb-4
              p.text-bold.text-center Órganos de control
              p.text-small.px-4.mb-2 Incluyen la revisoría fiscal y comités de auditoría, los cuales supervisan el cumplimiento normativo y la transparencia en la gestión.
          div.custom-image-card.rounded-8px
            img.mb-4(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')
            div.mb-4
              p.text-bold.text-center Revelación de información
              p.text-small.px-4.mb-2 Obliga a las empresas a divulgar información financiera y no financiera de forma transparente.
          div.custom-image-card.rounded-8px
            img.mb-4(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')
            div.mb-4
              p.text-bold.text-center Grupos de interés
              p.text-small.px-4.mb-2 Incluye empleados, proveedores, clientes y comunidades, quienes deben ser considerados en las decisiones empresariales.
          div.custom-image-card.rounded-8px
            img.mb-4(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')
            div.mb-4
              p.text-bold.text-center Autorregulación
              p.text-small.px-4.mb-2 Las empresas adoptan códigos de buen gobierno, manuales de ética y políticas internas que promueven las mejores prácticas.

    h2 Diversidad en el gobierno corporativo
    p.mb-4 La diversidad en los directorios es clave para mejorar la toma de decisiones y fomentar la innovación. En el contexto colombiano, incluir diversidad de género, edad, formación y origen étnico en las juntas directivas permite:
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-verde.p-4.h-100(data-aos="fade-up")
          .d-flex.mb-2
            p •
            p.mb-0 <b>Mayor innovación:</b> Las perspectivas diversas enriquecen las estrategias y soluciones.

          .d-flex.mb-2
            p •
            p.mb-0 <b>Adaptabilidad: </b>Mejora la capacidad de respuesta ante cambios del mercado.
          .d-flex.mb-2
            p •
            p.mb-0 <b>Equidad y representación: </b>Fomenta una cultura inclusiva que mejora la reputación de la empresa.
          .d-flex.mb-2
            p •
            p.mb-0 <b>Desempeño financiero: </b>La diversidad está relacionada con un mejor rendimiento y sostenibilidad a largo plazo.
      .d-none.d-xl-block.col-xl-5(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-amarillo.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-41.svg', alt='Texto que describa la imagen')
          p.pe-xl-4.mb-0 La diversidad no solo es un imperativo ético, sino también un motor estratégico para la competitividad empresarial.


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
