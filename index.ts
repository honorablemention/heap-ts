import Heap from './heap';

const h: Heap = new Heap();
h.insert(8);
h.show();

h.insert(12);
h.show();

h.insert(4);
h.show();

h.insert(11);
h.show();

h.insert(3);
h.show();

h.insert(1);
h.show();

h.insert(9);
h.show();

h.insert(2);
h.show();

h.insert(0);
h.show();

console.log(h.extractMin()); // 0

h.show();
/** Result:
 * 0: 1
 * 1: 2
 * 2: 4
 * 3: 3
 * 4: 12
 * 5: 8
 * 6: 11
 * 7: 9
 */
