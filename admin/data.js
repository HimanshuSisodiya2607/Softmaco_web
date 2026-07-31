/* Admin panel data & logic (shared across pages) */
const LS_TEAM = 'softmaco_team_members';
const LS_LEADS = 'softmaco_leads';

function todayISO() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

function fmtLocalDate(d) {
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

function parseLocalDate(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function addDays(dateStr, days) {
  const d = parseLocalDate(dateStr);
  d.setDate(d.getDate() + days);
  return fmtLocalDate(d);
}

function getTeam() {
  return JSON.parse(localStorage.getItem(LS_TEAM) || '[]');
}

function saveTeam(list) {
  localStorage.setItem(LS_TEAM, JSON.stringify(list));
}

function getLeads() {
  return JSON.parse(localStorage.getItem(LS_LEADS) || '[]');
}

function saveLeads(list) {
  localStorage.setItem(LS_LEADS, JSON.stringify(list));
}

function allTeamMembers() {
  const staticTeam = (typeof SOFTMACO_DATA !== 'undefined' && SOFTMACO_DATA.team) ? SOFTMACO_DATA.team.map(m => ({
    id: m.id, name: m.name, role: m.role, city: m.city || '', photo: m.photo, isStatic: true
  })) : [];
  return [...staticTeam, ...getTeam()];
}

function findAssigneeForCity(city) {
  const members = allTeamMembers();
  const norm = c => (c || '').trim().toLowerCase();
  const match = members.filter(m => (m.city || '').split(',').some(c => norm(c) === norm(city)));
  if (!match.length) return null;
  window._cityRR = window._cityRR || {};
  const key = norm(city);
  window._cityRR[key] = (window._cityRR[key] || 0) + 1;
  return match[(window._cityRR[key] - 1) % match.length];
}

function getCities() {
  return JSON.parse(localStorage.getItem('softmaco_cities') || '[]');
}

function saveCities(list) {
  localStorage.setItem('softmaco_cities', JSON.stringify(list));
}

function checkAdminAuth() {
  if (sessionStorage.getItem('softmaco_admin') !== '1') {
    window.location.href = '/admin/index.html';
    return false;
  }
  return true;
}
