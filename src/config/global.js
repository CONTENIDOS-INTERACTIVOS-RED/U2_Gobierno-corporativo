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
    numeroUnidad: '2',
    tituloUnidad: 'Normatividad e impacto del gobierno corporativo',
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
        titulo: 'Regulación y normativas del gobierno corporativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Superintendencia Financiera de Colombia',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Superintendencia Bancaria',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Superintendencia de Valores',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Integración de las dos entidades en la Superintendencia Financiera de Colombia',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Leyes y decretos',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Impacto del gobierno corporativo en la competitividad y sostenibilidad ',
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
        'Chavarro, J. (2018). Constitución política de Colombia (3a. ed.). Grupo Editorial Nueva Legislación SAS.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/68946',
    },
    {
      referencia:
        'Cruz, G. (2006). La institucionalización de la empresa: casos de éxito de gobierno corporativo. Universidad Anáhuac del Sur S.C. en coedición con Editorial Miguel Ángel Porrúa.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/103050',
    },
    {
      referencia:
        'Decreto 327 de 2005 [Alcaldía Mayor de Bogotá]. Por el cual se suprimen y se crean unos cargos en la planta global del Departamento Administrativo de Bienestar Social del Distrito. 14 de septiembre de 2005.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=17608',
    },
    {
      referencia:
        'Decreto 663 de 1993 [Congreso de la República]. Por medio del cual se actualiza el Estatuto Orgánico del Sistema Financiero. 2 de abril de 1993.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1348',
    },
    {
      referencia:
        'Decreto 1925 de 2009 [Presidencia de la República]. Reglamentación del artículo 23 de la Ley 222 de 1995. 28 de mayo de 2009.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36306',
    },
    {
      referencia:
        'Decreto 2115 de 1992 [Presidencia de la República]. Por el cual se reestructura la superintendencia de valores. 29 de diciembre de 1992.',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=14019662',
    },
    {
      referencia:
        'Decreto 2555 de 2010 [Presidencia de la República]. Normas del sector financiero, asegurador y del mercado de valores. 15 de julio de 2010.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=40032',
    },
    {
      referencia:
        'Decreto 2920 de 1982 [Presidencia de la República]. Normas para asegurar la confianza del público en el sector financiero. 8 de octubre de 1982.',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=1877027',
    },
    {
      referencia:
        'Decreto 3923 de 2006 [Presidencia de la República]. Elección de miembros independientes de Juntas Directivas. 8 de noviembre de 2006.',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=1538736',
    },
    {
      referencia:
        'Ley 32 de 1979 [Congreso de la República]. Por la cual se crea la Comisión Nacional de Valores. 17 de mayo de 1979.',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=1588744',
    },
    {
      referencia:
        'Ley 35 de 1993 [Congreso de la República]. Normas generales sobre actividades financiera, bursátil y aseguradora. 5 de enero de 1993.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=66945',
    },
    {
      referencia:
        'Ley 45 de 1923 [Congreso de la República]. Sobre establecimientos bancarios. 19 de julio de 1923.',
      link:
        'https://www.javeriana.edu.co/personales/hbermude/leycontable/contadores/1923-ley-45.pdf',
    },
    {
      referencia:
        'Ley 51 de 1918 [Congreso de la República]. Sobre establecimientos o sociedades de crédito. 21 de noviembre de 1918.',
      link:
        'https://www.javeriana.edu.co/personales/hbermude/leycontable/contadores/1918-ley-51.pdf',
    },
    {
      referencia:
        'Ley 510 de 1999 [Congreso de la República]. Disposiciones sobre el sistema financiero y asegurador. 3 de agosto de 1999.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=9916',
    },
    {
      referencia:
        'Ley 964 de 2005 [Congreso de la República]. Normas generales sobre actividades de manejo de recursos del público. 8 de julio de 2005.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22412',
    },
    {
      referencia:
        'Montaño, E. (2013). Control interno, auditoría y aseguramiento, revisoría fiscal y gobierno corporativo. Programa Editorial Universidad del Valle.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/129501',
    },
    {
      referencia:
        'Moreno, J. (2022). ¿Una empresa de todos? la participación del trabajo en el gobierno corporativo. Los libros de la Catarata.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/247741',
    },
  ],
  glosario: [
    {
      termino: 'Asociación Bancaria',
      significado:
        'Entidad privada, sin ánimo de lucro, que agrupa a instituciones bancarias y financieras colombianas. Fue creada en 1936 y está domiciliada en Bogotá.',
    },
    {
      termino: 'BVC',
      significado: 'Bolsa de Valores de Colombia.',
    },
    {
      termino: 'Decreto',
      significado:
        'Resolución escrita que contiene normas y que es emitida por el poder ejecutivo o por el poder legislativo. Es una decisión que se toma para atender una situación de carácter general y que puede o no tener el rango de ley.',
    },
    {
      termino: 'El Comité de Basilea',
      significado:
        'También conocido como Comité de Supervisión Bancaria de Basilea (BCBS), es una organización mundial que busca fortalecer la solidez de los sistemas financieros. Su función es establecer y promover normas internacionales, directrices y buenas prácticas en materia de regulación y supervisión bancaria.',
    },
    {
      termino: 'Gran Recesión',
      significado:
        'Crisis económica mundial que se desarrolló entre 2007 y 2009, y es considerada la más grave desde la Gran Depresión de 1930.',
    },
    {
      termino: 'La División Básica de Boyatzis',
      significado:
        'Boyatzis considera que saber cómo somos realmente implica reconocer nuestras fortalezas y nuestras debilidades y que no es fácil porque existen obstáculos que lo dificultan.',
    },
    {
      termino: 'La integración de factores ESG',
      significado:
        'Proceso que consiste en incorporar los criterios ESG en el análisis y las decisiones de inversión. ESG son las siglas en inglés de Environmental, Social and Governance, que en español se traduce como Ambiental, Social y de Gobernanza.',
    },
    {
      termino: 'Ley',
      significado:
        'Es una norma jurídica que establece los límites de lo permitido entre el Estado y sus súbditos. Las leyes son dictadas por la autoridad competente y acordadas por los órganos legislativos.',
    },
    {
      termino: 'Pymes',
      significado: 'Pequeñas y medianas empresas.',
    },
    {
      termino: 'RNVE',
      significado: 'Registro Nacional de Valores y Emisores.',
    },
    {
      termino: 'Superintendencia Financiera',
      significado:
        'Entidad pública que vigila y regula el sistema financiero de Colombia.',
    },
    {
      termino: 'Taxativo',
      significado:
        'Algo es obligatorio en todo caso, independientemente de la voluntad de los particulares.',
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
