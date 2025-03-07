
// Simple auth utility (to be replaced with proper auth in the future)

export const isAuthenticated = (): boolean => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

export const requireAuth = (navigate: (path: string) => void): boolean => {
  if (!isAuthenticated()) {
    navigate('/auth');
    return false;
  }
  return true;
};

export const redirectIfAuthenticated = (navigate: (path: string) => void): boolean => {
  if (isAuthenticated()) {
    navigate('/');
    return true;
  }
  return false;
};
