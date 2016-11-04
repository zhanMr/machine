'use strict';

let ctypo = require('crypto');
//工具类
class Tool{
    encrypt(str, type){
        let hash = ctypo.createHash(type);
        hash.update(str.toString());
        return hash.digest('hex');
    }
}

module.exports = Tool;