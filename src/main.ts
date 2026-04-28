import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
// import './bases/const-let.ts'
// import './bases/template-strings.ts'
// import './bases/object-literal';
// import './bases/arrays';
// import './bases/functions';
// import './bases/obj-destructuring';
// import './bases/array-destructuring';
// import './bases/imp-exp';
// import './bases/promises';
// import './bases/fetch-api';
// import './bases/async-await';
// import './Ejercicios/ejercicio1.ts';
// import './Ejercicios/ejercicio2.ts';
// import './Ejercicios/ejercicio3.ts'; 
// import './Ejercicios/ejercicio4.ts';
import './Ejercicios/ejercicio5.ts';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
