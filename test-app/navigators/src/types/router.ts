
export type PushPathOption = {
    title?: string;
}
export type NavigatePushProps = (path: string, option?: PushPathOption) => Promise<void>

export type RouterProps = {
    path: string | null;
    basePath: string,
    hash: string | null;
    title: string | null,
    protocol: string | null;
    asPath: string,
    origin: string | null;
    username: string | null;
    password: string | null;
    hostname: string | null;
    port: string | null;
    query: {
        [key: string]: any
    };
    push: NavigatePushProps;
    history: {
        back: () => void,
        get: () => string[]
    }
}