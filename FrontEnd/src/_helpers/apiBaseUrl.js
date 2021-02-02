export const BaseUrl = 'https://localhost:44321';

export function logOutUser() {
  localStorage.removeItem('key');
  localStorage.removeItem('type');
  localStorage.removeItem('Userid');
  localStorage.removeItem('Companyid');
  localStorage.removeItem('Email');
  window.location.reload(true);
}
