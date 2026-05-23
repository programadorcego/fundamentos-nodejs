export function buildRoutePath(path) {
    const routeParamsRegex = /:([a-zA-Z_]+)/g;

    console.log(Array.from(path.matchAll(routeParamsRegex)));
}