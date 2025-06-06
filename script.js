const members = [
  { name: 'Bang Chan', img: 'imagenes/2.bangchan.jpg', birth: '3 de octubre de 1997', mbti: 'ENFJ', role: 'Líder, productor, vocalista, rapero, bailarín', funFact: 'Entrenó por 7 años en JYP.', quote: '"Just enjoy the ride."', talent: 'Composición y beatmaking', activities: ['2021 - Chan’s Room (series semanal)', '2023 - Producciones con otros artistas de JYP'] },
  { name: 'Lee Know', img: 'imagenes/2.leeknow.jpg', birth: '25 de octubre de 1998', mbti: 'ISFP', role: 'Bailarín principal, vocalista', funFact: 'Fue bailarín de BTS.', quote: '"Sé tú mismo sin importar nada."', talent: 'Coreografías rápidas', activities: ['2022 - MC en Show! Music Core', '2023 - VLive de cocina “Lee Know’s Kitchen”'] },
  { name: 'Changbin', img: 'imagenes/2.changbin.jpg', birth: '11 de agosto de 1999', mbti: 'ESFP', role: 'Rapero principal, productor', funFact: 'Rapea extremadamente rápido.', quote: '"Sé tu mejor versión."', talent: 'Beatboxing', activities: ['2022 - 3RACHA en Kingdom', '2024 - Mixtape en solitario'] },
  { name: 'Hyunjin', img: 'imagenes/2.hyunjin.jpg', birth: '20 de marzo de 2000', mbti: 'INFP', role: 'Bailarín principal, rapero, visual', funFact: 'Ama pintar al óleo.', quote: '"Vive cada emoción profundamente."', talent: 'Dibujo y baile contemporáneo', activities: ['2023 - Exposición de arte personal', '2024 - Colaboración de baile con choreógrafos famosos'] },
  { name: 'Han', img: 'imagenes/2.han.jpg', birth: '14 de septiembre de 2000', mbti: 'ISTP', role: 'Rapero, vocalista, compositor', funFact: 'Le encanta imitar voces.', quote: '"La comedia es mi vida."', talent: 'Freestyle vocal', activities: ['2021 - Two Kids Room: Han Edition', '2023 - Canciones solistas en SKZ-RECORD'] },
  { name: 'Felix', img: 'imagenes/2.felix.jpg', birth: '15 de septiembre de 2000', mbti: 'ENFP', role: 'Bailarín, rapero, vocalista', funFact: 'Su voz grave es viral.', quote: '"You are enough."', talent: 'Cocinar brownies', activities: ['2022 - Emisario de UNICEF Korea', '2023 - Modelaje para Louis Vuitton'] },
  { name: 'Seungmin', img: 'imagenes/2.seungmin.jpg', birth: '22 de septiembre de 2000', mbti: 'ESFJ', role: 'Vocalista principal', funFact: 'Ama el béisbol.', quote: '"Haz lo mejor incluso si no lo ves."', talent: 'Voz estable en vivo', activities: ['2022 - DJ en “SKZ’s Kiss the Radio”', '2023 - Covers solistas virales'] },
  { name: 'I.N', img: 'imagenes/2.in.jpg', birth: '8 de febrero de 2001', mbti: 'ISFJ', role: 'Vocalista, maknae', funFact: 'Antes usaba brackets.', quote: '"Gracias por quedarte conmigo."', talent: 'Sonrisa encantadora', activities: ['2021 - “I.N’s Vlogs”', '2023 - Participación en OST de drama'] }
];

let currentIndex = 0;
const additionalImages = ['imagenes/3.bangchan.jpg', 'imagenes/3.changbin.jpg', 'imagenes/3.felix.jpg', 'imagenes/3.han.jpg', 'imagenes/3.hyunjin.jpg', 'imagenes/3.in.jpg', 'imagenes/3.leeknow.jpg', 'imagenes/3.seungmin.jpg', 'imagenes/logo.jpg', 'imagenes/portada.jpg', 'imagenes/rosa.jpg', 'imagenes/verde.jpg'];

function renderMember(index) {
  const m = members[index];
  const card = document.getElementById('member-card');
  const img = new Image();
  img.src = m.img;
  img.alt = m.name;
  img.onload = () => {
    card.innerHTML = `
      <img src="${m.img}" alt="${m.name}" style="width: 250px; height: auto; object-fit: cover;" />
      <h3 class="stamp">${m.name}</h3>
      <p><strong>Fecha de nacimiento:</strong> ${m.birth}</p>
      <p><strong>MBTI:</strong> ${m.mbti}</p>
      <p><strong>Rol:</strong> ${m.role}</p>
      <p><strong>Dato curioso:</strong> ${m.funFact}</p>
      <p><strong>Frase célebre:</strong> <em>${m.quote}</em></p>
      <p><strong>Talento oculto:</strong> ${m.talent}</p>
      <p><strong>Actividades individuales:</strong></p>
      <ul>
        ${m.activities.map(a => `<li>${a}</li>`).join('')}
      </ul>
    `;
  };
  img.onerror = () => {
    card.innerHTML = `<p>Error loading image for ${m.name}</p><h3 class="stamp">${m.name}</h3><p><strong>Fecha de nacimiento:</strong> ${m.birth}</p><p><strong>MBTI:</strong> ${m.mbti}</p><p><strong>Rol:</strong> ${m.role}</p><p><strong>Dato curioso:</strong> ${m.funFact}</p><p><strong>Frase célebre:</strong> <em>${m.quote}</em></p><p><strong>Talento oculto:</strong> ${m.talent}</p><p><strong>Actividades individuales:</strong></p><ul>${m.activities.map(a => `<li>${a}</li>`).join('')}</ul>`;
  };
}

function nextMember() {
  currentIndex = (currentIndex + 1) % members.length;
  renderMember(currentIndex);
}

function prevMember() {
  currentIndex = (currentIndex - 1 + members.length) % members.length;
  renderMember(currentIndex);
}

function loadDynamicImages() {
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    if (index > 0 && additionalImages.length > 0) {
      const img = new Image();
      img.src = additionalImages.shift();
      img.alt = `Dynamic Image ${index}`;
      img.style.width = '300px';
      img.style.height = 'auto';
      img.style.margin = '1rem auto';
      img.style.display = 'block';
      section.appendChild(img);
    }
  });
}

window.onload = () => {
  renderMember(currentIndex);
  loadDynamicImages();
};