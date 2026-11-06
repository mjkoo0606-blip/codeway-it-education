const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
  menuToggle.textContent = isOpen ? '×' : '☰';
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', '메뉴 열기');
    menuToggle.textContent = '☰';
  });
});

const consultForm = document.getElementById('consultForm');
const formMessage = document.getElementById('formMessage');

consultForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const course = document.getElementById('course').value;

  if (!name || !course) {
    formMessage.textContent = '이름과 관심 교육과정을 입력해 주세요.';
    return;
  }

  formMessage.textContent = `${name}님, ${course} 상담 신청이 확인되었습니다. (데모 화면)`;
  consultForm.reset();
});
