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
  },

  'bacalao-confitado': {
    image: 'assets/images/platillos/bacalao-confitado.jpg',
    price: 470,
    es: {
      name: 'Bacalao confitado',
      tagline: 'Platos principales',
      description: 'Lomo de bacalao confitado a baja temperatura en aceite de oliva, terminado con un pil pil tradicional de ajo y servido con pimiento rojo asado.',
      ingredients: ['Bacalao', 'Aceite de oliva', 'Ajo', 'Pimiento rojo asado', 'Perejil']
    },
    en: {
      name: 'Confit cod',
      tagline: 'Main courses',
      description: 'Cod loin confit at low temperature in olive oil, finished with a traditional garlic pil pil and served with roasted red pepper.',
      ingredients: ['Cod', 'Olive oil', 'Garlic', 'Roasted red pepper', 'Parsley']
    }
  },

  'tarta-de-queso-al-horno': {
    image: 'assets/images/platillos/tarta-de-queso-al-horno.jpg',
    price: 150,
    es: {
      name: 'Tarta de queso al horno',
      tagline: 'Postres',
      description: 'Tarta de queso horneada, cremosa por dentro y ligeramente dorada por fuera, cubierta con una reducción de frutos rojos frescos.',
      ingredients: ['Queso crema', 'Huevo', 'Azúcar', 'Base de galleta', 'Frutos rojos']
    },
    en: {
      name: 'Baked cheesecake',
      tagline: 'Desserts',
      description: 'Baked cheesecake, creamy inside and lightly golden outside, topped with a fresh mixed berry reduction.',
      ingredients: ['Cream cheese', 'Egg', 'Sugar', 'Graham cracker base', 'Mixed berries']
    }
  },

  'milhojas-de-crema': {
    image: 'assets/images/platillos/milhojas-de-crema.jpg',
    price: 140,
    es: {
      name: 'Milhojas de crema',
      tagline: 'Postres',
      description: 'Capas de hojaldre crujiente rellenas de crema de vainilla de Madagascar, terminadas con caramelo tostado y frutos rojos frescos.',
      ingredients: ['Hojaldre', 'Crema de vainilla', 'Caramelo tostado', 'Frambuesa', 'Azúcar glas']
    },
    en: {
      name: 'Cream mille-feuille',
      tagline: 'Desserts',
      description: 'Layers of crisp puff pastry filled with Madagascar vanilla cream, finished with toasted caramel and fresh berries.',
      ingredients: ['Puff pastry', 'Vanilla cream', 'Toasted caramel', 'Raspberry', 'Powdered sugar']
    }
  },

  'sorbete-de-citricos': {
    image: 'assets/images/platillos/sorbete-de-citricos.jpg',
    price: 120,
    es: {
      name: 'Sorbete de cítricos',
      tagline: 'Postres',
      description: 'Selección de sorbetes de cítricos de temporada —limón, naranja sanguina y toronja— con un toque de ralladura fresca.',
      ingredients: ['Limón', 'Naranja sanguina', 'Toronja', 'Azúcar', 'Ralladura de cítricos']
    },
    en: {
      name: 'Citrus sorbet',
      tagline: 'Desserts',
      description: 'A selection of seasonal citrus sorbets —lemon, blood orange, and grapefruit— with a touch of fresh zest.',
      ingredients: ['Lemon', 'Blood orange', 'Grapefruit', 'Sugar', 'Citrus zest']
    }
  },

  'copa-de-vino-blanco-de-la-casa': {
    image: 'assets/images/platillos/copa-de-vino-blanco-de-la-casa.jpg',
    price: 110,
    es: {
      name: 'Copa de vino blanco de la casa',
      tagline: 'Bebidas y vinos',
      description: 'Nuestra selección de vino blanco de la casa, elegida entre bodegas locales, servida por copa.',
      ingredients: ['Vino blanco', 'Bodega local']
    },
    en: {
      name: 'House white wine, glass',
      tagline: 'Drinks and wine',
      description: 'Our house white wine selection, chosen from local wineries, served by the glass.',
      ingredients: ['White wine', 'Local winery']
    }
  },

  'copa-de-albarino': {
    image: 'assets/images/platillos/copa-de-albarino.jpg',
    price: 130,
    es: {
      name: 'Copa de albariño',
      tagline: 'Bebidas y vinos',
      description: 'Vino blanco albariño con denominación de origen Rías Baixas, fresco y aromático, ideal para acompañar los platos de marisco de la casa.',
      ingredients: ['Uva albariño', 'Denominación de origen Rías Baixas']
    },
    en: {
      name: 'Albariño, glass',
      tagline: 'Drinks and wine',
      description: 'Albariño white wine with Rías Baixas designation of origin, fresh and aromatic, ideal to pair with the house seafood dishes.',
      ingredients: ['Albariño grape', 'Rías Baixas designation of origin']
    }
  },

  'agua-con-gas-o-sin-gas': {
    image: 'assets/images/platillos/agua-con-gas-o-sin-gas.jpg',
    price: 45,
    es: {
      name: 'Agua con gas o sin gas',
      tagline: 'Bebidas y vinos',
      description: 'Botella de agua mineral de 50cl, a elegir con gas o sin gas.',
      ingredients: ['Agua mineral natural']
    },
    en: {
      name: 'Sparkling or still water',
      tagline: 'Drinks and wine',
      description: '50cl bottle of mineral water, choice of sparkling or still.',
      ingredients: ['Natural mineral water']
    }
  }
};
