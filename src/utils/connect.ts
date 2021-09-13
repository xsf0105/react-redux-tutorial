/*
 * @Author: wangfeng
 * @Date: 2021-01-19 17:58:59
 * @LastAuthor: wangfeng
 * @lastTime: 2021-01-20 18:24:51
 * @FilePath: /yit-h5/Users/wangfeng/work/reactnew-demo/src/utils/connect.ts
 * @Description: connect管理装饰器
 */
import { connect as connectComponent } from 'react-redux'
import { AnyAction, bindActionCreators, Dispatch } from 'redux'
import actionsAll from '@actions/index'

const routeMap: any = {}

function isString(value: any) {
    return typeof value === 'string' || value instanceof String
}

function isArray(value: any) {
    return Array.isArray ? Array.isArray(value) : Object.prototype.toString.call(value) === '[object array]'
}

function mapStateToProps(state: { [x: string]: any }, props: { route: { path: any } }) {
    const pathname: string = props.route && props.route.path
    const routeConf = routeMap[pathname] || '/'
    const stateNames: any = (routeConf && routeConf.stateNames) || null
    if (isString(stateNames)) {
        return {
            [stateNames]: state[stateNames],
        }
    }
    if (isArray(stateNames)) {
        const newState: any = {}
        stateNames.forEach((stateName: string) => {
            newState[stateName] = state[stateName]
        })
        return newState
    }
    return state
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>, props: { route: { path: any } }) {
    const pathname = props.route && props.route.path
    const routeConf = routeMap[pathname] || '/'
    const actionNames: any = (routeConf && routeConf.actionNames) || null
    let newActions: any = {}
    const actionsImport: any = actionsAll
    if (isString(actionNames)) {
        newActions[actionNames] = actionsImport[actionNames]
    } else if (isArray(actionNames)) {
        actionNames.forEach((actionName: string | number) => {
            newActions[actionName] = actionsImport[actionName]
        })
    } else {
        newActions = actionsAll
    }

    return {
        actions: bindActionCreators(newActions, dispatch),
    }
}

/**
 * connect decorator 处理函数
 *
 * @param {string} pathname
 * @param {string | string[]} pageStates
 * @param {string | string[]} pageActions
 * @returns {Function}
 */
function rconnect(pathname: string, pageStates: string | string[], pageActions: string | string[]) {
    if (!routeMap[pathname]) {
        routeMap[pathname] = {
            stateNames: pageStates,
            actionNames: pageActions,
        }
    }

    return (target: any) => connectComponent(mapStateToProps, mapDispatchToProps)(target) as any
}

export default rconnect
