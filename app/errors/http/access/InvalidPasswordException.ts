import { FractalResponseCodes } from '@chat/constants/FractalResponseCodes';
import { HttpBaseException } from '@chat/errors/http/HttpBaseException';
import { IResponseError } from '@tsed/common';

export class InvalidPasswordException extends HttpBaseException
	implements IResponseError {
	public name: string = 'UNAUTHORIZED';

	constructor(origin?: Error | string | any) {
		super(
			401,
			FractalResponseCodes.INVALID_PASSWORD,
			'Invalid Password',
			origin
		);
	}
}
