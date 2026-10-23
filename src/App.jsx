import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom'

const recipes = [
  {
    id: 'pasta-al-pesto',
    title: 'Pasta al Pesto',
    image:
      'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=900&q=80',
    description: 'Un plato fresco, rápido y lleno de sabor.',
    ingredients: [
      '250 g de pasta',
      '2 tazas de albahaca',
      '2 dientes de ajo',
      '1/4 taza de nueces',
      '1/2 taza de queso parmesano',
      'Aceite de oliva',
      'Sal y pimienta',
    ],
    steps: [
      'Cocina la pasta en agua con sal hasta que esté al dente.',
      'Licua la albahaca, el ajo, las nueces, el queso y un chorrito de aceite hasta obtener un pesto suave.',
      'Mezcla la pasta con el pesto y agrega un poco del agua de cocción si está muy espeso.',
      'Sirve con más queso y un toque de pimienta negra.',
    ],
  },
  {
    id: 'salmon-asado',
    title: 'Salmón Asado',
    image:
      'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80',
    description: 'Una comida elegante, jugosa y fácil de preparar.',
    ingredients: [
      '2 filetes de salmón',
      '1 cucharada de mantequilla',
      '1 limón',
      '2 cucharadas de perejil picado',
      'Sal y pimienta',
      '1 cucharadita de ajo en polvo',
    ],
    steps: [
      'Precalienta el horno a 200°C y coloca el salmón en una bandeja.',
      'Sazona con sal, pimienta, ajo en polvo y un toque de limón.',
      'Agrega la mantequilla sobre cada filete y hornea por 15 a 18 minutos.',
      'Sirve con perejil y rodajas de limón frescas.',
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
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/receta/:id" element={<RecipeDetail />} />
    </Routes>
  )
}
