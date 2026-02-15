// Simple client-side router using history API
type RouteChangeListener = (path: string) => void;

class Router {
  private listeners: Set<RouteChangeListener> = new Set();

  constructor() {
    // Listen for browser back/forward
    window.addEventListener('popstate', () => {
      this.notifyListeners();
    });
  }

  navigate(path: string) {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      this.notifyListeners();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  getCurrentPath(): string {
    return window.location.pathname;
  }

  subscribe(listener: RouteChangeListener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notifyListeners() {
    const path = this.getCurrentPath();
    this.listeners.forEach(listener => listener(path));
  }
}

export const router = new Router();

export function useRouter() {
  return router;
}
