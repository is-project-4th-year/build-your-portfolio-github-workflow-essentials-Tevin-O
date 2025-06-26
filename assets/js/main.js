// Filter team members
const filterInput = document.getElementById('team-filter');
const members = document.querySelectorAll('.team-member');

if (filterInput) {
  filterInput.addEventListener('input', () => {
    const keyword = filterInput.value.toLowerCase();

    members.forEach(member => {
      const name = member.querySelector('h3').textContent.toLowerCase();
      const role = member.querySelector('p').textContent.toLowerCase();
      const match = name.includes(keyword) || role.includes(keyword);

      member.style.display = match ? 'block' : 'none';
    });
  });
}
