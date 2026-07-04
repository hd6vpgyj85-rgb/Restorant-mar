// MAREA — navegación móvil, encabezado al hacer scroll, idioma/moneda y reservas por WhatsApp.

var WHATSAPP_NUMBER = '526568596503';
var USD_RATE = 16; // 1 USD = 16 MXN

var TRANSLATIONS = {
  es: {
    nav_inicio: 'Inicio',
    nav_nosotros: 'Nosotros',
    nav_menu: 'Menú',
    nav_reservas: 'Reservas',

    hero_subtitle: 'Cocina de mar, producto fresco y una sala pensada para el detalle.',
    hero_cta_menu: 'Ver el menú',
    hero_cta_reserve: 'Reservar mesa',

    about_title: 'Una cocina con memoria de puerto',
    about_p1: 'En Marea trabajamos con lo que el mar entrega cada mañana. La lonja marca la carta, no al revés: el pescado y el marisco llegan el mismo día y se cocinan con técnica clásica y mano ligera, dejando que el producto hable por sí solo.',
    about_p2: 'La sala se pensó para acompañar esa misma idea: materiales cálidos, luz baja y mesas espaciadas, para que la conversación y el plato tengan el protagonismo.',
    about_cta: 'Descubrir el menú',

    dishes_title: 'Platos que nos representan',
    dishes_subtitle: 'Una selección breve de la carta, la que mejor resume nuestra cocina.',
    dish1_name: 'Rodaballo a la brasa',
    dish1_desc: 'Con jugo reducido de marisco y verduras de temporada.',
    dish2_name: 'Arroz de bogavante',
    dish2_desc: 'Cocción lenta en cazuela de barro, para compartir.',
    dish3_name: 'Selección de marisco frío',
    dish3_desc: 'Ostras, gambas y centollo, servidos sobre hielo.',

    gallery_title: 'La sala',
    gallery_subtitle: 'Un espacio pensado para que el tiempo pase despacio.',

    quote_text: '«El producto fresco no necesita artificio: solo tiempo, respeto y una brasa bien encendida.»',
    quote_cite: 'Cocina de Marea',

    reserve_title: 'Reserve su mesa',
    reserve_p: 'Recomendamos reservar con antelación, especialmente los fines de semana. Atendemos grupos y celebraciones bajo petición.',
    reserve_dir_label: 'Dirección',
    reserve_hours_label: 'Horario',
    reserve_hours_value: 'Martes a domingo · 13:00–16:00 / 20:00–23:30',
    reserve_contact_label: 'Contacto',
    reserve_cta: 'Reservar por WhatsApp',

    footer_tagline: 'Cocina de mar, producto fresco.',
    footer_copyright: '© 2026 Marea. Todos los derechos reservados.',

    menu_hero_title: 'Nuestro Menú',
    menu_hero_subtitle: 'Producto de temporada, cocinado con técnica clásica.',

    cat_entrantes: 'Entrantes',
    cat_mar: 'Especialidades del mar',
    cat_principales: 'Platos principales',
    cat_postres: 'Postres',
    cat_bebidas: 'Bebidas y vinos',

    item1_name: 'Ostras de la ría',
    item1_desc: 'Media docena, servidas con vinagreta de chalota',
    item2_name: 'Croquetas de bogavante',
    item2_desc: 'Bechamel cremosa y bisque reducido',
    item3_name: 'Carpaccio de vieira',
    item3_desc: 'Cítricos, aceite de oliva virgen y sal en escamas',
    item4_name: 'Pulpo a la brasa',
    item4_desc: 'Puré de patata ahumada y pimentón',

    item5_name: 'Rodaballo a la brasa',
    item5_desc: 'Jugo reducido de marisco y verduras de temporada',
    item6_name: 'Arroz de bogavante',
    item6_desc: 'Cocción lenta en cazuela de barro, para compartir',
    item7_name: 'Lubina salvaje al horno',
    item7_desc: 'Costra de sal marina y hierbas frescas',
    item8_name: 'Selección de marisco frío',
    item8_desc: 'Ostras, gambas y centollo, servidos sobre hielo',

    item9_name: 'Merluza a la brasa',
    item9_desc: 'Salsa verde y almejas de temporada',
    item10_name: 'Fideuá de marisco',
    item10_desc: 'Alioli casero al momento',
    item11_name: 'Bacalao confitado',
    item11_desc: 'Pil pil tradicional y pimiento asado',

    item12_name: 'Tarta de queso al horno',
    item12_desc: 'Reducción de frutos rojos',
    item13_name: 'Milhojas de crema',
    item13_desc: 'Vainilla de Madagascar y caramelo tostado',
    item14_name: 'Sorbete de cítricos',
    item14_desc: 'Selección según temporada',

    item15_name: 'Copa de vino blanco de la casa',
    item15_desc: 'Selección de bodegas locales',
    item16_name: 'Copa de albariño',
    item16_desc: 'Denominación de origen Rías Baixas',
    item17_name: 'Agua con gas o sin gas',
    item17_desc: 'Botella de 50cl',

    menu_note: 'Precios en pesos mexicanos, impuestos incluidos. Consulte alérgenos con nuestro equipo de sala.',
    menu_cta_title: '¿Le apetece probarlo?',
    menu_cta_subtitle: 'Reserve su mesa y descubra la carta completa en persona.',
    menu_cta_button: 'Reservar mesa',

    whatsapp_message: 'Hola, me gustaría reservar una mesa en Marea.'
  },

  en: {
    nav_inicio: 'Home',
    nav_nosotros: 'About',
    nav_menu: 'Menu',
    nav_reservas: 'Reservations',

    hero_subtitle: 'Seafood cuisine, fresh ingredients, and a room designed for detail.',
    hero_cta_menu: 'View the menu',
    hero_cta_reserve: 'Reserve a table',

    about_title: 'A cuisine with the memory of a harbor',
    about_p1: 'At Marea we work with whatever the sea brings in each morning. The fish market sets the menu, not the other way around: fish and shellfish arrive the same day and are cooked with classic technique and a light hand, letting the ingredient speak for itself.',
    about_p2: 'The dining room was designed to match that same idea: warm materials, low light, and well-spaced tables, so conversation and the dish take center stage.',
    about_cta: 'Discover the menu',

    dishes_title: 'Dishes that represent us',
    dishes_subtitle: 'A short selection from the menu, the one that best sums up our cuisine.',
    dish1_name: 'Grilled Turbot',
    dish1_desc: 'With reduced seafood jus and seasonal vegetables.',
    dish2_name: 'Lobster Rice',
    dish2_desc: 'Slow-cooked in a clay pot, to share.',
    dish3_name: 'Chilled Seafood Selection',
    dish3_desc: 'Oysters, shrimp, and spider crab, served on ice.',

    gallery_title: 'The dining room',
    gallery_subtitle: 'A space designed for time to pass slowly.',

    quote_text: '"Fresh ingredients need no artifice: only time, respect, and a well-lit ember."',
    quote_cite: 'Marea Kitchen',

    reserve_title: 'Reserve your table',
    reserve_p: 'We recommend booking in advance, especially on weekends. We accommodate groups and celebrations upon request.',
    reserve_dir_label: 'Address',
    reserve_hours_label: 'Hours',
    reserve_hours_value: 'Tuesday to Sunday · 1:00–4:00 PM / 8:00–11:30 PM',
    reserve_contact_label: 'Contact',
    reserve_cta: 'Reserve via WhatsApp',

    footer_tagline: 'Seafood cuisine, fresh ingredients.',
    footer_copyright: '© 2026 Marea. All rights reserved.',

    menu_hero_title: 'Our Menu',
    menu_hero_subtitle: 'Seasonal ingredients, cooked with classic technique.',

    cat_entrantes: 'Starters',
    cat_mar: 'Seafood specialties',
    cat_principales: 'Main courses',
    cat_postres: 'Desserts',
    cat_bebidas: 'Drinks and wine',

    item1_name: 'Local oysters',
    item1_desc: 'Half a dozen, served with shallot vinaigrette',
    item2_name: 'Lobster croquettes',
    item2_desc: 'Creamy béchamel and reduced bisque',
    item3_name: 'Scallop carpaccio',
    item3_desc: 'Citrus, virgin olive oil, and flaky salt',
    item4_name: 'Grilled octopus',
    item4_desc: 'Smoked potato purée and paprika',

    item5_name: 'Grilled turbot',
    item5_desc: 'Reduced seafood jus and seasonal vegetables',
    item6_name: 'Lobster rice',
    item6_desc: 'Slow-cooked in a clay pot, to share',
    item7_name: 'Baked wild sea bass',
    item7_desc: 'Sea salt crust and fresh herbs',
    item8_name: 'Chilled seafood selection',
    item8_desc: 'Oysters, shrimp, and spider crab, served on ice',

    item9_name: 'Grilled hake',
    item9_desc: 'Green sauce and seasonal clams',
    item10_name: 'Seafood fideuá',
    item10_desc: 'Fresh homemade aioli',
    item11_name: 'Confit cod',
    item11_desc: 'Traditional pil pil and roasted pepper',

    item12_name: 'Baked cheesecake',
    item12_desc: 'Red berry reduction',
    item13_name: 'Cream mille-feuille',
    item13_desc: 'Madagascar vanilla and toasted caramel',
    item14_name: 'Citrus sorbet',
    item14_desc: 'Seasonal selection',

    item15_name: 'House white wine, glass',
    item15_desc: 'Selection from local wineries',
    item16_name: 'Albariño, glass',
    item16_desc: 'Rías Baixas designation of origin',
    item17_name: 'Sparkling or still water',
    item17_desc: '50cl bottle',

    menu_note: 'Prices in Mexican pesos, taxes included. Ask our team about allergens.',
    menu_cta_title: 'Ready to try it?',
    menu_cta_subtitle: 'Reserve your table and discover the full menu in person.',
    menu_cta_button: 'Reserve a table',

    whatsapp_message: 'Hello, I would like to reserve a table at Marea.'
  }
};

function formatPrice(mxn, lang) {
  if (lang === 'en') {
    var usd = Math.round(mxn / USD_RATE);
    return '$' + usd + ' USD';
  }
  return '$' + mxn + ' MXN';
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    var text = TRANSLATIONS[lang][key];
    if (text !== undefined) {
      el.textContent = text;
    }
  });

  document.querySelectorAll('[data-price]').forEach(function (el) {
    var mxn = parseFloat(el.getAttribute('data-price'));
    el.textContent = formatPrice(mxn, lang);
  });

  var whatsappHref = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(TRANSLATIONS[lang].whatsapp_message);
  document.querySelectorAll('[data-whatsapp-cta]').forEach(function (el) {
    el.setAttribute('href', whatsappHref);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  });

  document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
    btn.classList.toggle('is-active', btn.getAttribute('data-lang-btn') === lang);
  });

  try {
    localStorage.setItem('marea-lang', lang);
  } catch (e) {
    /* localStorage no disponible (modo privado, etc.): se ignora, el idioma solo persiste durante la sesión */
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('[data-header]');
  var toggle = document.querySelector('[data-nav-toggle]');
  var nav = document.querySelector('[data-nav]');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (header) {
    var updateHeader = function () {
      if (window.scrollY > 40) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLanguage(btn.getAttribute('data-lang-btn'));
    });
  });

  var savedLang = 'es';
  try {
    savedLang = localStorage.getItem('marea-lang') || 'es';
  } catch (e) {
    /* localStorage no disponible: se usa español por defecto */
  }
  applyLanguage(savedLang);
});
