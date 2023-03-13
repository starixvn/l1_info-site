import { WithRouterProps } from "next/dist/client/with-router";

export type GameSettingProps = {
    id: number;
    gameName: string;
} & WithRouterProps;

interface ProxySetting {
    ssl: string;
    uri: string;
    path: string;
}

interface SentryOptions {
    dsn: string;
    environment: string;
}

interface Operator {
    id: string;
    secret: string;
}
export default interface AppSettings {
    proxy: ProxySetting;
    sentry: SentryOptions;
    gameSettings: { [id: string]: GameSettingProps };
    system: string;
    guideUrl: string;
    simulatorUrl: string;
    owApiUrl: string;
    operatorPFF: Operator;
    googleFormIdEn: string;
    googleFormIdVi: string;
}
