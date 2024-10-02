declare module "*.svg" {
    import * as React from "react";
    export const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement>
    >;
    const src: string;
    export default src;
}

declare module "*.png" {
    const value: any;
    export = value;
}

declare module "*.ttf" {
    const src: string;
    export default src;
}

// declarations.d.ts
declare module "moment-duration-format" {
    import { Duration } from "moment";

    interface Duration {
        format(format: string, options?: any): string;
    }
}
