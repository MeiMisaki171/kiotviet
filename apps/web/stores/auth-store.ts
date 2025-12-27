import { create } from "zustand";

interface AuthState {
  // User roles
  roles: string[];
  roleMap: Map<string, boolean>;

  // User permissions
  permissions: string[];
  permissionMap: Map<string, boolean>;

  // Loading state
  isLoading: boolean;

  // Actions
  setUserRoles: (roles: string[]) => void;
  setPermissions: (permissions: string[]) => void;
  setLoading: (loading: boolean) => void;
  hasRole: (role: string) => boolean;
  hasPermission: (permission: string) => boolean;
  hasPermissions: (permissions: string[]) => boolean;
  hasAnyPermission: (permissions: string[]) => boolean;
  reset: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  // Initial state
  roles: [],
  roleMap: new Map(),
  permissions: [],
  permissionMap: new Map(),
  isLoading: true,

  // Set user roles and build roleMap for O(1) lookup
  setUserRoles: (roles: string[]) => {
    const roleMap = new Map<string, boolean>();
    roles.forEach((role) => roleMap.set(role, true));
    set({ roles, roleMap });
  },

  // Set permissions and build permissionMap for O(1) lookup
  setPermissions: (permissions: string[]) => {
    const permissionMap = new Map<string, boolean>();
    permissions.forEach((permission) => permissionMap.set(permission, true));
    set({ permissions, permissionMap });
  },

  // Set loading state
  setLoading: (isLoading: boolean) => set({ isLoading }),

  // Check if user has a specific role
  hasRole: (role: string) => {
    return get().roleMap.has(role);
  },

  // Check if user has a specific permission
  hasPermission: (permission: string) => {
    return get().permissionMap.has(permission);
  },

  // Check if user has ALL specified permissions
  hasPermissions: (permissions: string[]) => {
    const { permissionMap } = get();
    return permissions.every((permission) => permissionMap.has(permission));
  },

  // Check if user has ANY of the specified permissions
  hasAnyPermission: (permissions: string[]) => {
    const { permissionMap } = get();
    return permissions.some((permission) => permissionMap.has(permission));
  },

  // Reset store
  reset: () => {
    set({
      roles: [],
      roleMap: new Map(),
      permissions: [],
      permissionMap: new Map(),
      isLoading: true,
    });
  },
}));

