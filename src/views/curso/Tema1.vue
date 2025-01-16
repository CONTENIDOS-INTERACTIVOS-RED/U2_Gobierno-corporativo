<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Regulación y normativas del gobierno corporativo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 El estudio del gobierno corporativo es esencial para entender el funcionamiento y desarrollo empresarial en un entorno globalizado, donde la competitividad empresarial es clave. Este campo abarca tanto aspectos técnicos como reflexiones éticas y sociales sobre las decisiones corporativas en un mundo interconectado.
    .row.mb-4.mx-0
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-gris-oscuro.p-4(data-aos="fade-left")
        h2 Crisis financiera de 2007-2008
        span Este evento, conocido como la Gran Recesión, evidenció las deficiencias en los sistemas de gobierno corporativo, mostrando cómo estas pueden desestabilizar tanto empresas como economías. Originada en Estados Unidos, esta crisis tuvo un impacto global sin precedentes desde la Gran Depresión de 1930, subrayando la necesidad de fortalecer estructuras internas para garantizar resiliencia y sostenibilidad empresarial.
    .row.mb-4.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-verde-claro.p-4(data-aos="fade-right")
        h2 Código País (2005-2006)
        span Proyecto desarrollado en Colombia por la Superintendencia Financiera con el apoyo de Asobancaria y otras organizaciones. Este esfuerzo buscó establecer estándares claros de regulación para mejorar la transparencia y la responsabilidad corporativa.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')

    p.text-bold.mb-4 Rol de las normativas y regulación
    p.mb-4 El gobierno corporativo asegura la transparencia, responsabilidad y sostenibilidad en la gestión organizacional mediante:

    .row.mb-4
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-8.d-flex.flex-column
        p.mb-4  
        .d-flex.align-items-start.bg-rojo.p-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-5.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            div.d-flex.mb-2
              p.mb-0.me-3 • 
              p.mb-0 <b>Establecimiento de estándares legales y éticos: </b>Define comportamientos corporativos aceptables.
            div.d-flex.mb-2
              p.mb-0.me-3 • 
              p.mb-0 <b>Supervisión continua: </b>Incluye auditorías regulares y formación en ética y cumplimiento.
            div.d-flex.mb-2
              p.mb-0.me-3 • 
              p.mb-0 <b>Adaptación al entorno globalizado: </b>Promueve la rendición de cuentas y el cumplimiento normativo como factores clave para la sostenibilidad y competitividad.

    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1  
        h2 Superintendencia Financiera de Colombia

    p.mb-4 Supervisar y regular el sistema financiero, asegurador y de valores para garantizar su estabilidad y proteger los derechos de los usuarios financieros. El resultado de la unión de:
    p.mb-4 <b>Figura 1. </b>Superintendencia Financiera de Colombia
    img.mb-4(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')  

    p.mb-4 Esta institución es un actor clave en el fortalecimiento del sistema financiero y el gobierno corporativo en Colombia, asegurando que las empresas cumplan con estándares que promuevan sostenibilidad y confianza en el entorno empresarial.

    #t_1_2.titulo-segundo
      div.d-flex
        span.me-3 1.2  
        h2 Superintendencia Bancaria

    p.mb-4 La Superintendencia Bancaria de Colombia fue creada mediante el artículo 19 de la Ley 45 de 1923, un marco normativo que surgió durante un periodo de reformas legislativas clave para el crecimiento de sectores fundamentales de la economía nacional.

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-azul.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-7.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            div.d-flex.mb-2
              p.mb-0.me-3 • 
              p.mb-0 Hasta 1923, las entidades bancarias operaban sin regulación estricta, ofreciendo escasas garantías a ahorradores y terceros. 
            div.d-flex.mb-2
              p.mb-0.me-3 • 
              p.mb-0 Aunque la Ley 51 de 1918 contemplaba la inspección de los bancos, esta no se aplicaba en la práctica. 

    p.text-bold.mb-4 Aportes de la Ley 45 de 1923
    p.mb-4 La ley estableció un marco normativo robusto que definió los principios de funcionamiento bancario y creó un sistema de inspección especializado bajo la supervisión de la Superintendencia Bancaria. Entre las principales disposiciones destacan:
    .row.mb-4
      .col-12.col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Estructuración de la industria bancaria")
            p - Creación de secciones de ahorro y fiduciarias. <br>- Delimitación de actividades y estándares internacionales aplicables.

          .div(titulo="Regulación de actividades bancarias")
            p - Permiso estatal obligatorio para la constitución y apertura de bancos. <br>- Restricción a actividades no bancarias. <br>- Exigencia de capital mínimo para operar. <br>- Criterios de idoneidad, experiencia y profesionalismo para administradores financieros. <br>- Control estatal mediante la Superintendencia Bancaria.

          .div(titulo="Estabilidad financiera y confianza pública")
            p - Limitación de facultades bancarias a lo permitido por la ley. <br>- Prohibición de operaciones bancarias riesgosas. <br>- Fortalecimiento del sistema bancario a través de adquisiciones y liquidaciones.


    h2 Década de 1990 y avances posteriores
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 Durante la década de 1990 y en los años siguientes, se implementaron importantes avances en el sector financiero en Colombia, fortaleciendo su regulación, supervisión y alineación con estándares internacionales.
        .bg-verde.p-4
          div.d-flex.mb-2
            p.mb-0.me-3 • 
            p.mb-0 Expedición de nuevas normativas (Ley 45 de 1990, Ley 35 de 1993, Estatuto Orgánico del Sistema Financiero).
          div.d-flex.mb-2
            p.mb-0.me-3 • 
            p.mb-0 Transformación de la Superintendencia en una entidad con personería jurídica, autonomía administrativa y financiera, y patrimonio propio (Ley 510 de 1999). 
          div.d-flex.mb-2
            p.mb-0.me-3 • 
            p.mb-0 Adaptación a estándares internacionales de supervisión (Comité de Basilea), incluyendo: 
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-6.col-md-4.col-lg-3.col-xl-2.ms-auto.mb-3(data-aos="zoom-in")
        .bg-amarillo.p-4.h-100.d-flex.align-items-center.text-center
          span Margen de solvencia.
      .col-6.col-md-4.col-lg-3.col-xl-2.mb-3(data-aos="zoom-in")
        .bg-verde-claro.p-4.h-100.d-flex.align-items-center.text-center
          span Cupos individuales de créditos.
      .col-6.col-md-4.col-lg-3.col-xl-2.mb-3(data-aos="zoom-in")
        .bg-rojo.p-4.h-100.d-flex.align-items-center.text-center
          span Calificación de cartera y provisiones.
      .col-6.col-md-4.col-lg-3.col-xl-2.mb-3(data-aos="zoom-in")
        .bg-gris.p-4.h-100.d-flex.align-items-center.text-center
          span Valoración de inversiones según precios de mercado.
      .col-6.col-md-4.col-lg-3.col-xl-2.me-auto.mb-3(data-aos="zoom-in")
        .bg-amarillo.p-4.h-100.d-flex.align-items-center.text-center
          span Gestión de activos y pasivos.

    p.mb-4 La Superintendencia Bancaria ha desempeñado un papel crucial en la regulación del sector financiero, asegurando la estabilidad y confianza en el sistema mediante un proceso continuo de modernización y adaptación a las necesidades del país.
    #t_1_3.titulo-segundo
      div.d-flex
        span.me-3 1.3  
        h2 Superintendencia de Valores

    p.mb-4 La Superintendencia de Valores, anteriormente conocida como Comisión Nacional de Valores, fue creada para estimular, organizar y regular el mercado público de valores en Colombia, desarrollando un marco normativo y de supervisión que fortaleciera la confianza del público inversionista.
    h2 Creación y funciones iniciales
    p.mb-4 La Comisión Nacional de Valores, creada por la Ley 32 de 1979, surgió para regular el mercado público de valores en un contexto de desconfianza en el mercado bursátil.

    .row.position-relative.mb-5.py-4.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Ley 32 de 1979
              p Estableció la Comisión Nacional de Valores para regular actividades como emisión, suscripción, intermediación y negociación de documentos emitidos en serie o masa con oferta pública. También abarcó la participación, crédito, tradición o representación de mercancías en favor de los titulares.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Inicio de operaciones
              p Comenzó en 1980, enfrentando un panorama de desconfianza debido a pérdidas en fondos de inversión y disputas por el control de empresas importantes.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Funciones iniciales
              p Según el artículo 9º de la Ley 32 de 1979, la Comisión no tenía funciones de inspección, vigilancia ni control. Se enfocaba en:<br><br>o	Administración del Registro Nacional de Valores e Intermediarios.<br>o	Autorización de ofertas públicas de documentos emitidos en serie o masa.<br>o	Establecimiento de requisitos de información y condiciones para operaciones en bolsa.

    h2 Fortalecimiento y transformación
    p.mb-4 La evolución de la Comisión Nacional de Valores hacia la Superintendencia de Valores marcó un hito en la regulación y supervisión del mercado de valores en Colombia, fortaleciendo su rol institucional y ampliando sus competencias.
    TabsC.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Decreto 2920 de 1982", :iconUrl="require('@/assets/curso/unidad/img-13.svg')")
        .row
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Decreto 2920 de 1982
            p Otorgó a la Comisión Nacional de Valores el control y vigilancia administrativa sobre bolsas de valores, comisionistas, corredores independientes y sociedades administradoras de fondos de inversión, funciones antes a cargo de la Superintendencia Bancaria.
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
            figure
              img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Expansión de responsabilidades", :iconUrl="require('@/assets/curso/unidad/img-13.svg')")
        .row
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Expansión de responsabilidades
            p Nuevas normativas asignaron la supervisión de sociedades administradoras de depósitos centralizados de valores, calificadoras de valores, fondos de garantía y fondos mutuos de inversión.
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4
            figure
              img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')

    h2 Transición a Superintendencia de Valores
    p.mb-4 La transición de la Comisión Nacional de Valores a la Superintendencia de Valores marcó un paso crucial en la regulación del mercado de valores en Colombia.

    .row.position-relative.mb-5.py-4.bg-verde-claro.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Nueva Constitución de 1991
              p En su artículo transitorio 52, dispuso que la Comisión Nacional de Valores adquiriría el carácter de Superintendencia.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Decreto 2115 de 1992
              p - Reestructuró la entidad, otorgándole el nombre de Superintendencia de Valores. <br><br>- Control sobre emisores de valores. <br>- Verificación de la calidad, oportunidad y suficiencia de la información presentada al público. <br>- Protección de los intereses de los inversionistas. <br>- Supervisión del cumplimiento de normas regulatorias en las operaciones del mercado de valores.

          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Reorganización de funciones
              p - Cesó la vigilancia de la Superintendencia de Sociedades sobre emisores de valores de los sectores agroindustrial, minero, industrial, comercial y de servicios. <br>- Excepciones: Fondos ganaderos y sociedades en concordato o proceso de liquidación continuaron bajo normativas previas.

    p.mb-4 La Superintendencia de Valores evolucionó como una institución clave para garantizar la transparencia y estabilidad del mercado público de valores, fortaleciendo la confianza del público y regulando con estándares modernos y efectivos los actores del sistema bursátil colombiano.
    #t_1_4.titulo-segundo
      div.d-flex
        span.me-3 1.4  
        h2 Integración de las dos entidades en la Superintendencia Financiera de Colombia 
    
    p.mb-4 Ante el acelerado desarrollo del mercado financiero, el Gobierno Nacional identificó la necesidad de reestructurar el sistema de regulación y supervisión. La integración de las superintendencias Bancaria y de Valores en la Superintendencia Financiera de Colombia buscó adaptar la supervisión a las realidades económicas vigentes, eliminando arbitrajes regulatorios y fortaleciendo la estabilidad del sistema financiero.
    h2 Razones para la integración
    p.mb-4 La integración del sistema de supervisión financiera se llevó a cabo para abordar problemas estructurales del modelo previo, adaptarse a las transformaciones del mercado financiero y modernizar el marco regulatorio. Este proceso buscó crear un entorno más coherente, eficiente y adecuado a las necesidades de un mercado cada vez más integrado.

    .row.mb-4
      .col-12.col-lg-8(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Ineficiencias del sistema de supervisión previo")
            p La existencia de dos supervisores (Superintendencia Bancaria y Superintendencia de Valores) generaba arbitrajes regulatorios en aspectos contables, desarrollo de negocios y suministro de información. Ejemplo: Las carteras colectivas eran supervisadas por distintas entidades según su gestor (sociedades fiduciarias o comisionistas de bolsa y administradoras de inversión).
          .div(titulo="Cambios en el mercado financiero")
            p La integración de actividades en el mercado financiero permitió que los intermediarios participaran en intermediación de valores, operación en escenarios bursátiles y emisión de valores. La supervisión separada no abordaba adecuadamente los riesgos de esta nueva realidad.
          .div(titulo="Necesidad de modernización")
            p Se requería actualizar el marco normativo para eliminar disposiciones obsoletas, garantizar una regulación coherente y definir competencias claras entre las autoridades para evitar duplicidades y fomentar la coordinación.
      .col-12.col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')

    h2 Creación de la Superintendencia Financiera de Colombia
    p.mb-4 Crear un nuevo esquema de supervisión integral, no simplemente una transferencia de funciones entre entidades.

    .row.mb-4
      p.mb-4.ms-4.ms-xl-5 <b>●	Funciones: </b>supervisar los principales riesgos del sistema financiero, tales como:
      .col-10.col-lg-4.col-xl-3(data-aos="zoom-in")
        .bg-gris.p-4.h-100.text-center
          p.mb-0.text-bold Riesgo de crédito
      .col-10.col-lg-4.col-xl-3(data-aos="zoom-in")
        .bg-gris.p-4.h-100.text-center
          p.mb-0.text-bold Riesgo operativo
      .col-10.col-lg-4.col-xl-3(data-aos="zoom-in")
        .bg-gris.p-4.h-100.text-center
          p.mb-0.text-bold Riesgo de mercado
      .col-10.col-lg-4.col-xl-3(data-aos="zoom-in")
        .bg-gris.p-4.h-100.text-center
          p.mb-0.text-bold Riesgo de lavado de activos

    .row.mb-4
      p.mb-4.ms-4.ms-xl-5 <b>●	Enfoque: </b>supervisión consolidada de conglomerados financieros que concentran la mayor parte de los activos del sistema. Esto incluye:
      .col-10.col-lg-4.ms-auto(data-aos="fade-right")
        .bg-verde-claro.p-4.h-100.text-center
          p.mb-0.text-bold Monitoreo de operaciones entre entidades del mismo grupo.
      .col-10.col-lg-4.me-auto(data-aos="fade-right")
        .bg-verde-claro.p-4.h-100.text-center
          p.mb-0.text-bold Identificación oportuna de riesgos que puedan generar problemas sistémicos.

    h2 Beneficios de la integración
    p.mb-4 La integración del sistema de supervisión financiera trajo consigo importantes ventajas que fortalecieron la eficiencia, seguridad y capacidad de respuesta ante los desafíos del mercado.

    .row.position-relative.mb-5.py-4.bg-fondo-2.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Economías de escala
              p La consolidación de la supervisión eliminó redundancias, permitiendo un uso más eficiente de los recursos disponibles.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Prevención de riesgos sistémicos
              p El monitoreo integral de conglomerados financieros posibilitó la detección temprana de riesgos críticos, evitando impactos mayores en el sistema financiero.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Mayor especialización
              p La estructura integrada se adaptó mejor a las exigencias de un mercado financiero cada vez más complejo y globalizado, fomentando un enfoque especializado.

    p.mb-4 La integración de estas entidades en la Superintendencia Financiera de Colombia marcó un avance significativo en la supervisión del sistema financiero, adaptándose a las realidades contemporáneas y garantizando un entorno más estable y competitivo para los participantes del mercado.
    #t_1_5.titulo-segundo
      div.d-flex
        span.me-3 1.5  
        h2 Leyes y decretos

    p.mb-4 Las leyes y decretos que regulan la Superintendencia Financiera establecen el marco normativo necesario para garantizar la supervisión, transparencia y estabilidad del sistema financiero, así como la protección de los derechos de los consumidores y la prevención de riesgos. A continuación, se presentan las principales disposiciones normativas.
    h2 Ley 964 de 2005
    p.mb-4 La Ley 964 regula las actividades de inversión y manejo de recursos captados del público. Sus objetivos incluyen:

    .row.mb-4
      .col-10.col-lg-8.col-xl-6.mx-auto
        .bg-gris.py-2.ps-3.mb-2(data-aos="fade-up")
          span Proteger los derechos de los inversionistas.
        .bg-verde-claro.py-2.ps-3.mb-2(data-aos="fade-up")
          span Fomentar el desarrollo y la transparencia del mercado de valores.
        .bg-rojo.py-2.ps-3.mb-2(data-aos="fade-up")
          span Prevenir y manejar el riesgo sistémico del mercado.
        .bg-amarillo.py-2.ps-3.mb-2(data-aos="fade-up")
          span Promover la integridad y equidad en el mercado de valores.
        .bg-amarillo-claro.py-2.ps-3.mb-2(data-aos="fade-up")
          span Garantizar la confianza del público en el sistema.

    .row.mb-4
      .col-10.col-lg-8.col-xl-7.mx-auto(data-aos="fade-right")
        .bg-gris.p-4.ps-xl-5.h-100
          p.text-bold.mb-3 Disposiciones importantes:
          .ps-4
            .d-flex.flex-column
              div.d-flex.mb-2
                p.mb-0.me-3 • 
                p.mb-0 Inspección y vigilancia de intermediarios de valores por la Superintendencia de Valores.
              div.d-flex.mb-2
                p.mb-0.me-3 • 
                p.mb-0 Fijación de capital mínimo para entidades vigiladas.
              div.d-flex.mb-2
                p.mb-0.me-3 • 
                p.mb-0 Homologación de registros de valores internacionales.
              div.d-flex.mb-2
                p.mb-0.me-3 • 
                p.mb-0 Autorización para operaciones con valores emitidos en el extranjero.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')

    h2 Decreto 2555 de 2010
    p.mb-4 Este decreto consolida y actualiza las normas aplicables al sector financiero, mercado de valores y sector asegurador. Entró en vigor el 15 de julio de 2010.
    
    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
      .col-10.col-lg-8.col-xl-7.mx-auto(data-aos="fade-left")
        .bg-verde-claro.p-4.ps-xl-5.h-100
          p.text-bold.mb-3 Disposiciones clave:
          .ps-4
            .d-flex.flex-column
              div.d-flex.mb-2
                p.mb-0.me-3 • 
                p.mb-0 Define emisores de valores y entidades aseguradoras.
              div.d-flex.mb-2
                p.mb-0.me-3 • 
                p.mb-0 Regula establecimientos de crédito, incluyendo una relación de solvencia mínima del 9%.
              div.d-flex.mb-2
                p.mb-0.me-3 • 
                p.mb-0 Reglamenta los Fondos de Inversión Colectiva (FICs), garantizando trato equitativo entre inversionistas.
              div.d-flex.mb-2
                p.mb-0.me-3 • 
                p.mb-0 Exige una explicación detallada en los reglamentos de los FICs sobre cada tipo de participación.
            
    h2 Decreto 3923 de 2006
    p.mb-4 Regula la elección de miembros independientes de juntas directivas en empresas emisoras de valores.
    
    .row.mb-4
      .col-10.col-lg-8.col-xl-7.mx-auto(data-aos="fade-right")
        .bg-gris.p-4.ps-xl-5.h-100
          p.text-bold.mb-3 Puntos destacados:
          .ps-4
            .d-flex.flex-column
              div.d-flex.mb-2
                p.mb-0.me-3 • 
                p.mb-0 Establece dos votaciones en la asamblea de accionistas:<br>o	Una para elegir a los miembros independientes requeridos.<br>o	Otra para elegir a los miembros restantes.

              div.d-flex.mb-2
                p.mb-0.me-3 • 
                p.mb-0 Permite una sola votación si se garantiza el mínimo de miembros independientes.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
    
    h2 Decreto 1925 de 2009
    p.mb-4 Este decreto reglamenta parcialmente el artículo 23 de la Ley 222 de 1995 sobre conflictos de interés y competencia de los administradores.

    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')
      .col-10.col-lg-8.col-xl-7.mx-auto(data-aos="fade-left")
        .bg-gris.p-4.ps-xl-5.h-100
          p.text-bold.mb-3 Aspectos relevantes:
          .ps-4
            .d-flex.flex-column
              div.d-flex.mb-2
                p.mb-0.me-3 • 
                p.mb-0 Los administradores que incurran en conflictos de interés sin autorización deberán indemnizar por perjuicios causados.
              div.d-flex.mb-2
                p.mb-0.me-3 • 
                p.mb-0 Los jueces pueden sancionar a los administradores con multas y/o inhabilitación para ejercer el comercio.
    p.mb-5 Estos instrumentos legales constituyen el marco jurídico que garantiza la estabilidad y confiabilidad del sistema financiero colombiano, promoviendo una gestión responsable y adecuada de las entidades reguladas.

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/124949") Flores Mendoza, R. L. & Cervantes Penagos, M. A. (2019). Evaluación del desempeño del Gobierno corporativo. Instituto mexicano de contadores públicos.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/fnyufwx01F8") Facultad de estudios a distancia UMNG. (2023). Estrategias innovadoras en el desarrollo organizacional [Vídeo]
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
