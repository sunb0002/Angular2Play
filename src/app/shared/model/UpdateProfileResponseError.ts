

import * as models from './models';

/**
 * Error object definition. It will be used in an error response
 */
export interface UpdateProfileResponseError {
    /**
     * Backend error code
     */
    code: string;

    /**
     * Object containing detailed information for the error
     */
    source?: models.AbstractResponseErrorSource;

    /**
     * Error message that should be displayed on the front-end
     */
    title: string;

}
