
const { os } = Deno.build;

export const Open = (url: string) => Deno
    .run({ cmd: [(os == 'mac'? 'open': os == 'win' ? 'start': 'xdg-open'), url]});
