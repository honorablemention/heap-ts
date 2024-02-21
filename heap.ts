/**
 * Heap
 *
 * @summary A standard implementation of Heap in TypeScript
 */
class Heap {
  private _heap: number[] = [];

  constructor() {
    this._heap = [];
  }

  /**
   * Get the size of the heap
   * @returns number - the length of the heap array
   */
  private getHeapLength(): number {
    return this._heap.length;
  }

  /**
   * Check if the heap is empty
   * @returns boolean
   */
  private isEmpty(): boolean {
    return this._heap.length === 0;
  }

  /**
   * Get the index of the left child of i
   * @param i index
   * @returns number The index of the left child of i
   */
  private getLeftChild(i: number): number {
    return 2 * i;
  }

  /**
   * Get the index of the right child of i
   * @param i index
   * @returns number The index of the left child of i
   */
  private getRightChild(i: number): number {
    return 2 * i + 1;
  }

  /**
   * Get the index of the parent of i
   * @param i index
   * @returns number The index of the parent of i
   */
  private getParent(i: number): number {
    return Math.floor(i / 2);
  }

  /**
   * Swaps elements x and y in the heap array
   * @param x index
   * @param y index
   * @returns number[] the heap
   */
  private swap(x: number, y: number): number[] {
    [this._heap[x], this._heap[y]] = [this._heap[y], this._heap[x]];
    return this._heap;
  }

  /**
   * Check if index exists in heap
   * @param i index
   * @returns boolean if index is out of bounds
   */
  private isNull(i: number): boolean {
    return i < 0 || i > this._heap.length;
  }

  /**
   * Prints the contents of the heap array to the console
   */
  show(): void {
    console.log(this._heap);
  }

  /**
   * Restores heap property by 'sifting up' the newly inserted element as
   * far up as it should go.
   * @returns the heap
   */
  siftUp(): number[] {
    let current = this.getHeapLength() - 1;
    while (current > 0) {
      const parentIndex = this.getParent(current);
      if (this._heap[parentIndex] <= this._heap[current]) return this._heap;
      this.swap(parentIndex, current);
      current = parentIndex;
    }
    return this._heap;
  }

  /**
   * Restores heap property: assigning a new value to x[0] when
   * x[0,..n] is a heap, leaves heap(1, n). 'siftdown' makes
   * heap(0, n) true.
   * @returns the heap
   */
  siftDown(): number[] {
    // Start current index at the root
    let current: number = 0;
    // Get the left child of the current index compare with heap length
    // ; break if we go past the heap length
    while (this.getLeftChild(current) < this.getHeapLength()) {
      const leftChildIndex = this.getLeftChild(current);
      const rightChildIndex = this.getRightChild(current);

      const smallerChildIndex =
        rightChildIndex < this.getHeapLength() &&
        this._heap[rightChildIndex] < this._heap[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex;

      if (this._heap[current] < this._heap[smallerChildIndex])
        return this._heap;
      this.swap(smallerChildIndex, current);
      current = smallerChildIndex;
    }
    return this._heap;
  }

  insert(value: number): number[] {
    this._heap.push(value);
    return this.siftUp();
  }

  extractMin(): number | undefined {
    if (this.isEmpty()) return undefined;
    if (this._heap.length === 1) return this._heap.pop();
    const min = this._heap[0];
    this._heap[0] = this._heap.pop()!;
    this.siftDown();
    return min;
  }

  peek(): number | undefined {
    return this.isEmpty() ? undefined : this._heap[0];
  }
}

export default Heap;
