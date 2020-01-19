"use strict";
/**
 * COLDMIND LTD ("COMPANY") CONFIDENTIAL
 * Unpublished Copyright (c) 2015-2017 COLDMIND LTD, All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property of COMPANY. The intellectual and technical concepts contained
 * herein are proprietary to COMPANY and may be covered by U.S. and Foreign Patents, patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material is strictly forbidden unless prior written permission is obtained
 * from COMPANY.  Access to the source code contained herein is hereby forbidden to anyone except current COMPANY employees, managers or contractors who have executed
 * Confidentiality and Non-disclosure agreements explicitly covering such access.
 *
 * The copyright notice above does not evidence any actual or intended publication or disclosure  of  this source code, which includes
 * information that is confidential and/or proprietary, and is a trade secret, of  COMPANY.   ANY REPRODUCTION, MODIFICATION, DISTRIBUTION, PUBLIC  PERFORMANCE,
 * OR PUBLIC DISPLAY OF OR THROUGH USE  OF THIS  SOURCE CODE  WITHOUT  THE EXPRESS WRITTEN CONSENT OF COMPANY IS STRICTLY PROHIBITED, AND IN VIOLATION OF APPLICABLE
 * LAWS AND INTERNATIONAL TREATIES.  THE RECEIPT OR POSSESSION OF  THIS SOURCE CODE AND/OR RELATED INFORMATION DOES NOT CONVEY OR IMPLY ANY RIGHTS
 * TO REPRODUCE, DISCLOSE OR DISTRIBUTE ITS CONTENTS, OR TO MANUFACTURE, USE, OR SELL ANYTHING THAT IT  MAY DESCRIBE, IN WHOLE OR IN PART.
 *
 * Created by Patrik Forsberg on 2017
 */
exports.__esModule = true;
var sql_data_column_1 = require("./sql-data-column");
var data_point_1 = require("./data-point");
var var_utils_1 = require("./data/var-utils");
var SQLTableDataRow = /** @class */ (function () {
    function SQLTableDataRow(obj) {
        this.isEmpty = false;
        this.columns = new Array();
        if (!var_utils_1.DbVarUtils.isDefined(obj)) {
            this.parseData(obj);
        }
    }
    SQLTableDataRow.prototype.parseData = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                this.columns.push(new sql_data_column_1.SQLDataColumn(key, obj[key]));
            }
        }
    };
    /**
     * Added in order to simplify testing
     * @param key
     * @param value
     */
    SQLTableDataRow.prototype.addColumn = function (key, value) {
        this.columns.push(new sql_data_column_1.SQLDataColumn(key, value));
    };
    SQLTableDataRow.prototype.getColumn = function (key) {
        for (var i = 0; i < this.columns.length; i++) {
            var column = this.columns[i];
            if (column.name == key) {
                return column;
            }
        }
        return null;
    };
    SQLTableDataRow.prototype.count = function () {
        return this.columns.length;
    };
    SQLTableDataRow.prototype.emptyValue = function (key) {
        var column = this.getColumn(key);
        if (column != null)
            column.value = null;
    };
    SQLTableDataRow.prototype.getValAsStr = function (key) {
        var column = this.getColumn(key);
        return column != null ? column.value : null;
    };
    SQLTableDataRow.prototype.getValAsCVPoint = function (key) {
        var column = this.getColumn(key);
        var res = column != null ? column.value : null;
        return new data_point_1.DataPoint(0, 0);
    };
    SQLTableDataRow.prototype.getValAsNum = function (key) {
        var value = this.getValAsStr(key);
        if (value != null) {
            return parseInt(value);
            //return Number(value);
        }
        return -1;
    };
    /**
     * Makes an optimistic attempt to parse a JS date from given string
     * @param {string} key
     * @returns {Date}
     *
    public getValAsDate(key: string): Date {
        return res;
    }
    */
    SQLTableDataRow.prototype.getValAsInt = function (key) {
        return this.getValAsNum(key);
    };
    SQLTableDataRow.prototype.toJson = function () {
        var data = this.columns != null ? this.columns : "NULL";
        return JSON.stringify(data);
    };
    return SQLTableDataRow;
}());
exports.SQLTableDataRow = SQLTableDataRow;
