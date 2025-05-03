export interface Request<
    P = Record<string, unknown>,
    Q = Record<string, unknown>,
    B = Record<string, unknown>,
> {
    path: P;
    query: Q;
    body: B;
}
