import homeDir from 'os-homedir';
import fs from 'fs';
import ini from 'ini';
import path from 'path';
import _ from 'lodash';

export default function(){
    var user = '';
    var password = '';
    var myHomeDir = homeDir();
    var config = ini.parse(fs.readFileSync(
        path.join(myHomeDir, 'mercurial.ini'), 'utf-8'));
    if (config.hasOwnProperty('auth')){
        for(var property in config.auth){
            if (_.endsWith(property, 'username')){
                user = config.auth[property];
            }
            if (_.endsWith(property, 'password')){
                password = config.auth[property];
            }
        }
    }
    return {
        user: user,
        password: password
    };
}
