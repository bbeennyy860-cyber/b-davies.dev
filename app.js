const query = new URLSearchParams(location.search);
const theme = query.get('theme') || localStorage.getItem('portfolio-theme') || 'light';
document.body.classList.toggle('dark', theme === 'dark');
const toggle = document.querySelector('.theme-toggle');
function updateThemeLabel(){ toggle.textContent = document.body.classList.contains('dark') ? 'Paper edition ◑' : 'After dark ◐'; }
updateThemeLabel();
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('portfolio-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  updateThemeLabel();
});
const frame = document.getElementById('live-frame');
if(frame){
  const snapshot = document.getElementById('snapshot');
  const status = document.getElementById('demo-status');
  const label = document.getElementById('snapshot-label');
  const zoom = document.getElementById('snapshot-zoom');
  document.getElementById('launch').addEventListener('click', () => {
    if(!frame.getAttribute('src')) frame.src = frame.dataset.src;
    frame.style.display = 'block'; snapshot.style.display = 'none';
    label.style.display = 'none'; zoom.style.display = 'none';
    status.textContent = 'LOCAL SIMULATION';
    document.getElementById('launch').textContent = '↗ Focus simulation';
    frame.focus();
  });
  document.getElementById('restore').addEventListener('click', () => {
    frame.removeAttribute('src'); frame.style.display = 'none';
    snapshot.style.display = 'block'; label.style.display = 'block'; zoom.style.display = 'flex';
    status.textContent = 'ARCHIVED SNAPSHOT';
    document.getElementById('launch').textContent = '▷ Launch real demo';
  });
  const guides = {
    observe: 'Launch the demo, then use Space to pause and + / − to change speed.',
    species: 'In the running demo, press Tab for the species encyclopedia or T for the lineage tree.',
    disturb: 'In the running demo, press D for drought or I for an ice age. These change the local simulation only.'
  };
  document.querySelectorAll('[data-guide]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-guide]').forEach(item => item.classList.remove('chosen'));
    button.classList.add('chosen');
    document.getElementById('guide-text').textContent = guides[button.dataset.guide];
  }));
  let scale = 1;
  document.querySelectorAll('[data-zoom]').forEach(button => button.addEventListener('click', () => {
    scale = Math.min(2, Math.max(1, scale + (button.dataset.zoom === '+' ? .15 : -.15)));
    snapshot.style.transform = `scale(${scale})`;
  }));
}
