/**
 * 注册组件
 * iZaiZaiA     2022-08-18 21:30
 **/

import version from './version'

function setupInstall(components) {
    function install(app) {
        //注册组件
        Object.keys(components).forEach(key => {
            if (!app.component(key)) {
                app.component(key, components[key])
            }
        })
    }
    return {version, install}
}

export default setupInstall
