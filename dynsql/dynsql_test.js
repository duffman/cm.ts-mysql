"use strict";
exports.__esModule = true;
/**
 * Copyright (c) Patrik Forsberg <patrik.forsberg@coldmind.com> - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * January 2020
 */
var dynsql_1 = require("./dynsql");
var Dynsql_test = /** @class */ (function () {
    function Dynsql_test() {
        console.log('Kalle');
        var dyn = new dynsql_1.DynSQL();
        dyn.get().from('cp').where('elem', 'vad').where('id', 345);
        var sql = dyn.toSQL();
        console.log('SQL:', sql);
    }
    return Dynsql_test;
}());
exports.Dynsql_test = Dynsql_test;
var test = new Dynsql_test();
