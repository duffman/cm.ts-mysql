/**
 * Copyright (c) Patrik Forsberg <patrik.forsberg@coldmind.com> - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * January 2020
 */
import { DynSQL } from './dynsql';

export class Dynsql_test {
	constructor() {
		console.log('Kalle');

		let dyn = new DynSQL();
		dyn.get('restaurants').where('elem', 'vad').where('id', 345);

		let sql = dyn.toSQL();
		console.log('SQL:', sql);
	}
}

let test = new Dynsql_test();
