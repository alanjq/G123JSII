let t = { x: 1, y: 2 }
let p = new Proxy(t, {})
// Creamos un objeto llamado P a partir de una copia de T
p.x // ?
delete p.y
t //?
t.y // ?
p.y // ?
