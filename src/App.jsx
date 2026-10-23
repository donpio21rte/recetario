import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom'

const recipes = [
  {
    id: 'aguachile-verde-mazatlan',
    title: 'Aguachile Verde de Mazatlán',
    image:
      'https://elmomentochiapas.mx/wp-content/uploads/2025/08/Aguachile-de-Mazatlan-La-esencia-del-sabor-de-Sinaloa-3-1024x538.jpg',
    description: 'Un platillo fresco, cítrico y con ese toque picante típico del puerto.',
    ingredients: [
      '500 g de camarón fresco',
      '2 jitomates verdes',
      '1 taza de cilantro',
      '1/2 taza de pepino',
      '2 chiles serranos',
      '1/2 taza de agua fría',
      'Jugo de 2 limones',
      '1 cucharadita de sal',
      '1/4 de cebolla morada finamente picada',
      'Rodajas de aguacate para acompañar',
    ],
    steps: [
      'Lava y corta el camarón en trozos pequeños o deja los filetes enteros si prefieres un estilo clásico.',
      'Licua el cilantro, los chiles, el jugo de limón, el agua, la sal y el pepino hasta obtener una salsa verde muy fresca.',
      'Mezcla la salsa con el camarón y deja reposar 5 a 10 minutos para que se marine suavemente.',
      'Sirve con cebolla morada, aguacate y un toque más de limón. Puedes acompañarlo con tostadas o totopos.',
    ],
  },
  {
    id: 'torta-de-tamal',
    title: 'Torta de Tamal',
    image:
      'https://imgs.search.brave.com/OGSFeDAaDrPeagxTlgEMNgB02feq2zY3KI-LSvpHACA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWx1bml2ZXJzYWxw/dWVibGEuY29tLm14/L3Jlc2l6ZXIvdjIv/U1VUQlpEUk1ZWkZR/REQ3TFo1TUtFM1NL/VlEuanBnP2F1dGg9/MTQ4YTliYzdhMThk/OTZjNzZkYjVkYzJj/OWJmOTM0MmNiMWZm/Njg3ODAxMGM3YmMx/ZDY4OWM0NTBlZWMx/OWQ0MiZzbWFydD10/cnVlJmhlaWdodD02/NjY',
    description: 'Un clásico sabroso, reconfortante y perfecto para cualquier momento.',
    ingredients: [
      '2 tamales ya cocidos',
      '4 bolillos o pan de torta',
      '1/2 taza de crema',
      '1/2 taza de frijoles negros cocidos',
      '1 taza de salsa verde o roja',
      '1/2 cebolla morada finamente picada',
      '1 aguacate en rodajas',
      'Queso fresco al gusto',
      'Cilantrillo fresco',
    ],
    steps: [
      'Calienta los tamales al vapor o en el microondas para que queden suaves.',
      'Corta los bolillos y abre cada uno por la mitad sin separarlos del todo.',
      'Coloca el tamal encima de la base, agrega frijoles, salsa, crema y queso.',
      'Termina con aguacate, cebolla y cilantro; sirve de inmediato para disfrutarlo bien sabroso.',
    ],
  },
]

function HomePage() {
  return (
    <div className="page home-page">
      <header className="hero">
        <p className="eyebrow">Menú del día</p>
        <h1>Recetario</h1>
        <p className="subtitle">Dos opciones fáciles, sabrosas y perfectas para cocinar en casa.</p>
      </header>

      <section className="video-section" aria-label="Video destacado">
        <div className="video-player-card">
          <div className="video-player-header">
            <div className="video-player-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span className="video-player-label">Playlist destacada</span>
          </div>

          <iframe
            width="1511"
            height="561"
            src="https://www.youtube.com/embed/ppshpGQUNu4"
            title="Taca La Petaca - Chapulin Colorado"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      <section className="recipes-grid">
        {recipes.map((recipe) => (
          <Link to={`/receta/${recipe.id}`} key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <div className="recipe-card-content">
              <h2>{recipe.title}</h2>
              <p>{recipe.description}</p>
              <span>Ver receta</span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}

function RecipeDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const recipe = recipes.find((item) => item.id === id)

  if (!recipe) {
    return (
      <div className="page empty-page">
        <h2>Receta no encontrada</h2>
        <button onClick={() => navigate('/')} className="back-button">Volver al inicio</button>
      </div>
    )
  }

  return (
    <div className="page recipe-page">
      <button onClick={() => navigate('/')} className="back-button">← Regresar</button>

      <div className="recipe-header">
        <img src={recipe.image} alt={recipe.title} className="recipe-image" />
        <div>
          <p className="eyebrow">Receta</p>
          <h1>{recipe.title}</h1>
          <p className="recipe-description">{recipe.description}</p>
        </div>
      </div>

      <div className="recipe-content">
        <section>
          <h3>Ingredientes</h3>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3>Preparación</h3>
          <ol>
            {recipe.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <div className="background-layer background-layer--one" aria-hidden="true" />
      <div className="background-layer background-layer--two" aria-hidden="true" />
      <div className="background-floating-gif background-floating-gif--one" aria-hidden="true" />
      <div className="background-floating-gif background-floating-gif--two" aria-hidden="true" />
      <div className="background-floating-gif background-floating-gif--three" aria-hidden="true" />
      <div className="background-floating-gif background-floating-gif--four" aria-hidden="true" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/receta/:id" element={<RecipeDetail />} />
      </Routes>
    </>
  )
}
