import * as projectsAPI from './projects-api';

export async function createProject(projectData) {
    return projectsAPI.createProject(projectData);
}

export async function userIndex() {
    return projectsAPI.userIndex();
}

export async function searchProjects(query) {
    return projectsAPI.searchProjects(query);
}

export async function getProject(id) {
    return projectsAPI.getProject(id);
}

export async function updateProject(id, projectData) {
    return projectsAPI.updateProject(id, projectData);
}

export async function deleteProject(id) {
    return projectsAPI.deleteProject(id);
}

export async function defaultIndex() {
    return projectsAPI.defaultIndex();
}