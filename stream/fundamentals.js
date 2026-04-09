import { Readable, Transform, Writable } from "node:stream";

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

class MultiplyByTenStream extends Writable {
    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString()) * 10);
        callback();
    }
}

/*
 * Transform é uma stream usada para modificar dados enquanto eles estão sendo lidos e escritos
*/
class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) * -1;
        callback(null, Buffer.from(String(transformed)));
    }
}

new OneToOneHundred()
    .pipe(new InverseNumberStream())
    .pipe(new MultiplyByTenStream());