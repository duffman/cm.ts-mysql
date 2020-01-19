"use strict";
/**
 * Copyright (c) Patrik Forsberg <patrik.forsberg@coldmind.com> - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
exports.__esModule = true;
var DbVarUtils = /** @class */ (function () {
    function DbVarUtils() {
    }
    DbVarUtils.isDefined = function (value) {
        return value === null || value === undefined;
    };
    return DbVarUtils;
}());
exports.DbVarUtils = DbVarUtils;
