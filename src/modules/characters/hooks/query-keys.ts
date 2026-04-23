export const characterKeys = {
  all: ["characters"] as const,

  lists: () => [...characterKeys.all, "list"] as const,

  list: (filters?: string) =>
    [...characterKeys.lists(), { filters }] as const,

  details: () => [...characterKeys.all, "detail"] as const,

  detail: (id: number) =>
    [...characterKeys.details(), id] as const,
};