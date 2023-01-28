/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  const trie = buildTrie(dictionary);
  const words = sentence.split(' ');
  const result = words.map((w) => trie.replace(w));
  return result.join(' ');
};

function buildTrie(dictionary) {
  const root = new Trie();
  for (const dict of dictionary) {
    root.insertWord(dict);
  }
  return root;
}

class TrieNode {
  constructor() {
    this.children = Array(26).fill(null);
    this.isEndRoot = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insertWord(dict) {
    let ptr = this.root;
    for (const c of dict) {
      if (ptr.children[findIndex(c)] === null) {
        ptr.children[findIndex(c)] = new TrieNode();
      }
      ptr = ptr.children[findIndex(c)];
    }
    ptr.isEndRoot = true;
  }

  replace(word) {
    let ptr = this.root;
    const result = [];
    for (const c of word) {
      if (ptr.children[findIndex(c)] === null) {
        return word;
      }
      result.push(c);
      if (ptr.children[findIndex(c)].isEndRoot) {
        return result.join('');
      }
      ptr = ptr.children[findIndex(c)];
    }
    return result.join('');
  }
}

const findIndex = (c) => c.codePointAt(0) - 'a'.codePointAt(0);
