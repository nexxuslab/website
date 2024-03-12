/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * Login
     * Login to the application
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static login(
        requestBody: {
            email: string;
            password: string;
        },
    ): CancelablePromise<{
        token: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                500: `Internal Server Error`,
            },
        });
    }

}
