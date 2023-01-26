class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  index(c): number {
    return c.codePointAt(0) - 'a'.codePointAt(0);
  }

  insert(word: string): void {
    let ptr = this.root;
    const listChar = [...word];
    for (const c of listChar) {
      if (ptr.children[this.index(c)] === null) {
        ptr.children[this.index(c)] = new TrieNode();
      }
      ptr = ptr.children[this.index(c)];
    }
    ptr.isWord = true;
  }

  search(word: string): boolean {
    let ptr = this.root;
    const listChar = [...word];
    for (const c of listChar) {
      if (ptr.children[this.index(c)] === null) {
        return false;
      }
      ptr = ptr.children[this.index(c)];
    }
    return ptr.isWord;
  }

  startsWith(prefix: string): boolean {
    let ptr = this.root;
    const listChar = [...prefix];
    for (const c of listChar) {
      if (ptr.children[this.index(c)] === null) {
        return false;
      }
      ptr = ptr.children[this.index(c)];
    }
    return ptr !== null;
  }
}

class TrieNode {
  children: TrieNode[] = Array(26).fill(null);
  isWord: boolean = false;
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
