import { Layout } from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <section id="about" className="py-20 flex flex-col justify-center min-h-[60vh]">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
          Hola, soy <span className="text-accent">Andrik Solís</span>
        </h1>
        <p className="text-text-secondary text-xl max-w-2xl leading-relaxed">
          Full-stack developer con más de 4 años de experiencia. Especializado en construir interfaces modernas y APIs robustas.
        </p>
      </section>
    </Layout>
  );
}

export default App;