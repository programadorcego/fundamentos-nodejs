import { Readable } from "node:stream";

class OneToOneHundred extends Readable {
    index = 0;

    _read() {
        const i = this.index++;

        setTimeout(() => {
            if (this.index > 100) {
                this.push(null);
            } else {
                const buf = Buffer.from(String(i));
                this.push(buf);
            }
        }, 1000);
    }
}

new OneToOneHundred().pipe(process.stdout)