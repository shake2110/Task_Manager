import { API_BASE_URL } from '@/shared/constants';
import { IServerResponse } from '@/types/common.types';
import {
  IAccountSetupRequest,
  IAccountSetupResponse,
  IProjectTemplate,
  ITaskEyeTemplate,
} from '@/types/project-templates/project-templates.types';
import apiClient from '../api-client';
import { ICustomProjectTemplateCreateRequest } from '@/types/project/projectTemplate.types';

const rootUrl = `${API_BASE_URL}/project-templates`;

export const projectTemplatesApiService = {
  getTaskEyeTemplates: async (): Promise<IServerResponse<ITaskEyeTemplate[]>> => {
    const response = await apiClient.get(`${rootUrl}/taskeye-templates`);
    return response.data;
  },

  getByTemplateId: async (templateId: string): Promise<IServerResponse<IProjectTemplate>> => {
    const response = await apiClient.get(`${rootUrl}/taskeye-templates/${templateId}`);
    return response.data;
  },

  getCustomTemplates: async (): Promise<IServerResponse<ITaskEyeTemplate[]>> => {
    const response = await apiClient.get(`${rootUrl}/custom-templates`);
    return response.data;
  },

  setupAccount: async (
    model: IAccountSetupRequest
  ): Promise<IServerResponse<IAccountSetupResponse>> => {
    const response = await apiClient.post(`${rootUrl}/setup`, model);
    return response.data;
  },

  createCustomTemplate: async (body: {
    template_id: string;
  }): Promise<IServerResponse<IProjectTemplate>> => {
    const response = await apiClient.post(`${rootUrl}/custom-template`, body);
    return response.data;
  },

  deleteCustomTemplate: async (id: string): Promise<IServerResponse<void>> => {
    const response = await apiClient.delete(`${rootUrl}/${id}`);
    return response.data;
  },

  createFromTaskEyeTemplate: async (body: {
    template_id: string;
  }): Promise<IServerResponse<IProjectTemplate>> => {
    const response = await apiClient.post(`${rootUrl}/import-template`, body);
    return response.data;
  },

  createFromCustomTemplate: async (body: {
    template_id: string;
  }): Promise<IServerResponse<IProjectTemplate>> => {
    const response = await apiClient.post(`${rootUrl}/import-custom-template`, body);
    return response.data;
  },
};
