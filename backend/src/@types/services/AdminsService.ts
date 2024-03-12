/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAdminRequest } from '../models/CreateAdminRequest';
import type { CreateAdminResponse } from '../models/CreateAdminResponse';
import type { GetProfileResponse } from '../models/GetProfileResponse';
import type { UpdateProfileRequest } from '../models/UpdateProfileRequest';
import type { UpdateProfileResponse } from '../models/UpdateProfileResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AdminsService {

    /**
     * Get profile
     * Get profile regardless of role
     * @returns GetProfileResponse OK
     * @throws ApiError
     */
    public static getProfile(): CancelablePromise<GetProfileResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/profile',
            errors: {
                401: `Unauthorized`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Delete profile
     * Delete the profile of a admin
     * @returns void
     * @throws ApiError
     */
    public static deleteProfile(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/profile',
            errors: {
                401: `Unauthorized`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Update profile
     * Update the profile of a admin
     * @param requestBody
     * @returns UpdateProfileResponse OK
     * @throws ApiError
     */
    public static updateProfile(
        requestBody: UpdateProfileRequest,
    ): CancelablePromise<UpdateProfileResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v1/profile',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * Create admin
     * Create a new admin
     * @param requestBody
     * @returns CreateAdminResponse Created
     * @throws ApiError
     */
    public static createAdmin(
        requestBody: CreateAdminRequest,
    ): CancelablePromise<CreateAdminResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/profile',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                500: `Internal Server Error`,
            },
        });
    }

}
