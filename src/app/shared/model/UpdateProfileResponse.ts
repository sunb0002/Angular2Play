

import * as models from './models';

/**
 * Standard API Response
 */
export interface UpdateProfileResponse {
    /**
     * Object containing information for success response
     */
    data?: models.UpdateProfileResult;

    /**
     * Array of error information for failure response
     */
    errors?: Array<models.UpdateProfileResponseError>;

    /**
     * Specific HTTP status code for API request
     */
    status: number;

}
