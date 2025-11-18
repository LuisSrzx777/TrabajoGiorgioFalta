## pages/index.js


return (
<main style={{fontFamily: 'Inter, system-ui, sans-serif', padding: 24}}>
<h1>Hollow Knight — Página de demostración</h1>
<p>Una página simple desplegada en Vercel conectada a GitHub. El frontend consulta un endpoint del backend para obtener una cita.</p>


<section style={{marginTop: 24}}>
<h2>Cita desde el backend</h2>
{loading && <p>Cargando...</p>}
{error && <p style={{color: 'crimson'}}>Error: {error}</p>}
{quote && (
<blockquote style={{borderLeft: '4px solid #222', paddingLeft: 12}}>
<p style={{margin: 0}}>{quote.text}</p>
<small>— {quote.author}</small>
</blockquote>
)}
</section>


<section style={{marginTop: 24}}>
<h2>Explicación rápida</h2>
<ol>
<li>El frontend (esta página) hace <code>fetch('/api/quote')</code>.</li>
<li>Vercel sirve la ruta API <code>pages/api/quote.js</code> como backend serverless function.</li>
<li>La API responde JSON — el frontend lo muestra en la UI.</li>
</ol>
</section>


<footer style={{marginTop: 32, opacity: 0.8}}>
<small>Proyecto demo — temática Hollow Knight.</small>
</footer>
</main>
);
}
```
