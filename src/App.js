import Food from './components/Food';
import foods from './models/foods';

function App() {
  return (
    <>
      <h1>Menu</h1>
      <button
        type="button"
        className="btn btn-secondary rounded-circle mr-4 font-weight-bold"
        onClick={() => { }}
      >
        +
      </button>
      <section className="card-deck my-3">
        {foods.map((food) => (
          <Food food={food} key={food.id} />
        ))}
      </section>
    </>
  );
}

export default App;
