export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '1',
    tituloUnidad: 'Principios y estructuras del gobierno corporativo',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos del gobierno corporativo',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estructura del Gobierno Corporativo ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Estructuras de gobierno corporativo en el mundo',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Pilares del Gobierno Corporativo en Colombia',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Betancur A. (2013). Gobierno Corporativo: Una Comparación de Códigos de Gobierno en el mundo, Un modelo para empresas latinoamericanas familiares y no familiares 1. Revista Entramado Vol. 9 No. 2.',
      link: 'http://www.scielo.org.co/pdf/entra/v9n2/v9n2a08.pdf',
    },
    {
      referencia:
        'Garzón, M. (2021). EL CONCEPTO DE GOBIERNO CORPORATIVO. Revista Científica "Visión de Futuro" - Facultad de Ciencias Económicas – UnaM.',
      link: 'https://www.redalyc.org/journal/3579/357966632009/',
    },
    {
      referencia:
        'Haro-Sarango, A. (2021). Estructura de Gobierno Corporativo: Un aplicativo para la transparencia y mejora empresarial en Ecuador. Revista científica en ciencias sociales, 3(2), 111-121.',
      link:
        'http://scielo.iics.una.py/scielo.php?script=sci_arttext&pid=S2708-04122021000200111#B2',
    },
    {
      referencia:
        'Izquierdo, Et al. (2014). El gobierno corporativo como motor de la responsabilidad social corporativa. Universitat Jaume I. Servei de Comunicació i Publicacions.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/53258',
    },
    {
      referencia:
        'Mallin, CA. (2011). Manual sobre gobernanza corporativa internacional: análisis de países. Segunda edición, Edward Elgar Publishing, Cheltenham.',
      link: 'http://dx.doi.org/10.4337/9781849808293',
    },
    {
      referencia:
        'Mastragelo, A. (2017). The financial aspects of corporate governance.',
      link:
        'https://alejandramastrangelo.com/wp-content/uploads/2017/12/Report-of-The-Committee-on-The-Financial-Aspects-of-Corporate-Governance.pdf',
    },
    {
      referencia:
        'Olcese, A. (2014). La responsabilidad social, motor del cambio empresarial: una propuesta española para Europa y América Latina. McGraw-Hill España.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/50281',
    },
    {
      referencia:
        'Fernández Izquierdo, M. Á. (2014). El gobierno corporativo como motor de la responsabilidad social corporativa. Castelló de la Plana, Spain: Universitat Jaume I. Servei de Comunicació i Publicacions.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/53258%20pag%2028?page=28',
    },
  ],
  glosario: [
    {
      termino: 'Alta Gerencia',
      significado:
        'División de una compañía que se encarga de la gestión operativa diaria de la empresa.',
    },
    {
      termino: 'Autorregulación',
      significado:
        'Capacidad de controlar las emociones y el comportamiento de acuerdo a las demandas de una situación. Es una habilidad que se desarrolla con el tiempo y que puede ayudar a mejorar la calidad de vida emocional, las relaciones interpersonales, la productividad y la toma de decisiones.',
    },
    {
      termino: 'Comité Gerencial',
      significado:
        'Grupo de personas que gestiona y formula las estrategias empresariales.',
    },
    {
      termino: 'Diversidad de género',
      significado:
        'La diversidad de género es la posibilidad que tienen las personas de vivir, expresar y asumir su sexualidad, así como sus orientaciones, expresiones, preferencias e identidades sexuales.',
    },
    {
      termino: 'GB',
      significado: 'Gobierno Corporativo.',
    },
    {
      termino: 'Informe Cadbury',
      significado:
        'Fue el primer modelo de control interno del Reino Unido y es reconocido a nivel mundial. Su objetivo principal es abordar aspectos de gobierno corporativo y financieros y ha servido para dar certeza, sobre todo a aquellas empresas que cotizan en dichos mercados.',
    },
    {
      termino: 'Junta Directiva',
      significado:
        'Órgano de gobierno que se encarga de tomar decisiones y supervisar la estructura organizacional de una empresa u organización.',
    },
    {
      termino: 'OPA',
      significado:
        'Oferta Pública De Adquisición. Es una operación en la que un grupo de personas o empresas ofrecen comprar las acciones de una empresa a sus accionistas. El precio de compra suele ser mayor al del mercado y se conoce como prima. Las opas pueden ser voluntarias u obligatorias, amistosas u hostiles.',
    },
    {
      termino: 'Stakeholders',
      significado:
        'Personas u organizaciones que tienen un interés en las actividades y resultados de una empresa.',
    },
    {
      termino: 'Transparencia',
      significado:
        'Es la práctica de compartir información real, útil y comprensible con las partes interesadas de una organización. Esto incluye a empleados, clientes, proveedores y la comunidad en general.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
