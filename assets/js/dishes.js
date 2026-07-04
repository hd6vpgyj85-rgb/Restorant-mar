// MAREA — datos de las páginas individuales de platillo (ficha oculta abierta desde el menú).
// Para agregar un platillo nuevo: añade una entrada aquí con el mismo id usado en el href
// del menú (menu.html) y coloca su fotografía en assets/images/platillos/.

var DISH_DETAILS = {
  'ostras-de-la-ria': {
    image: 'assets/images/platillos/ostras-de-la-ria.jpg',
    price: 320,
    es: {
      name: 'Ostras de la ría',
      tagline: 'Entrantes',
      description: 'Seis ostras frescas, servidas sobre hielo con una vinagreta de chalota y vinagre de vino tinto. Un clásico entrante frío que resalta la mineralidad natural del marisco.',
      ingredients: ['Ostras frescas', 'Chalota', 'Vinagre de vino tinto', 'Pimienta negra', 'Hielo y limón']
    },
    en: {
      name: 'Local oysters',
      tagline: 'Starters',
      description: 'Six fresh oysters on the half shell, served on ice with a shallot and red wine vinegar mignonette. A classic chilled starter that lets the oyster’s natural minerality shine.',
      ingredients: ['Fresh oysters', 'Shallot', 'Red wine vinegar', 'Black pepper', 'Ice and lemon']
    }
  },

  'croquetas-de-bogavante': {
    image: 'assets/images/platillos/croquetas-de-bogavante.jpg',
    price: 280,
    es: {
      name: 'Croquetas de bogavante',
      tagline: 'Entrantes',
      description: 'Croquetas artesanales de bechamel cremosa con trozos de bogavante, fritas hasta dorar y servidas sobre un bisque reducido de marisco.',
      ingredients: ['Bogavante', 'Bechamel (leche, mantequilla, harina)', 'Pan rallado', 'Bisque de marisco reducido', 'Cebollín']
    },
    en: {
      name: 'Lobster croquettes',
      tagline: 'Starters',
      description: 'Handmade croquettes of creamy béchamel and lobster meat, fried until golden and served over a reduced seafood bisque.',
      ingredients: ['Lobster', 'Béchamel (milk, butter, flour)', 'Breadcrumbs', 'Reduced seafood bisque', 'Chives']
    }
  },

  'carpaccio-de-vieira': {
    image: 'assets/images/platillos/carpaccio-de-vieira.jpg',
    price: 340,
    es: {
      name: 'Carpaccio de vieira',
      tagline: 'Entrantes',
      description: 'Finas láminas de vieira fresca, aliñadas con aceite de oliva virgen, cítricos y un toque de chile fresco. Ligero y luminoso, pensado para abrir el apetito.',
      ingredients: ['Vieira fresca', 'Aceite de oliva virgen', 'Limón y toronja', 'Chile fresco', 'Sal en escamas', 'Flores comestibles']
    },
    en: {
      name: 'Scallop carpaccio',
      tagline: 'Starters',
      description: 'Thin slices of fresh scallop, dressed with virgin olive oil, citrus, and a touch of fresh chili. Light and bright, meant to open the appetite.',
      ingredients: ['Fresh scallop', 'Virgin olive oil', 'Lemon and grapefruit', 'Fresh chili', 'Flaky salt', 'Edible flowers']
    }
  },

  'pulpo-a-la-brasa': {
    image: 'assets/images/platillos/pulpo-a-la-brasa.jpg',
    price: 360,
    es: {
      name: 'Pulpo a la brasa',
      tagline: 'Entrantes',
      description: 'Pulpo cocido a fuego lento y terminado a la brasa hasta quedar crujiente por fuera y tierno por dentro, servido sobre puré de patata ahumada con pimentón.',
      ingredients: ['Pulpo', 'Papa', 'Pimentón ahumado', 'Ajo', 'Aceite de oliva', 'Arúgula']
    },
    en: {
      name: 'Grilled octopus',
      tagline: 'Starters',
      description: 'Octopus slow-cooked and finished on the grill until crisp outside and tender inside, served over smoked potato purée with paprika.',
      ingredients: ['Octopus', 'Potato', 'Smoked paprika', 'Garlic', 'Olive oil', 'Arugula']
    }
  },

  'lubina-salvaje-al-horno': {
    image: 'assets/images/platillos/lubina-salvaje-al-horno.jpg',
    price: 560,
    es: {
      name: 'Lubina salvaje al horno',
      tagline: 'Especialidades del mar',
      description: 'Lubina salvaje horneada entera con una costra de sal marina, servida con hierbas frescas y verduras de temporada asadas.',
      ingredients: ['Lubina salvaje', 'Sal marina', 'Hierbas frescas (perejil, tomillo)', 'Tomate cherry', 'Espárragos', 'Champiñones', 'Chalota']
    },
    en: {
      name: 'Baked wild sea bass',
      tagline: 'Seafood specialties',
      description: 'Whole wild sea bass baked in a sea salt crust, served with fresh herbs and roasted seasonal vegetables.',
      ingredients: ['Wild sea bass', 'Sea salt', 'Fresh herbs (parsley, thyme)', 'Cherry tomato', 'Asparagus', 'Mushrooms', 'Shallot']
    }
  }
};
