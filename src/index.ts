import './styles.scss';
import { icon1 } from './fontawesone';

const API_KEY = 'dedb83e68e64484ba04011e773888fb9';
const root: HTMLDivElement | null = document.querySelector('.root');
const form: HTMLFormElement = document.createElement('form');
form.innerHTML = `<input class='paralellogramm input' type="text" required placeholder="Ваш номер...">
<button class='paralellogramm button' type='submit'> <p class='content'> ${icon1} Заказать</p>
</button>`;
if (root) {
  root.appendChild(form);
}

async function sendRequest(event: Event) {
  event.preventDefault();
  const input: HTMLInputElement | null = document.querySelector('.input');

  const invocation = new XMLHttpRequest();
  if (invocation) {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${input?.value}&apiKey=${API_KEY}`);
    const result = await response.ok;
    if (result) {
      alert('Ваш запрос успешно отправлен');
    } else alert('Ваш запрос не удалось отправить');
  }
}
form.addEventListener('submit', (event: Event) => sendRequest(event));
