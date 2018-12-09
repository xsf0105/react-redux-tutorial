
/**
 * For .tsx
 */
export interface Props {
    homeData: any;
    actions: any;
    fetchList: Function
}

export interface State {
    welcomeText: string;
    num: Number;
}

/**
 * For reducer
 */
export interface HomeState {
    welcomeText: string;
    num: Number;
}


// export interface actionsRule {
//     loginPermission: any;
// }
