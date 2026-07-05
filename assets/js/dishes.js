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
  },

  'arroz-de-bogavante': {
    image: 'assets/images/platillos/arroz-de-bogavante.jpg',
    price: 580,
    es: {
      name: 'Arroz de bogavante',
      tagline: 'Especialidades del mar',
      description: 'Arroz meloso cocinado a fuego lento en cazuela de barro con bogavante entero, tomate y un fondo de marisco. Se sirve para compartir en el centro de la mesa.',
      ingredients: ['Bogavante', 'Arroz', 'Tomate', 'Fondo de marisco', 'Ajo', 'Pimentón']
    },
    en: {
      name: 'Lobster rice',
      tagline: 'Seafood specialties',
      description: 'Creamy rice slow-cooked in a clay pot with whole lobster, tomato, and a seafood stock. Served to share at the center of the table.',
      ingredients: ['Lobster', 'Rice', 'Tomato', 'Seafood stock', 'Garlic', 'Paprika']
    }
  },

  'seleccion-de-marisco-frio': {
    image: 'assets/images/platillos/seleccion-de-marisco-frio.jpg',
    price: 460,
    es: {
      name: 'Selección de marisco frío',
      tagline: 'Especialidades del mar',
      description: 'Una torre de marisco fresco sobre hielo: ostras, camarón, langostino y centolla, acompañados de mignonette y salsa cóctel. Ideal para compartir como entrada generosa.',
      ingredients: ['Ostras', 'Camarón', 'Langostino', 'Centolla', 'Mignonette', 'Salsa cóctel']
    },
    en: {
      name: 'Chilled seafood selection',
      tagline: 'Seafood specialties',
      description: 'A tower of fresh seafood on ice: oysters, shrimp, prawns, and spider crab, served with mignonette and cocktail sauce. Ideal to share as a generous starter.',
      ingredients: ['Oysters', 'Shrimp', 'Prawns', 'Spider crab', 'Mignonette', 'Cocktail sauce']
    }
  },

  'merluza-a-la-brasa': {
    image: 'assets/images/platillos/merluza-a-la-brasa.jpg',
    price: 480,
    es: {
      name: 'Merluza a la brasa',
      tagline: 'Platos principales',
      description: 'Lomo de merluza a la brasa sobre un caldo de salsa verde con almejas de temporada, ajo y perejil. Un plato principal ligero que resalta el sabor del pescado blanco.',
      ingredients: ['Merluza', 'Almejas', 'Perejil', 'Ajo', 'Vino blanco', 'Aceite de oliva']
    },
    en: {
      name: 'Grilled hake',
      tagline: 'Main courses',
      description: 'Grilled hake loin over a green sauce broth with seasonal clams, garlic, and parsley. A light main course that highlights the flavor of white fish.',
      ingredients: ['Hake', 'Clams', 'Parsley', 'Garlic', 'White wine', 'Olive oil']
    }
  },

  'fideua-de-marisco': {
    image: 'assets/images/platillos/fideua-de-marisco.jpg',
    price: 420,
    es: {
      name: 'Fideuá de marisco',
      tagline: 'Platos principales',
      description: 'Fideos finos tostados y cocinados en un sofrito de marisco con camarón, calamar y mejillón, servidos con alioli casero recién hecho.',
      ingredients: ['Fideo fino', 'Camarón', 'Calamar', 'Mejillón', 'Sofrito de tomate', 'Alioli casero']
    },
    en: {
      name: 'Seafood fideuá',
      tagline: 'Main courses',
      description: 'Toasted thin noodles cooked in a seafood sofrito with shrimp, squid, and mussels, served with freshly made homemade aioli.',
      ingredients: ['Thin noodles', 'Shrimp', 'Squid', 'Mussels', 'Tomato sofrito', 'Homemade aioli']
    }
  }
};
