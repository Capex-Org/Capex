import "./App.css";

function App() {
  return (
    <div className="min-h-screen grid place-items-center bg-neutral-100">
      <div className="rounded-2xl p-8 bg-white shadow">
        <h1 className="font-heading text-3xl text-primary-600">CAPEX Theme</h1>
        <p className="mt-2 text-neutral-700">
          Neutral text on white with a primary heading.
        </p>

        <div className="mt-6 grid grid-cols-4 gap-3">
          <div className="h-10 rounded bg-primary-600" />
          <div className="h-10 rounded bg-primary-300" />
          <div className="h-10 rounded bg-primary-100" />
          <div className="h-10 rounded bg-neutral-900" />
          <div className="h-10 rounded bg-neutral-700" />
          <div className="h-10 rounded bg-neutral-500" />
          <div className="h-10 rounded bg-neutral-300" />
          <div className="h-10 rounded bg-neutral-100" />
        </div>

        <button className="mt-6 rounded-xl bg-primary-600 px-5 py-2 text-white hover:bg-primary-300 transition">
          Primary Button
        </button>
      </div>
    </div>
  );
}

export default App;
