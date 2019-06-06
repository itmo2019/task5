function generateChain(text) {
  const sentences = text.split(/(\.+)/).filter(s => s.length > 0 && s !== '.');

  const graph = [];

  for (const sentence of sentences.values()) {
    const addSymbol = (from, to) => {
      if (graph[from] == null) graph[from] = [];

      if (graph[from][to] == null) graph[from][to] = 1;
      else graph[from][to]++;
    };

    const symbols = sentence.split(/\s+/).filter(s => s.length > 0);
    if (symbols.length > 0) {
      addSymbol('markov-start', symbols[0]);
      for (let cur = 0, next = 1; next < symbols.length; cur++, next++) {
        addSymbol(symbols[cur], symbols[next]);
      }
      addSymbol(symbols.slice(-1), 'markov-end');
    }
  }

  for (const from of graph.keys()) {
    let sum = 0;
    for (const to of graph[from].keys()) sum += graph[from][to];
    for (const to of graph[from].keys()) graph[from][to] /= sum;
  }

  return graph;
}

export default function createMarkovChain(sampleText) {
  const chain = generateChain(sampleText);

  return {
    sequence() {
      const choose = probs => {
        const prob = Math.random();

        let sum = 0;
        for (const to of probs.keys()) {
          if (prob < sum + probs[to]) return to;
          sum += probs[to];
        }
        return 'markov-end';
      };

      const seq = ['markov-start'];

      let curSymbol = seq[0];
      while (curSymbol !== 'markov-end') {
        curSymbol = choose(chain[curSymbol]);
        seq.push(curSymbol);
      }

      seq.shift();
      seq.pop();

      return seq;
    }
  };
}
