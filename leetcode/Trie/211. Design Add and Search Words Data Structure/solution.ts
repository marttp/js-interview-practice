class WordDictionary {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  search(word: string): boolean {
    return this.match(word, 0, this.root);
  }
  // word, currentIndex, currentTrieNode
  match(word: string, index: number, node: TrieNode): boolean {
    if (index >= word.length) {
      return node.isWord;
    }
    const c = word[index];
    if (c === '.') {
      // Scan every children (!== null)
      for (const child of node.children) {
        if (child !== null && this.match(word, index + 1, child)) {
          return true;
        }
      }
    } else {
      if (
        node.children[this.findIndex(c)] !== null &&
        this.match(word, index + 1, node.children[this.findIndex(c)])
      ) {
        return true;
      }
    }
    return false;
  }

  findIndex(c: string): number {
    return c.codePointAt(0) - 'a'.codePointAt(0);
  }

  addWord(word: string): void {
    let ptr = this.root;
    for (const c of word) {
      if (ptr.children[this.findIndex(c)] === null) {
        ptr.children[this.findIndex(c)] = new TrieNode();
      }
      ptr = ptr.children[this.findIndex(c)];
    }
    ptr.isWord = true;
  }
}

class TrieNode {
  children: TrieNode[] = Array(26).fill(null);
  isWord: boolean = false;
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
