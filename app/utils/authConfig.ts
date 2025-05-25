

export function setToken(accessToken:any) {
  localStorage.setItem("accessToken", accessToken);
}

export function getToken() {
  return localStorage.getItem("accessToken");
}

export function getRefreshToken() {
  return localStorage.getItem("refreshToken");
}

export function setRefreshToken(refreshToken:any) {
  localStorage.setItem("refreshToken", refreshToken);
}