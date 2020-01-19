/**
 * Copyright (c) Patrik Forsberg <patrik.forsberg@coldmind.com> - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

import { Connection }             from 'mysql';
import { IDbSettings }    from './db-kernel';

/**
 Wrapped MySQL Connection with auto connect
 **/

export interface IDbConnection {
	configure(settins: IDbSettings): void;
}

export class DbConnection implements IDbConnection {
	configure(settins: IDbSettings): void {
		throw new Error("Method not implemented.");
	}
}
