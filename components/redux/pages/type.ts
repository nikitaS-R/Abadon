export interface State{
    pageId:number
}

export enum ActionType{
    setPageId = 'page.setPageId'
}

export interface setPageId{
    type:ActionType.setPageId,
    pageId:number
}

export type Action = setPageId