
const { os } = Deno.build;
export const Open = (url: string) => Deno
    .run({ cmd: [(os === 'darwin' ? 'open' : (os === 'windows' ? 'start': 'xdg-open')), url]});
