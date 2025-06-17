

export function setToken(accessToken:any) {
  localStorage.setItem("access_token", accessToken);
}

export function getToken() {
  return localStorage.getItem("access_token");
}

export function getRefreshToken() {
  return localStorage.getItem("refresh_token");
}

export function setRefreshToken(refreshToken:any) {
  localStorage.setItem("refresh_token", refreshToken);
}