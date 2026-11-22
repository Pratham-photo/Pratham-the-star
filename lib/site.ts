export interface ImageItem {
  src: string
  alt: string
  focus?: string
}

export interface ProjectItem {
  id: string
  category: string
  title: string
  description: string
  year: string
  label: string
  cover: ImageItem
  photos?: ImageItem[]
  gallery: ImageItem[]
}

export interface SiteConfig {
  name: string
  year: string
  title: string
  description: string
  nav: {
    logo: string
    links: Array<{ name: string; href: string }>
  }
  hero: {
    words: [string, string]
    image: ImageItem
  }
  about: {
    label: string
    heading: string
    intro: string[]
    middle: string[]
    belief: {
      heading: string
      text: string
    }
    outro: {
      learning: string
      highlighted: string
      closing: string
      signature: string
    }
  }
  marquee: string
  projects: ProjectItem[]
  composition: {
    title: string
    description: string
    images: [ImageItem, ImageItem, ImageItem]
  }
  contact: {
    cta: string
    email: string
    location: string
    socials: Array<{ name: string; href?: string }>
  }
}

export const site: SiteConfig = {
  "name": "PRATHAM PARIKH",
  "year": "2026",
  "title": "PRATHAM PARIKH | Filmmaker • Director • Storyteller",
  "description": "Digital artifacts and cinematic visual storytelling that shatter the noise.",
  "nav": {
    "logo": "PRATHAM PARIKH ©26",
    "links": [
      {
        "name": "Work",
        "href": "#work"
      },
      {
        "name": "About",
        "href": "#about"
      },
      {
        "name": "Contact",
        "href": "#contact"
      }
    ]
  },
  "hero": {
    "words": [
      "VISION",
      "STORIES"
    ],
    "image": {
      "src": "/work/hero.jpeg",
      "alt": "Portrait of Pratham Parikh",
      "focus": "50% 30%"
    }
  },
  "about": {
    "label": "PRATHAM PARIKH | FILMMAKER • DIRECTOR • STORYTELLER",
    "heading": "CREATIVITY HAS NO FIXED BOUNDARIES.",
    "intro": [
      "Hello, I'm Pratham.",
      "I have always been fascinated by the art of storytelling and the way a simple moment can be transformed into something meaningful through creativity and imagination.",
      "I tend to observe the world from a different perspective. An ordinary situation can inspire an entire storyline, a random thought can develop into a creative concept, and a single frame can communicate emotions that words sometimes cannot express."
    ],
    "middle": [
      "My imagination is constantly working. I often find myself visualising scenes, developing storylines, exploring camera angles and imagining how everyday experiences could be presented on screen. I consider this ability to think creatively one of my greatest strengths.",
      "My interests lie in filmmaking, direction, cinematography, photography and visual storytelling. I enjoy experimenting with different perspectives and exploring innovative ways to communicate ideas through visuals."
    ],
    "belief": {
      "heading": "BEYOND THE FRAME",
      "text": "I believe that filmmaking is not simply about capturing beautiful images; it is about understanding emotions, creating meaningful connections and presenting stories in a way that resonates with people."
    },
    "outro": {
      "learning": "I am still learning, discovering and refining my creative abilities. Every project gives me an opportunity to gain experience, challenge my imagination and develop my own artistic identity.",
      "highlighted": "For me, creativity has no fixed boundaries. It begins with an idea, grows through imagination and comes to life through a camera.",
      "closing": "Welcome to my creative world. Explore my work, experience my perspective and discover the stories I wish to tell.",
      "signature": "— Pratham Parikh"
    }
  },
  "marquee": "FILM — DIRECTION — STORY — PHOTOGRAPHY — ",
  "projects": [
    {
      "id": "001",
      "category": "001 / FASHION",
      "title": "SUITED",
      "description": "Tailored neutral silhouettes contrasting sharply against austere brutalist concrete geometry.",
      "year": "2024",
      "label": "MONOLITH",
      "cover": {
        "src": "/work/suited/suited-01.jpeg",
        "alt": "Model standing in tailored beige suit in brutalist concrete setting",
        "focus": "center 20%"
      },
      "photos": [
        {
          "src": "/work/suited/suited-02.jpeg",
          "alt": "Model in beige suit leaning against concrete column",
          "focus": "center 20%"
        },
        {
          "src": "/work/suited/suited-03.jpeg",
          "alt": "Motion blur study of model in beige suit",
          "focus": "center center"
        },
        {
          "src": "/work/suited/suited-04.jpeg",
          "alt": "Model crouched in beige suit looking upward",
          "focus": "center 25%"
        },
        {
          "src": "/work/suited/suited-05.jpeg",
          "alt": "Full length portrait of model wearing dark sunglasses with suit",
          "focus": "center 20%"
        },
        {
          "src": "/work/suited/suited-06.jpeg",
          "alt": "Kinetic walking motion portrait in oversized beige suit",
          "focus": "center center"
        },
        {
          "src": "/work/suited/suited-07.jpeg",
          "alt": "Crouched editorial pose with hands on face in beige suit",
          "focus": "center 25%"
        },
        {
          "src": "/work/suited/suited-08.jpeg",
          "alt": "Profile portrait of model against architectural concrete pillar",
          "focus": "center 20%"
        },
        {
          "src": "/work/suited/suited-09.jpeg",
          "alt": "Black and white editorial portrait of crouched suited model",
          "focus": "center 25%"
        },
        {
          "src": "/work/suited/suited-10.jpeg",
          "alt": "Frontal crouching fashion portrait in tailored silhouette",
          "focus": "center 25%"
        },
        {
          "src": "/work/suited/suited-11.jpeg",
          "alt": "Side profile crouching pose against minimalist concrete backdrop",
          "focus": "center 25%"
        }
      ],
      "gallery": [
        {
          "src": "/work/suited/suited-02.jpeg",
          "alt": "Model in beige suit leaning against concrete column",
          "focus": "center 20%"
        },
        {
          "src": "/work/suited/suited-03.jpeg",
          "alt": "Motion blur study of model in beige suit",
          "focus": "center center"
        },
        {
          "src": "/work/suited/suited-04.jpeg",
          "alt": "Model crouched in beige suit looking upward",
          "focus": "center 25%"
        },
        {
          "src": "/work/suited/suited-05.jpeg",
          "alt": "Full length portrait of model wearing dark sunglasses with suit",
          "focus": "center 20%"
        },
        {
          "src": "/work/suited/suited-06.jpeg",
          "alt": "Kinetic walking motion portrait in oversized beige suit",
          "focus": "center center"
        },
        {
          "src": "/work/suited/suited-07.jpeg",
          "alt": "Crouched editorial pose with hands on face in beige suit",
          "focus": "center 25%"
        },
        {
          "src": "/work/suited/suited-08.jpeg",
          "alt": "Profile portrait of model against architectural concrete pillar",
          "focus": "center 20%"
        },
        {
          "src": "/work/suited/suited-09.jpeg",
          "alt": "Black and white editorial portrait of crouched suited model",
          "focus": "center 25%"
        },
        {
          "src": "/work/suited/suited-10.jpeg",
          "alt": "Frontal crouching fashion portrait in tailored silhouette",
          "focus": "center 25%"
        },
        {
          "src": "/work/suited/suited-11.jpeg",
          "alt": "Side profile crouching pose against minimalist concrete backdrop",
          "focus": "center 25%"
        }
      ]
    },
    {
      "id": "002",
      "category": "002 / COUTURE",
      "title": "CRIMSON",
      "description": "Vibrant ceremonial styling accented by rich scarlet silks, hand-embroidered zardozi, and natural light.",
      "year": "2024",
      "label": "SCARLET",
      "cover": {
        "src": "/work/crimson/crimson-01.jpeg",
        "alt": "Editorial portrait of model in heavy crimson bridal lehenga and ornate jewelry",
        "focus": "center 25%"
      },
      "photos": [
        {
          "src": "/work/crimson/crimson-02.jpeg",
          "alt": "Seated bridal portrait in crimson silk lehenga against warm terracotta background",
          "focus": "center 25%"
        },
        {
          "src": "/work/crimson/crimson-03.jpeg",
          "alt": "Contemplative bridal pose in crimson attire with delicate sheer veil",
          "focus": "center 25%"
        },
        {
          "src": "/work/crimson/crimson-04.jpeg",
          "alt": "Full length bridal portrait in crimson lehenga framed by lush leafy arbor",
          "focus": "center 20%"
        },
        {
          "src": "/work/crimson/crimson-05.jpeg",
          "alt": "Bridal fashion portrait in vibrant crimson silk under natural garden canopy",
          "focus": "center 20%"
        },
        {
          "src": "/work/crimson/crimson-06.jpeg",
          "alt": "Embroidered crimson lehenga hanging against open field sunset",
          "focus": "center center"
        }
      ],
      "gallery": [
        {
          "src": "/work/crimson/crimson-02.jpeg",
          "alt": "Seated bridal portrait in crimson silk lehenga against warm terracotta background",
          "focus": "center 25%"
        },
        {
          "src": "/work/crimson/crimson-03.jpeg",
          "alt": "Contemplative bridal pose in crimson attire with delicate sheer veil",
          "focus": "center 25%"
        },
        {
          "src": "/work/crimson/crimson-04.jpeg",
          "alt": "Full length bridal portrait in crimson lehenga framed by lush leafy arbor",
          "focus": "center 20%"
        },
        {
          "src": "/work/crimson/crimson-05.jpeg",
          "alt": "Bridal fashion portrait in vibrant crimson silk under natural garden canopy",
          "focus": "center 20%"
        },
        {
          "src": "/work/crimson/crimson-06.jpeg",
          "alt": "Embroidered crimson lehenga hanging against open field sunset",
          "focus": "center center"
        }
      ]
    },
    {
      "id": "003",
      "category": "003 / STREETWEAR",
      "title": "VARSITY",
      "description": "Dynamic low-angle and slow-shutter urban narrative featuring bold collegiate sportswear.",
      "year": "2024",
      "label": "REBEL",
      "cover": {
        "src": "/work/varsity/varsity-01.jpeg",
        "alt": "High-angle streetwear portrait in oversized red and white varsity jersey",
        "focus": "center 30%"
      },
      "photos": [
        {
          "src": "/work/varsity/varsity-02.jpeg",
          "alt": "High-angle bird-eye view of model wearing collegiate sports jersey and baggy jeans",
          "focus": "center 30%"
        },
        {
          "src": "/work/varsity/varsity-03.jpeg",
          "alt": "Motion-blurred high-angle perspective of model in varsity jersey",
          "focus": "center center"
        },
        {
          "src": "/work/varsity/varsity-04.jpeg",
          "alt": "Dusk urban perspective along seaside promenade with lamp posts and varsity jersey",
          "focus": "center 30%"
        },
        {
          "src": "/work/varsity/varsity-05.jpeg",
          "alt": "Nocturnal slow shutter motion blur in red and white sportswear",
          "focus": "center center"
        },
        {
          "src": "/work/varsity/varsity-06.jpeg",
          "alt": "Dynamic walking motion capture under warm outdoor street lamps",
          "focus": "center 25%"
        },
        {
          "src": "/work/varsity/varsity-07.jpeg",
          "alt": "Ghosted long-exposure portrait of model sitting on concrete stairs",
          "focus": "center 30%"
        },
        {
          "src": "/work/varsity/varsity-08.jpeg",
          "alt": "Kinetic top-down blur study of model in bandana and jersey",
          "focus": "center center"
        },
        {
          "src": "/work/varsity/varsity-09.jpeg",
          "alt": "Expressive seated blur on outdoor stairs in vintage varsity wear",
          "focus": "center 30%"
        },
        {
          "src": "/work/varsity/varsity-10.jpeg",
          "alt": "Panning motion blur capture of model walking past textured wall",
          "focus": "center center"
        },
        {
          "src": "/work/varsity/varsity-11.jpeg",
          "alt": "Striking close-up portrait of model in bandana looking back over sleeve",
          "focus": "center 25%"
        },
        {
          "src": "/work/varsity/varsity-12.jpeg",
          "alt": "Black and white urban street portrait of model in flame graphic tee beneath elevated footbridge",
          "focus": "center 25%"
        }
      ],
      "gallery": [
        {
          "src": "/work/varsity/varsity-02.jpeg",
          "alt": "High-angle bird-eye view of model wearing collegiate sports jersey and baggy jeans",
          "focus": "center 30%"
        },
        {
          "src": "/work/varsity/varsity-03.jpeg",
          "alt": "Motion-blurred high-angle perspective of model in varsity jersey",
          "focus": "center center"
        },
        {
          "src": "/work/varsity/varsity-04.jpeg",
          "alt": "Dusk urban perspective along seaside promenade with lamp posts and varsity jersey",
          "focus": "center 30%"
        },
        {
          "src": "/work/varsity/varsity-05.jpeg",
          "alt": "Nocturnal slow shutter motion blur in red and white sportswear",
          "focus": "center center"
        },
        {
          "src": "/work/varsity/varsity-06.jpeg",
          "alt": "Dynamic walking motion capture under warm outdoor street lamps",
          "focus": "center 25%"
        },
        {
          "src": "/work/varsity/varsity-07.jpeg",
          "alt": "Ghosted long-exposure portrait of model sitting on concrete stairs",
          "focus": "center 30%"
        },
        {
          "src": "/work/varsity/varsity-08.jpeg",
          "alt": "Kinetic top-down blur study of model in bandana and jersey",
          "focus": "center center"
        },
        {
          "src": "/work/varsity/varsity-09.jpeg",
          "alt": "Expressive seated blur on outdoor stairs in vintage varsity wear",
          "focus": "center 30%"
        },
        {
          "src": "/work/varsity/varsity-10.jpeg",
          "alt": "Panning motion blur capture of model walking past textured wall",
          "focus": "center center"
        },
        {
          "src": "/work/varsity/varsity-11.jpeg",
          "alt": "Striking close-up portrait of model in bandana looking back over sleeve",
          "focus": "center 25%"
        },
        {
          "src": "/work/varsity/varsity-12.jpeg",
          "alt": "Black and white urban street portrait of model in flame graphic tee beneath elevated footbridge",
          "focus": "center 25%"
        }
      ]
    },
    {
      "id": "004",
      "category": "004 / EDITORIAL",
      "title": "BLOOM",
      "description": "High-concept ensemble editorial examining floral symmetry, youth expression, and communal form.",
      "year": "2024",
      "label": "PETAL",
      "cover": {
        "src": "/work/bloom/bloom-01.jpeg",
        "alt": "Ensemble editorial group portrait in matching custom floral textiles",
        "focus": "center 30%"
      },
      "photos": [
        {
          "src": "/work/bloom/bloom-02.jpeg",
          "alt": "Solo editorial fashion portrait of model in floral print corset and denim",
          "focus": "center 25%"
        },
        {
          "src": "/work/bloom/bloom-03.jpeg",
          "alt": "Dual model composition with floral print garments and neutral backdrop",
          "focus": "center 25%"
        },
        {
          "src": "/work/bloom/bloom-04.jpeg",
          "alt": "Model adjusting floral necktie in studio lighting",
          "focus": "center 25%"
        },
        {
          "src": "/work/bloom/bloom-05.jpeg",
          "alt": "Two models seated together wearing coordinated floral print designs",
          "focus": "center 25%"
        },
        {
          "src": "/work/bloom/bloom-06.jpeg",
          "alt": "Studio fashion pose of two models interacting with footwear and floral fabrics",
          "focus": "center 25%"
        },
        {
          "src": "/work/bloom/bloom-07.jpeg",
          "alt": "Black and white intimate editorial portrait of models intertwined in floral textiles",
          "focus": "center 30%"
        },
        {
          "src": "/work/bloom/bloom-08.jpeg",
          "alt": "Monochrome close-up portrait exploring human connection and soft textures",
          "focus": "center 30%"
        },
        {
          "src": "/work/bloom/bloom-09.jpeg",
          "alt": "Intimate studio close-up of model framed by supporting hands",
          "focus": "center 30%"
        },
        {
          "src": "/work/bloom/bloom-10.jpeg",
          "alt": "Colour editorial close-up of model with floral drape and hand on chin",
          "focus": "center 30%"
        },
        {
          "src": "/work/bloom/bloom-11.jpeg",
          "alt": "Black and white group trio portrait with layered poses and floral patterns",
          "focus": "center 30%"
        },
        {
          "src": "/work/bloom/bloom-12.jpeg",
          "alt": "Three models grouped in studio with coordinated floral clothing",
          "focus": "center 30%"
        },
        {
          "src": "/work/bloom/bloom-13.jpeg",
          "alt": "Close-up fashion frame highlighting makeup and textured floral drape",
          "focus": "center 30%"
        },
        {
          "src": "/work/bloom/bloom-14.jpeg",
          "alt": "Black and white studio composition of two models resting together",
          "focus": "center 30%"
        },
        {
          "src": "/work/bloom/bloom-15.jpeg",
          "alt": "Intimate mirror reflection portrait of model preparing backstage",
          "focus": "center 25%"
        },
        {
          "src": "/work/bloom/bloom-16.jpeg",
          "alt": "Low-angle black and white group composition of four models in editorial attire",
          "focus": "center 30%"
        }
      ],
      "gallery": [
        {
          "src": "/work/bloom/bloom-02.jpeg",
          "alt": "Solo editorial fashion portrait of model in floral print corset and denim",
          "focus": "center 25%"
        },
        {
          "src": "/work/bloom/bloom-03.jpeg",
          "alt": "Dual model composition with floral print garments and neutral backdrop",
          "focus": "center 25%"
        },
        {
          "src": "/work/bloom/bloom-04.jpeg",
          "alt": "Model adjusting floral necktie in studio lighting",
          "focus": "center 25%"
        },
        {
          "src": "/work/bloom/bloom-05.jpeg",
          "alt": "Two models seated together wearing coordinated floral print designs",
          "focus": "center 25%"
        },
        {
          "src": "/work/bloom/bloom-06.jpeg",
          "alt": "Studio fashion pose of two models interacting with footwear and floral fabrics",
          "focus": "center 25%"
        },
        {
          "src": "/work/bloom/bloom-07.jpeg",
          "alt": "Black and white intimate editorial portrait of models intertwined in floral textiles",
          "focus": "center 30%"
        },
        {
          "src": "/work/bloom/bloom-08.jpeg",
          "alt": "Monochrome close-up portrait exploring human connection and soft textures",
          "focus": "center 30%"
        },
        {
          "src": "/work/bloom/bloom-09.jpeg",
          "alt": "Intimate studio close-up of model framed by supporting hands",
          "focus": "center 30%"
        },
        {
          "src": "/work/bloom/bloom-10.jpeg",
          "alt": "Colour editorial close-up of model with floral drape and hand on chin",
          "focus": "center 30%"
        },
        {
          "src": "/work/bloom/bloom-11.jpeg",
          "alt": "Black and white group trio portrait with layered poses and floral patterns",
          "focus": "center 30%"
        },
        {
          "src": "/work/bloom/bloom-12.jpeg",
          "alt": "Three models grouped in studio with coordinated floral clothing",
          "focus": "center 30%"
        },
        {
          "src": "/work/bloom/bloom-13.jpeg",
          "alt": "Close-up fashion frame highlighting makeup and textured floral drape",
          "focus": "center 30%"
        },
        {
          "src": "/work/bloom/bloom-14.jpeg",
          "alt": "Black and white studio composition of two models resting together",
          "focus": "center 30%"
        },
        {
          "src": "/work/bloom/bloom-15.jpeg",
          "alt": "Intimate mirror reflection portrait of model preparing backstage",
          "focus": "center 25%"
        },
        {
          "src": "/work/bloom/bloom-16.jpeg",
          "alt": "Low-angle black and white group composition of four models in editorial attire",
          "focus": "center 30%"
        }
      ]
    },
    {
      "id": "005",
      "category": "005 / HERITAGE",
      "title": "WHITE",
      "description": "Ethereal Chikankari drape series set against time-worn architectural monuments and still waters.",
      "year": "2024",
      "label": "SERENE",
      "cover": {
        "src": "/work/white/white-01.jpeg",
        "alt": "Full length editorial portrait of model in white embroidered saree beside antique red doors",
        "focus": "center 20%"
      },
      "photos": [
        {
          "src": "/work/white/white-02.jpeg",
          "alt": "Model in white saree walking down a historic stone corridor",
          "focus": "center 25%"
        },
        {
          "src": "/work/white/white-03.jpeg",
          "alt": "Dynamic twirl in white Chikankari saree alongside weathered heritage wall",
          "focus": "center 25%"
        },
        {
          "src": "/work/white/white-04.jpeg",
          "alt": "Motion-blurred portrait in white saree framed against red wooden doors",
          "focus": "center 25%"
        },
        {
          "src": "/work/white/white-05.jpeg",
          "alt": "Full length poise in white saree beside textured rustic facade",
          "focus": "center 25%"
        },
        {
          "src": "/work/white/white-06.jpeg",
          "alt": "Standing in white saree leaning on a mature banyan tree at water edge",
          "focus": "center 25%"
        },
        {
          "src": "/work/white/white-07.jpeg",
          "alt": "Medium portrait in white saree smiling beside tranquil lakeside",
          "focus": "center 25%"
        },
        {
          "src": "/work/white/white-08.jpeg",
          "alt": "Serene lakeside full length portrait in white traditional drape",
          "focus": "center 25%"
        },
        {
          "src": "/work/white/white-09.jpeg",
          "alt": "Candid profile smiling portrait in white saree with water reflections",
          "focus": "center 25%"
        },
        {
          "src": "/work/white/white-10.jpeg",
          "alt": "Gentle natural light portrait in white saree beside lake",
          "focus": "center 25%"
        },
        {
          "src": "/work/white/white-11.jpeg",
          "alt": "Model in white saree reaching up towards lush green foliage",
          "focus": "center 20%"
        },
        {
          "src": "/work/white/white-12.jpeg",
          "alt": "Soft outdoor portrait in white saree with scenic green background",
          "focus": "center 25%"
        },
        {
          "src": "/work/white/white-13.jpeg",
          "alt": "Side profile portrait in white saree framed by traditional carved red door",
          "focus": "center 25%"
        }
      ],
      "gallery": [
        {
          "src": "/work/white/white-02.jpeg",
          "alt": "Model in white saree walking down a historic stone corridor",
          "focus": "center 25%"
        },
        {
          "src": "/work/white/white-03.jpeg",
          "alt": "Dynamic twirl in white Chikankari saree alongside weathered heritage wall",
          "focus": "center 25%"
        },
        {
          "src": "/work/white/white-04.jpeg",
          "alt": "Motion-blurred portrait in white saree framed against red wooden doors",
          "focus": "center 25%"
        },
        {
          "src": "/work/white/white-05.jpeg",
          "alt": "Full length poise in white saree beside textured rustic facade",
          "focus": "center 25%"
        },
        {
          "src": "/work/white/white-06.jpeg",
          "alt": "Standing in white saree leaning on a mature banyan tree at water edge",
          "focus": "center 25%"
        },
        {
          "src": "/work/white/white-07.jpeg",
          "alt": "Medium portrait in white saree smiling beside tranquil lakeside",
          "focus": "center 25%"
        },
        {
          "src": "/work/white/white-08.jpeg",
          "alt": "Serene lakeside full length portrait in white traditional drape",
          "focus": "center 25%"
        },
        {
          "src": "/work/white/white-09.jpeg",
          "alt": "Candid profile smiling portrait in white saree with water reflections",
          "focus": "center 25%"
        },
        {
          "src": "/work/white/white-10.jpeg",
          "alt": "Gentle natural light portrait in white saree beside lake",
          "focus": "center 25%"
        },
        {
          "src": "/work/white/white-11.jpeg",
          "alt": "Model in white saree reaching up towards lush green foliage",
          "focus": "center 20%"
        },
        {
          "src": "/work/white/white-12.jpeg",
          "alt": "Soft outdoor portrait in white saree with scenic green background",
          "focus": "center 25%"
        },
        {
          "src": "/work/white/white-13.jpeg",
          "alt": "Side profile portrait in white saree framed by traditional carved red door",
          "focus": "center 25%"
        }
      ]
    },
    {
      "id": "006",
      "category": "006 / CINEMATOGRAPHY",
      "title": "NOCTURNE",
      "description": "Subterranean light trails and nocturnal motion studies exploring rhythm through velocity.",
      "year": "2024",
      "label": "SHADOW",
      "cover": {
        "src": "/work/nocturne/nocturne-01.jpeg",
        "alt": "Model in black dress posing with hands on hips in dimly lit subterranean garage",
        "focus": "center 25%"
      },
      "photos": [
        {
          "src": "/work/nocturne/nocturne-02.jpeg",
          "alt": "Crouched nocturnal motion blur study in black sleeveless dress",
          "focus": "center center"
        },
        {
          "src": "/work/nocturne/nocturne-03.jpeg",
          "alt": "Ghosted walking motion in underground parking structure",
          "focus": "center center"
        },
        {
          "src": "/work/nocturne/nocturne-04.jpeg",
          "alt": "Model standing in underground structure with subtle slow-shutter ghosting",
          "focus": "center 25%"
        },
        {
          "src": "/work/nocturne/nocturne-05.jpeg",
          "alt": "Diagonal motion trail portrait in subterranean architectural space",
          "focus": "center center"
        },
        {
          "src": "/work/nocturne/nocturne-06.jpeg",
          "alt": "Long-exposure walking portrait with multiple exposures in underground garage",
          "focus": "center 25%"
        },
        {
          "src": "/work/nocturne/nocturne-07.jpeg",
          "alt": "Subterranean motion trail with hands on hips under fluorescent lighting",
          "focus": "center 25%"
        },
        {
          "src": "/work/nocturne/nocturne-08.jpeg",
          "alt": "Cinematic golden light portrait of model seated on concrete stairway",
          "focus": "center 25%"
        },
        {
          "src": "/work/nocturne/nocturne-09.jpeg",
          "alt": "Motorcycle rider in black leather jacket and helmet parked under night sky",
          "focus": "center 30%"
        },
        {
          "src": "/work/nocturne/nocturne-10.jpeg",
          "alt": "Low-angle cinematic black and white capture of motorcycle and rider at night",
          "focus": "center 30%"
        },
        {
          "src": "/work/nocturne/nocturne-11.jpeg",
          "alt": "Atmospheric night garden setting with hanging woven lantern and warm fairy lights",
          "focus": "center center"
        },
        {
          "src": "/work/nocturne/nocturne-12.jpeg",
          "alt": "Glossy red Royal Enfield Continental GT motorcycle with checkered racing helmet on seat in showroom",
          "focus": "center center"
        },
        {
          "src": "/work/nocturne/nocturne-13.jpeg",
          "alt": "Detailed macro perspective of red Royal Enfield fuel tank, chrome engine block and spoked wheel",
          "focus": "center 30%"
        },
        {
          "src": "/work/nocturne/nocturne-14.jpeg",
          "alt": "Night portrait of motorcycle rider in black leather jacket and tinted helmet standing beside dark streetfighter bike with twin LED headlights",
          "focus": "center 25%"
        },
        {
          "src": "/work/nocturne/nocturne-15.jpeg",
          "alt": "Slow-shutter kinetic motion blur capture of motorcycle rider in leather jacket with light streaks",
          "focus": "center 30%"
        },
        {
          "src": "/work/nocturne/nocturne-16.jpeg",
          "alt": "Nocturnal carnival swing carousel in rapid motion drenched in vivid neon magenta and cyan illumination",
          "focus": "center center"
        },
        {
          "src": "/work/nocturne/nocturne-17.jpeg",
          "alt": "Warm golden crystal chandelier suspended from ornate dark architectural ceiling",
          "focus": "center 30%"
        },
        {
          "src": "/work/nocturne/nocturne-18.jpeg",
          "alt": "Pale full moon glowing through silhouetted tree branches against a deep twilight lavender sky",
          "focus": "center center"
        }
      ],
      "gallery": [
        {
          "src": "/work/nocturne/nocturne-02.jpeg",
          "alt": "Crouched nocturnal motion blur study in black sleeveless dress",
          "focus": "center center"
        },
        {
          "src": "/work/nocturne/nocturne-03.jpeg",
          "alt": "Ghosted walking motion in underground parking structure",
          "focus": "center center"
        },
        {
          "src": "/work/nocturne/nocturne-04.jpeg",
          "alt": "Model standing in underground structure with subtle slow-shutter ghosting",
          "focus": "center 25%"
        },
        {
          "src": "/work/nocturne/nocturne-05.jpeg",
          "alt": "Diagonal motion trail portrait in subterranean architectural space",
          "focus": "center center"
        },
        {
          "src": "/work/nocturne/nocturne-06.jpeg",
          "alt": "Long-exposure walking portrait with multiple exposures in underground garage",
          "focus": "center 25%"
        },
        {
          "src": "/work/nocturne/nocturne-07.jpeg",
          "alt": "Subterranean motion trail with hands on hips under fluorescent lighting",
          "focus": "center 25%"
        },
        {
          "src": "/work/nocturne/nocturne-08.jpeg",
          "alt": "Cinematic golden light portrait of model seated on concrete stairway",
          "focus": "center 25%"
        },
        {
          "src": "/work/nocturne/nocturne-09.jpeg",
          "alt": "Motorcycle rider in black leather jacket and helmet parked under night sky",
          "focus": "center 30%"
        },
        {
          "src": "/work/nocturne/nocturne-10.jpeg",
          "alt": "Low-angle cinematic black and white capture of motorcycle and rider at night",
          "focus": "center 30%"
        },
        {
          "src": "/work/nocturne/nocturne-11.jpeg",
          "alt": "Atmospheric night garden setting with hanging woven lantern and warm fairy lights",
          "focus": "center center"
        },
        {
          "src": "/work/nocturne/nocturne-12.jpeg",
          "alt": "Glossy red Royal Enfield Continental GT motorcycle with checkered racing helmet on seat in showroom",
          "focus": "center center"
        },
        {
          "src": "/work/nocturne/nocturne-13.jpeg",
          "alt": "Detailed macro perspective of red Royal Enfield fuel tank, chrome engine block and spoked wheel",
          "focus": "center 30%"
        },
        {
          "src": "/work/nocturne/nocturne-14.jpeg",
          "alt": "Night portrait of motorcycle rider in black leather jacket and tinted helmet standing beside dark streetfighter bike with twin LED headlights",
          "focus": "center 25%"
        },
        {
          "src": "/work/nocturne/nocturne-15.jpeg",
          "alt": "Slow-shutter kinetic motion blur capture of motorcycle rider in leather jacket with light streaks",
          "focus": "center 30%"
        },
        {
          "src": "/work/nocturne/nocturne-16.jpeg",
          "alt": "Nocturnal carnival swing carousel in rapid motion drenched in vivid neon magenta and cyan illumination",
          "focus": "center center"
        },
        {
          "src": "/work/nocturne/nocturne-17.jpeg",
          "alt": "Warm golden crystal chandelier suspended from ornate dark architectural ceiling",
          "focus": "center 30%"
        },
        {
          "src": "/work/nocturne/nocturne-18.jpeg",
          "alt": "Pale full moon glowing through silhouetted tree branches against a deep twilight lavender sky",
          "focus": "center center"
        }
      ]
    },
    {
      "id": "007",
      "category": "007 / CEREMONY",
      "title": "WEDDING",
      "description": "Monochrome and candid documentary captures celebrating sacred vows and timeless emotion.",
      "year": "2024",
      "label": "DEVOTION",
      "cover": {
        "src": "/work/wedding/wedding-01.jpeg",
        "alt": "Intimate black and white fine-art wedding portrait of bride and groom embrace",
        "focus": "center 30%"
      },
      "photos": [
        {
          "src": "/work/wedding/wedding-02.jpeg",
          "alt": "Four-panel black and white grid of intimate wedding ceremony moments",
          "focus": "center center"
        },
        {
          "src": "/work/wedding/wedding-03.jpeg",
          "alt": "Joyous outdoor black and white capture of bride and groom walking in garden",
          "focus": "center 30%"
        },
        {
          "src": "/work/wedding/wedding-04.jpeg",
          "alt": "Four-panel fine-art black and white wedding montage",
          "focus": "center center"
        },
        {
          "src": "/work/wedding/wedding-05.jpeg",
          "alt": "Black and white wide capture of bride and groom in garden promenade",
          "focus": "center 30%"
        },
        {
          "src": "/work/wedding/wedding-06.jpeg",
          "alt": "Black and white bridal preparation portrait looking into grand mirror",
          "focus": "center 25%"
        },
        {
          "src": "/work/wedding/wedding-07.jpeg",
          "alt": "Candid outdoor colour portrait of newlyweds embracing in natural garden setting",
          "focus": "center 30%"
        }
      ],
      "gallery": [
        {
          "src": "/work/wedding/wedding-02.jpeg",
          "alt": "Four-panel black and white grid of intimate wedding ceremony moments",
          "focus": "center center"
        },
        {
          "src": "/work/wedding/wedding-03.jpeg",
          "alt": "Joyous outdoor black and white capture of bride and groom walking in garden",
          "focus": "center 30%"
        },
        {
          "src": "/work/wedding/wedding-04.jpeg",
          "alt": "Four-panel fine-art black and white wedding montage",
          "focus": "center center"
        },
        {
          "src": "/work/wedding/wedding-05.jpeg",
          "alt": "Black and white wide capture of bride and groom in garden promenade",
          "focus": "center 30%"
        },
        {
          "src": "/work/wedding/wedding-06.jpeg",
          "alt": "Black and white bridal preparation portrait looking into grand mirror",
          "focus": "center 25%"
        },
        {
          "src": "/work/wedding/wedding-07.jpeg",
          "alt": "Candid outdoor colour portrait of newlyweds embracing in natural garden setting",
          "focus": "center 30%"
        }
      ]
    },
    {
      "id": "008",
      "category": "008 / WILDLIFE",
      "title": "FAUNA",
      "description": "Raw and tender studies of equine majesty and intimate domestic tranquility.",
      "year": "2024",
      "label": "EQUINE",
      "cover": {
        "src": "/work/fauna/fauna-01.jpeg",
        "alt": "Intimate portrait of a white Marwari horse with gentle human hand resting on forehead",
        "focus": "center 20%"
      },
      "photos": [
        {
          "src": "/work/fauna/fauna-02.jpeg",
          "alt": "Side profile study of white horse in rustic pastoral enclosure",
          "focus": "center 25%"
        },
        {
          "src": "/work/fauna/fauna-03.jpeg",
          "alt": "Full length architectural equine study of white horse standing in rural stable",
          "focus": "center 30%"
        },
        {
          "src": "/work/fauna/fauna-04.jpeg",
          "alt": "Dramatic black and white close-up of a sleeping tabby cat",
          "focus": "center center"
        },
        {
          "src": "/work/fauna/fauna-05.jpeg",
          "alt": "Monochrome intimate macro study of tabby cat nestled peacefully",
          "focus": "center center"
        },
        {
          "src": "/work/fauna/fauna-06.jpeg",
          "alt": "Black and white fine art animal portrait of resting cat",
          "focus": "center center"
        },
        {
          "src": "/work/fauna/fauna-07.jpeg",
          "alt": "Long dramatic shadows of three camels and handlers stretching across golden desert sand dunes",
          "focus": "center center"
        },
        {
          "src": "/work/fauna/fauna-08.jpeg",
          "alt": "Low-angle silhouette of camel caravan with riders at twilight cresting a desert dune ridge",
          "focus": "center 30%"
        },
        {
          "src": "/work/fauna/fauna-09.jpeg",
          "alt": "High-contrast backlit silhouette of desert camel and handler under radiant sunburst breaking through clouds",
          "focus": "center 30%"
        }
      ],
      "gallery": [
        {
          "src": "/work/fauna/fauna-02.jpeg",
          "alt": "Side profile study of white horse in rustic pastoral enclosure",
          "focus": "center 25%"
        },
        {
          "src": "/work/fauna/fauna-03.jpeg",
          "alt": "Full length architectural equine study of white horse standing in rural stable",
          "focus": "center 30%"
        },
        {
          "src": "/work/fauna/fauna-04.jpeg",
          "alt": "Dramatic black and white close-up of a sleeping tabby cat",
          "focus": "center center"
        },
        {
          "src": "/work/fauna/fauna-05.jpeg",
          "alt": "Monochrome intimate macro study of tabby cat nestled peacefully",
          "focus": "center center"
        },
        {
          "src": "/work/fauna/fauna-06.jpeg",
          "alt": "Black and white fine art animal portrait of resting cat",
          "focus": "center center"
        },
        {
          "src": "/work/fauna/fauna-07.jpeg",
          "alt": "Long dramatic shadows of three camels and handlers stretching across golden desert sand dunes",
          "focus": "center center"
        },
        {
          "src": "/work/fauna/fauna-08.jpeg",
          "alt": "Low-angle silhouette of camel caravan with riders at twilight cresting a desert dune ridge",
          "focus": "center 30%"
        },
        {
          "src": "/work/fauna/fauna-09.jpeg",
          "alt": "High-contrast backlit silhouette of desert camel and handler under radiant sunburst breaking through clouds",
          "focus": "center 30%"
        }
      ]
    },
    {
      "id": "009",
      "category": "009 / COUTURE",
      "title": "EMERALD",
      "description": "Intimate interior editorial blending heritage brocades with quiet, poised elegance.",
      "year": "2024",
      "label": "ROYAL",
      "cover": {
        "src": "/work/emerald/emerald-01.jpeg",
        "alt": "Model in emerald green traditional lehenga and brocade blouse reclining at dining table",
        "focus": "center 25%"
      },
      "photos": [
        {
          "src": "/work/emerald/emerald-02.jpeg",
          "alt": "Model in emerald green traditional ensemble looking up toward sculpted rabbit wall art",
          "focus": "center 25%"
        }
      ],
      "gallery": [
        {
          "src": "/work/emerald/emerald-02.jpeg",
          "alt": "Model in emerald green traditional ensemble looking up toward sculpted rabbit wall art",
          "focus": "center 25%"
        }
      ]
    },
    {
      "id": "010",
      "category": "010 / PORTRAITURE",
      "title": "STUDIO",
      "description": "Structured studio contact sheets exploring subtle nuance and corporate character.",
      "year": "2024",
      "label": "PROFILE",
      "cover": {
        "src": "/work/studio/studio-01.jpeg",
        "alt": "Four-quadrant studio portrait study in tailored cream blazer against warm amber backdrop",
        "focus": "center center"
      },
      "photos": [
        {
          "src": "/work/studio/studio-02.jpeg",
          "alt": "Studio contact sheet capturing corporate portraits with warm directional lighting",
          "focus": "center center"
        }
      ],
      "gallery": [
        {
          "src": "/work/studio/studio-02.jpeg",
          "alt": "Studio contact sheet capturing corporate portraits with warm directional lighting",
          "focus": "center center"
        }
      ]
    },
    {
      "id": "011",
      "category": "011 / BOTANICAL",
      "title": "FLORA",
      "description": "Minimalist environmental study capturing surface tranquility and wildlife in motion.",
      "year": "2024",
      "label": "LOTUS",
      "cover": {
        "src": "/work/flora/flora-01.jpeg",
        "alt": "White aquatic bird taking flight above verdant water lily pads on still pond",
        "focus": "center center"
      },
      "photos": [
        {
          "src": "/work/flora/flora-02.jpeg",
          "alt": "Lush texture of water lily pads floating on dark reflective water surface",
          "focus": "center center"
        },
        {
          "src": "/work/flora/flora-03.jpeg",
          "alt": "Sunbeams radiating through dramatic clouds framed by lush tree foliage against blue sky",
          "focus": "center center"
        },
        {
          "src": "/work/flora/flora-04.jpeg",
          "alt": "Dense white cumulus cloud study illuminated against deep azure sky",
          "focus": "center center"
        },
        {
          "src": "/work/flora/flora-05.jpeg",
          "alt": "Rustic wooden park bench sheltered beneath a dense green tree canopy in a quiet botanical garden",
          "focus": "center center"
        }
      ],
      "gallery": [
        {
          "src": "/work/flora/flora-02.jpeg",
          "alt": "Lush texture of water lily pads floating on dark reflective water surface",
          "focus": "center center"
        },
        {
          "src": "/work/flora/flora-03.jpeg",
          "alt": "Sunbeams radiating through dramatic clouds framed by lush tree foliage against blue sky",
          "focus": "center center"
        },
        {
          "src": "/work/flora/flora-04.jpeg",
          "alt": "Dense white cumulus cloud study illuminated against deep azure sky",
          "focus": "center center"
        },
        {
          "src": "/work/flora/flora-05.jpeg",
          "alt": "Rustic wooden park bench sheltered beneath a dense green tree canopy in a quiet botanical garden",
          "focus": "center center"
        }
      ]
    },
    {
      "id": "012",
      "category": "012 / PRODUCTION",
      "title": "STAGE",
      "description": "Atmospheric stage design and live lighting direction capturing sonic energy and spectacle.",
      "year": "2024",
      "label": "PULSE",
      "cover": {
        "src": "/work/stage/stage-01.jpeg",
        "alt": "Grand palace-themed concert stage illuminated by red atmospheric lighting, lasers and crowd",
        "focus": "center 40%"
      },
      "photos": [],
      "gallery": []
    },
    {
      "id": "013",
      "category": "013 / ARCHITECTURE",
      "title": "HERITAGE",
      "description": "Antiquities, historic sandstone alleyways, and time-honored artisanal crafts across Rajasthan.",
      "year": "2024",
      "label": "LEGACY",
      "cover": {
        "src": "/work/heritage/heritage-01.jpeg",
        "alt": "Sunlit sandstone bazaar street inside Jaisalmer fort with leather goods and pedestrians",
        "focus": "center 40%"
      },
      "photos": [
        {
          "src": "/work/heritage/heritage-02.jpeg",
          "alt": "Ancient carved sandstone pavilion dome with perched pigeon framed by green foliage",
          "focus": "center center"
        },
        {
          "src": "/work/heritage/heritage-03.jpeg",
          "alt": "Monumental carved stone gateway arch with intricate relief sculptures and battlement parapets",
          "focus": "center center"
        },
        {
          "src": "/work/heritage/heritage-04.jpeg",
          "alt": "Weathered historic stone dome with green banner standing beneath summer clouds and blue sky",
          "focus": "center center"
        },
        {
          "src": "/work/heritage/heritage-05.jpeg",
          "alt": "Grand Indian temple interior with painted Radha Krishna ceiling medallion, gilded pillars and devotees",
          "focus": "center 30%"
        },
        {
          "src": "/work/heritage/heritage-06.jpeg",
          "alt": "Monochrome architectural study of Gothic Victorian brick facades and steep tiled gables",
          "focus": "center center"
        },
        {
          "src": "/work/heritage/heritage-07.jpeg",
          "alt": "Vibrant traditional block-printed and tie-dye skirts hanging against rustic sandstone wall",
          "focus": "center center"
        },
        {
          "src": "/work/heritage/heritage-08.jpeg",
          "alt": "Cobalt blue Rajasthani skirt with gold dancing figures displayed beside an antique carved wooden jharokha window",
          "focus": "center center"
        },
        {
          "src": "/work/heritage/heritage-09.jpeg",
          "alt": "Urban underpass avenue flanked by painted tree murals on terracotta walls with passing auto-rickshaws",
          "focus": "center center"
        },
        {
          "src": "/work/heritage/heritage-10.jpeg",
          "alt": "Solitary wooden rowboat resting peacefully along tranquil river bank under bright midday sun",
          "focus": "center center"
        },
        {
          "src": "/work/heritage/heritage-11.jpeg",
          "alt": "Handcrafted Kutch embroidered jackets with traditional mirror work and tribal motifs laid flat on textiles",
          "focus": "center center"
        }
      ],
      "gallery": [
        {
          "src": "/work/heritage/heritage-02.jpeg",
          "alt": "Ancient carved sandstone pavilion dome with perched pigeon framed by green foliage",
          "focus": "center center"
        },
        {
          "src": "/work/heritage/heritage-03.jpeg",
          "alt": "Monumental carved stone gateway arch with intricate relief sculptures and battlement parapets",
          "focus": "center center"
        },
        {
          "src": "/work/heritage/heritage-04.jpeg",
          "alt": "Weathered historic stone dome with green banner standing beneath summer clouds and blue sky",
          "focus": "center center"
        },
        {
          "src": "/work/heritage/heritage-05.jpeg",
          "alt": "Grand Indian temple interior with painted Radha Krishna ceiling medallion, gilded pillars and devotees",
          "focus": "center 30%"
        },
        {
          "src": "/work/heritage/heritage-06.jpeg",
          "alt": "Monochrome architectural study of Gothic Victorian brick facades and steep tiled gables",
          "focus": "center center"
        },
        {
          "src": "/work/heritage/heritage-07.jpeg",
          "alt": "Vibrant traditional block-printed and tie-dye skirts hanging against rustic sandstone wall",
          "focus": "center center"
        },
        {
          "src": "/work/heritage/heritage-08.jpeg",
          "alt": "Cobalt blue Rajasthani skirt with gold dancing figures displayed beside an antique carved wooden jharokha window",
          "focus": "center center"
        },
        {
          "src": "/work/heritage/heritage-09.jpeg",
          "alt": "Urban underpass avenue flanked by painted tree murals on terracotta walls with passing auto-rickshaws",
          "focus": "center center"
        },
        {
          "src": "/work/heritage/heritage-10.jpeg",
          "alt": "Solitary wooden rowboat resting peacefully along tranquil river bank under bright midday sun",
          "focus": "center center"
        },
        {
          "src": "/work/heritage/heritage-11.jpeg",
          "alt": "Handcrafted Kutch embroidered jackets with traditional mirror work and tribal motifs laid flat on textiles",
          "focus": "center center"
        }
      ]
    }
  ],
  "composition": {
    "title": "BEYOND THE FRAME",
    "description": "I believe that filmmaking is not simply about capturing beautiful images; it is about understanding emotions, creating meaningful connections and presenting stories in a way that resonates with people.",
    "images": [
      {
        "src": "/work/fauna/fauna-01.jpeg",
        "alt": "Intimate portrait of a white Marwari horse with gentle human hand resting on forehead",
        "focus": "center 20%"
      },
      {
        "src": "/work/flora/flora-01.jpeg",
        "alt": "White aquatic bird taking flight above verdant water lily pads on still pond",
        "focus": "center center"
      },
      {
        "src": "/work/nocturne/nocturne-09.jpeg",
        "alt": "Motorcycle rider in black leather jacket and helmet parked under night sky",
        "focus": "center 30%"
      }
    ]
  },
  "contact": {
    "cta": "LET'S — WORK",
    "email": "prathamparikh05@gmail.com",
    "location": "BASED IN INDIA",
    "socials": [
      {
        "name": "INSTAGRAM",
        "href": "https://www.instagram.com/pratham__parikh?fqnt=MXZqMWVxNGJodGpuaQ%3D%3D&utm_source=qr"
      },
      {
        "name": "EMAIL",
        "href": "mailto:prathamparikh05@gmail.com"
      },
      {
        "name": "BEHANCE",
        "href": ""
      }
    ]
  }
}
