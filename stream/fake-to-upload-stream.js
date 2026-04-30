import { Readable } from "node:stream";

class OneToOneHundred extends Readable {
    index = 0;

    _read() {
        const i = this.index++;

        setTimeout(() => {
            if (this.index > 5) {
                this.push(null);
            } else {
                const buf = Buffer.from(String(i));
                this.push(buf);
            }
        }, 1000);
    }
}

fetch("http://localhost:3334", {
    method: "POST",
    body: new OneToOneHundred(),
    duplex: "half",
})
    .then(res => res.text())
    .then(data => {
        console.log(data)
    });