import { apiClient } from "./client";

export const fetchProjects = async () => (await apiClient.get("/projects")).data;
export const fetchProjectById = async (id) => (await apiClient.get(`/projects/${id}`)).data;
export const sendContact = async (payload) => (await apiClient.post("/contact", payload)).data;

export const createProject = async (payload, token) =>
  (await apiClient.post("/projects", payload, { headers: { "x-admin-token": token } })).data;

export const updateProject = async (id, payload, token) =>
  (await apiClient.put(`/projects/${id}`, payload, { headers: { "x-admin-token": token } })).data;

export const deleteProject = async (id, token) =>
  (await apiClient.delete(`/projects/${id}`, { headers: { "x-admin-token": token } })).data;
