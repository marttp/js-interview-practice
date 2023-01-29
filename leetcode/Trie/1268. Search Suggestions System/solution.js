/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  const result = [];
  const trie = buildTrie(products);
  const prefixArray = [];
  for (const c of searchWord) {
    prefixArray.push(c);
    result.push(trie.getWordsFromPrefix(prefixArray));
  }
  return result;
};

function buildTrie(products) {
  const root = new Trie();
  for (const p of products) {
    root.insert(p);
  }
  return root;
}

function findIndex(c) {
  return c.codePointAt(0) - 'a'.codePointAt(0);
}

function invertIndex(i) {
  const codePoint = 'a'.codePointAt(0) + i;
  return String.fromCodePoint(codePoint);
}

class TrieNode {
  constructor() {
    this.children = Array(26).fill(null);
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  getWordsFromPrefix(prefixArray) {
    const result = [];
    let ptr = this.root;
    for (const c of prefixArray) {
      if (ptr.children[findIndex(c)] === null) {
        return result;
      }
      ptr = ptr.children[findIndex(c)];
    }
    this.gatheringWords(ptr, [...prefixArray], result);
    return result;
  }

  gatheringWords(node, prefixArray, result) {
    if (result.length === 3) {
      return;
    }
    if (node.isWord) {
      result.push(prefixArray.join(''));
    }
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      if (child !== null) {
        const clonePrefix = [...prefixArray];
        clonePrefix.push(invertIndex(i));
        this.gatheringWords(child, clonePrefix, result);
      }
    }
  }

  insert(word) {
    let ptr = this.root;
    for (const c of word) {
      if (ptr.children[findIndex(c)] === null) {
        ptr.children[findIndex(c)] = new TrieNode();
      }
      ptr = ptr.children[findIndex(c)];
    }
    ptr.isWord = true;
  }
}
